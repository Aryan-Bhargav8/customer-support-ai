'use client';

import { Box, Typography, Button, AppBar, Toolbar, IconButton, Avatar } from '@mui/material';
import { signInWithGoogle } from "../firebase";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      router.push('/Chat');  // Redirect to chat after successful login
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const handleGetStarted = () => {
    router.push('/Chat');
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      sx={{
        overflow: 'hidden',
        fontFamily: 'poppins',
      }}
    >
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundImage: 'url(2.gif)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          color: 'white',
          padding: '20px',
        }}
      >
        <AppBar
          position="absolute"
          elevation={0}
          sx={{
            backgroundColor: 'transparent',
            padding: { xs: '5px 10px', md: '10px 20px' },
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ position: 'absolute', display: 'flex', alignItems: 'center' }}>
              <Avatar src="/logo.jpg" alt="logo" sx={{ width: { xs: 40, md: 56 }, height: { xs: 40, md: 56 } }} />
              <IconButton
                edge="start"
                color="#00001a"
                aria-label="logo"
                sx={{
                  mr: 2,
                  fontFamily: 'poppins',
                  padding: { xs: '10px', md: '20px' },
                  fontSize: { xs: '1rem', md: '1.25rem' },
                }}
              >
                SupportIQ
              </IconButton>
            </Box>
            <Box sx={{ position: 'absolute', top: 20, right: 20, bgcolor: '#6F9DFF', borderRadius: '20px' }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleGoogleSignIn}
                sx={{
                  fontFamily: 'Quicksand',
                  backgroundColor: '#6F9DFF',
                  color: ' #e7fefc',
                  padding: '5px 10px',
                  border: '0.5px solid black',
                  borderRadius: '20px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  boxShadow: '0px 4px 4px transparent',
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#9980ff',
                    color: '#efd7fa',
                    transform: 'translateY(-1px)',
                  },
                  '&:active': {
                    transform: 'translateY(1px)',
                  },
                }}
              >
                Sign In
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb={4}
          p={4}
          spacing={2}
          borderRadius={10}
          sx={{
            backdropFilter: 'blur(10px)',
            width: { xs: '100%', md: 'auto' },
          }}
        >
          <Typography
            variant="h1"
            mb={5}
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'Poppins',
              color: '#8bfcf5',
              textShadow: '3px 5px 1px #cc0c9c',
              fontSize: { xs: '1.75rem', md: '2.5rem' },
            }}
          >
            Welcome to SupportIQ:
          </Typography>
          <Typography
            variant="h3"
            mb={2}
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'Poppins',
              color: '#8bfcf5',
              textShadow: '3px 5px 1px #cc0c9c',
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            your all-knowing, always-on digital assistant!
          </Typography>

          <Typography
            variant="h6"
            mb={4}
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'Poppins',
              color: '#8bfcf5',
              fontSize: { xs: '1rem', md: '1.5rem' },
              textShadow: '3px 5px 1px #cc0c9c',
            }}
          >
            Think of me as your personal helper,
            <br />
            designed to make your customer service experience seamless and efficient.
            <br /> Whether it&apos;s day or night.
            <br /> I am here to ensure you get the support you need.
          </Typography>
        </Box>

        <Box
          sx={{
            border: '0.5px solid black',
            borderRadius: '20px',
            backgroundColor: '#6F9DFF',
          }}
        >
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={handleGetStarted}
            sx={{
              fontFamily: 'Quicksand',
              backgroundColor: '#6F9DFF',
              color: '#c0fcf8',
              padding: { xs: '8px 16px', md: '10px 20px' },
              border: '0.5px solid black',
              borderRadius: '20px',
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 'bold',
              boxShadow: '0px 4px 4px transparent',
              transform: 'translateY(-5px)',
              transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: '#9980ff',
                color: '#efd7fa',
                transform: 'translateY(-1px)',
              },
              '&:active': {
                transform: 'translateY(1px)',
              },
            }}
          >
            Let&apos;s get started!
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
