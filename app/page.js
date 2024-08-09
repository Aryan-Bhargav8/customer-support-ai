

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

        <Box display="flex" flexDirection="column" alignItems="center" mb={4} p={4} spacing={2} borderRadius={10} sx={{ backdropFilter: 'blur(8px)' }}>
          <Typography variant="h2" mb={2} sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Poppins', color: '#D9D9D9' }}>
            Welcome to SupportIQ:
          </Typography>
          <Typography variant="h3" mb={2} sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Poppins', color: '#D9D9D9' }}>
            your all-knowing, always-on digital assistant!
          </Typography>

          <Typography variant="h6" mb={4} sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Poppins', color: '#D9D9D9' }}>
            Think of me as your personal helper,designed to make your customer service experience seamless and efficient. Whether it&apos;s day or night .I am here to ensure you get the support you need .
          </Typography>
        </Box>

        {/* button */}
        <Box
          sx={{
            borderRadius: '20px',
            backgroundColor: '#6F9DFF',
            '&:hover': {
              backgroundColor: '#9980ff',
            }
          }}>
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={handleGetStarted}
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
            Let&apos;s get started !
          </Button>
        </Box>



      </Box>
    </Box>
  );
}

