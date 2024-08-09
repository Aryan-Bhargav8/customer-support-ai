

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
        }}

      >
        
        <AppBar position="absolute" elevation={0} sx={{ backgroundColor: 'transparent', padding: '10px 20px' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ position:'absolute', display: 'flex', alignItems: 'center' }}>
              <Avatar src="/logo.jpg" alt="logo" sx={{ width: 56, height: 56 }} />
              <IconButton
                edge="start"
                color="inherit"
                aria-label="logo"
                sx={{ mr: 2, fontFamily: 'poppins', padding: "20px" }}
              > SupportIQ
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <Box display="flex" flexDirection="column" alignItems="center" mb={4} p={4} spacing={2} borderRadius={10} sx={{ backdropFilter: 'blur(10px)' }} >
          <Typography variant="h2" mb={2} sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Poppins', color: '#8bfcf5', textShadow:'3px 5px 1px #cc0c9c'}}>
            Welcome to SupportIQ:
          </Typography>
          <Typography variant="h3" mb={2} sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Poppins', color: '#8bfcf5',textShadow:'3px 5px 1px #cc0c9c' }}>
            your all-knowing, always-on digital assistant!
          </Typography>

          <Typography variant="h6" mb={4} sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Poppins', color: '#8bfcf5', fontSize:'1.5em' ,textShadow:'3px 5px 1px #cc0c9c'}}>
            Think of me as your personal helper,<br/>designed to make your customer service experience seamless and efficient.<br/> Whether it&apos;s day or night .<br/>I am here to ensure you get the support you need .
          </Typography>
        </Box>

        {/* button */}
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
      padding: '10px 20px',
      borderRadius: '20px',
      fontSize: '20px',
      fontWeight: 'bold',
      display: 'block',
      transition: 'bottom 0.3s ease-in-out',  // Smooth transition for bottom position

      '&:hover': {
        backgroundColor: '#9980ff',
        bottom: '0px',  // Move the button up when hovered
        color: '#efd7fa',
      },
      '&:active': {
        bottom: '-2px',  // Move the button down smoothly when clicked
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

