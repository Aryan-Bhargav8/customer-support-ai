'use client';

import { Box, Typography, Button, AppBar, Toolbar, IconButton, Avatar } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

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
          backgroundImage: 'url(1.gif)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          color: 'white',
          padding: '20px', // Added padding for smaller screens
        }}
      >
        <AppBar
          position="absolute"
          elevation={0}
          sx={{
            backgroundColor: 'transparent',
            padding: { xs: '5px 10px', md: '10px 20px' }, // Responsive padding
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ position: 'absolute', display: 'flex', alignItems: 'center' }}>
              <Avatar src="/logo.jpg" alt="logo" sx={{ width: { xs: 40, md: 56 }, height: { xs: 40, md: 56 } }} />  {/* Responsive Avatar */}
              <IconButton
                edge="start"
                color="inherit"
                aria-label="logo"
                sx={{
                  mr: 2,
                  fontFamily: 'poppins',
                  padding: { xs: '10px', md: '20px' }, // Responsive padding
                  fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive font size
                }}
              >
                SupportIQ
              </IconButton>
            </Box>
            <Box sx={{  position: 'absolute', top: 20, right: 20, display: 'flex', alignItems: 'center' }}>
            <Button
            variant="contained"
            color="success"
            size="large"
            sx={{
              fontFamily: 'Quicksand',
              backgroundColor: '#6F9DFF',
              color: 'black',
              position: 'relative',
              bottom: '5px',

              '&:hover': {
                backgroundColor: '#9980ff',
                bottom: '0px',
              },
              padding: '10px 20px',
              borderRadius: '20px',
              fontSize: '20px',
              fontWeight: 'bold',
              display: 'block',
            }}
          >
            sign in 
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
            width: { xs: '100%', md: 'auto' }, // Full width on smaller screens
          }}
        >
          <Typography
            variant="h2"
            mb={2}
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'Poppins',
              color: '#8bfcf5',
              textShadow: '3px 5px 1px #cc0c9c',
              fontSize: { xs: '1.75rem', md: '2.5rem' }, // Responsive font size
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
              fontSize: { xs: '1.5rem', md: '2rem' }, // Responsive font size
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
              fontSize: { xs: '1rem', md: '1.5rem' }, // Responsive font size
              textShadow: '3px 5px 1px #cc0c9c',
            }}
          >
            Think of me as your personal helper,
            <br />
            designed to make your customer service experience seamless and efficient.
            <br /> Whether it&apos;s day or night.
            <br />I am here to ensure you get the support you need.
          </Typography>
        </Box>

        {/* Button */}
        <Box
          sx={{
            borderRadius: '20px',
            backgroundColor: '#6F9DFF',
            '&:hover': {
              backgroundColor: '#9980ff',
            },
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
              position: 'relative',
              bottom: '5px',
              padding: { xs: '8px 16px', md: '10px 20px' }, // Responsive padding
              borderRadius: '20px',
              fontSize: { xs: '16px', md: '20px' }, // Responsive font size
              fontWeight: 'bold',
              display: 'block',
              transition: 'bottom 0.3s ease-in-out',

              '&:hover': {
                backgroundColor: '#9980ff',
                bottom: '0px',
                color: '#efd7fa',
              },
              '&:active': {
                bottom: '-2px',
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
