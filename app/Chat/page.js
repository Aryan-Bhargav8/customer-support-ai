'use client';

import { Box, Button, Stack, TextField, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { useState ,useEffect, useRef } from 'react';
import { signOutUser } from "../../firebase";
import { useRouter } from 'next/navigation';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true, // Enable HTML tags in source
  linkify: true, // Autoconvert URL-like text to links
  typographer: true, // Enable some language-neutral replacement + quotes beautification
});

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm SupportIQ. How can I help you today?",
    },
  ]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;
    setIsLoading(true)  // Don't send empty messages

    setMessage(''); // Clear the input field
    setMessages((messages) => [
      ...messages,
      { role: 'user', content: message }, // Add the user message
      { role: 'assistant', content: '' }, // Add the assistant message placeholder
    ]);

    // Call the API to get the assistant's response
    try{
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([...messages, { role: 'user', content: message }]),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      
      const reader = response.body.getReader(); // Get reader to read the response body
      const decoder = new TextDecoder(); // Create a new text decoder to decode the response text
  
      let result = '';
      // Function to process the text from the response
      const processText = async ({ done, value }) => {
        if (done) {
          return result;
        }
        const text = decoder.decode(value || new Uint8Array(), { stream: true }); // Decode the text
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1]; // Get the last message (assistant message placeholder)
          let otherMessages = messages.slice(0, messages.length - 1); // Get all the other messages
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text }, // Update the last message with the new text from the response body, that is the assistant's message
          ];
        });
        result += text;
        return reader.read().then(processText); // Read the next chunk of response body and process the text
      };
  
      await reader.read().then(processText);
    }catch(error){
      console.error('Error:', error)
    setMessages((messages) => [
      ...messages,
      { role: 'assistant', content: "I'm sorry, but I encountered an error. Please try again later." },
    ])
    }
    setIsLoading(false)
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      sendMessage()
    }
  }

  const handleLogout = async () => {
    try {
      await signOutUser();
      router.push('/'); // Redirect to home or login page after logout
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));


  // AutoScrolling Messages 
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  
  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: 'url(1.gif)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '20px', // Added padding for mobile devices
      }}
    >
      <Stack
        direction="column"
        width={{ xs: '100%', sm: '500px' }} // Responsive width
        height="700px"
        borderRadius={10}
        boxShadow={2}
        border="1px solid #dedeed"
        p={2}
        spacing={3}
        sx={{
          fontFamily: 'Poppins',
          mt: 2,
          backgroundColor: '#dedeed',
          position: 'relative', // Make sure the button is positioned correctly
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar alt="logo" src="/logo.jpg" sx={{ width: 56, height: 56 }} />
            </StyledBadge>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{
                mr: 2,
                fontFamily: 'Poppins',
                padding: { xs: '10px', sm: '20px' }, // Responsive padding
              }}
            >
              SupportIQ
            </IconButton>
          </Box>
          <Button
            variant="outlined"
            color="error"
            onClick={handleLogout}
            sx={{
              fontFamily: 'Poppins',
              textTransform: 'none',
            }}
          >
            Logout
          </Button>
        </Box>
        <Stack
          direction="column"
          spacing={2}
          flexGrow={1}
          overflow="auto"
          maxHeight="100%"
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={
                message.role === 'assistant' ? 'flex-start' : 'flex-end'
              }
            >
              <Box
                bgcolor={
                  message.role === 'assistant' ? 'primary.main' : 'secondary.main'
                }
                color="white"
                borderRadius={8}
                p={3}
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: { xs: '14px', sm: '16px' }, // Responsive font size
                }}
                dangerouslySetInnerHTML={{
                  __html : md.render(message.content), // Parse and render Markdown as HTML
                }}
              />
            </Box>
          ))} 
          <div ref={messagesEndRef} /> {/* AutoScrolling Messages */}
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <TextField
            label="Enter your doubts here..."
            fullWidth
            variant="outlined"
            sx={{
              bgcolor: 'white',
              fontFamily: 'Poppins',
              flexGrow: 1,
              borderRadius: '24px',
            }}
            InputProps={{
              style: { borderRadius: '24px' },
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            disabled={isLoading}
          />
          <Box
           sx={{
            borderRadius: 6,
            fontFamily: 'Poppins',
            bgcolor: '#6F9DFF',
            border: '1px solid black',
            '&:hover': {
                backgroundColor: '#9980ff',
              }
            }}>
            <Button
            variant="contained"
            onClick={sendMessage}
            disabled={isLoading}
            sx={{
              borderRadius: 6,
              fontFamily: 'Poppins',
              bgcolor: '#6F9DFF',
              padding: { xs: '8px', sm: '12px' }, // Responsive padding
              minWidth: '50px',
              bottom: '5px',
              border: '0.5px solid black',
              boxShadow: '0px 1px 1px transparent',
              transition: 'bottom 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: '#9980ff',
                bottom: '0px',
                color: '#efd7fa',
              },
              ':active': {
                bottom: '-2px',
              },
            }}
          >
            <Avatar src="/send.png" alt="send" sx={{ width: 24, height: 24 }} />
          </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
