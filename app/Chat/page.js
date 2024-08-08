'use client';

import { Box, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm the Headstarter support assistant. How can I help you today?",
    },
  ]);
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    setMessage(''); // Clear the input field
    setMessages((messages) => [
      ...messages,
      { role: 'user', content: message }, // Add the user message
      { role: 'assistant', content: ''}, // Add the assistant message placeholder
    ] )

    // Call the API to get the assistant's response
    const response = fetch('/api/chat' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([...messages, { role: 'user', content: message }]),
  }).then(async(res)=>{
    const reader = res.body.getReader();// get reader to read the response body
    const decoder = new TextDecoder(); // create a new text decoder to decode the response text

    let result = '';
    // Function to process the text from the response
    return reader.read().then(
      function processText({done , value}){
        if(done){
          return result;
        }
        const text = decoder.decode(value || new Uint8Array() , {stream: true});// decode the text
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1];// get the last message(assistant message placeholder)
          let otherMessages = messages.slice(0, messages.length - 1);// get all the other messages
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },// update the last message with the new text from the response body,that is the assistant's message
          ]
        })
        return reader.read().then(processText); // read the next chunk of response body and process the text
      }
    )
  })
  }

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
        backgroundSize:'cover',
      }}

    
    >
      <Stack
        direction={"column"}
        width="500px"
        height="700px"
        borderRadius={10} 
        boxShadow={2}
        border="1px  solid #ccc "
        p={2}
        spacing={3}
        sx={
          {
            fontFamily:'roboto',
              mt: 2,
              backgroundColor: '#d1e0e0',
          }
        }
      >
        <Stack
          direction={"column"}
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
                sx={
                  {
                    fontFamily:'roboto',
                  }
                }
              >
                {message.content}
              </Box>
            </Box>
          ))}
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
        >
          <TextField 
            label="Enter your doubts here..."
            fullWidth
            variant='filled'
            sx={{
              bgcolor: 'white',
              borderRadius: 1,
              fontFamily:'roboto',
              boxShadow :2
              
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
           variant="contained" 
           onClick={sendMessage}
           sx={{
            borderRadius: 6,
            fontFamily:'roboto',
           }}>
            Send
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}