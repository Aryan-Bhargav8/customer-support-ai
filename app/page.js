

'use client';

import { Box, Typography, Button } from '@mui/material';
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
            backgroundSize:'cover',
            color:'white',
          }}
       
      >
        <Box display="flex" flexDirection="column" alignItems="center" mb={4} p={4}  spacing={2}   borderRadius={10} >
          <Typography variant="h2"  mb={2} sx={{ fontWeight: 'bold', textAlign: 'center',fontFamily:'Poppins', color:'#D9D9D9' }}>
          Welcome to Headstarter AI Support: 
          </Typography>
          <Typography variant="h3"  mb={2} sx={{ fontWeight: 'bold', textAlign: 'center',fontFamily:'Poppins' ,color:'#D9D9D9' }}>
          Your Partner in AI-Powered Interviews for Software Engineering Jobs!
          </Typography>
          <Typography variant="h6" mb={4} sx={{ fontWeight: 'bold',textAlign: 'center' ,fontFamily:'Poppins',  color:'#D9D9D9'}}>
          We are thrilled to assist you in navigating our platform, where AI technology meets the world of software engineering interviews. Whether you're a candidate preparing for your next role or a recruiter seeking top talent, Headstarter AI Support is here to ensure a seamless experience.
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={handleGetStarted}
            sx={{fontFamily:'Quicksand',
              mt: 2,
              backgroundColor: '#6F9DFF',
              color:'black',
              '&:hover': {
                backgroundColor: '#9980ff',
              },
              padding: '10px 20px',
              borderRadius: '20px',
              textTransform: 'none',
              fontSize: '20px',
              fontWeight: 'bold',
              display: 'block',
            }}
          >
            Let's get started !
          </Button>
        </Box>

        

      </Box>
    </Box>
  );
}

