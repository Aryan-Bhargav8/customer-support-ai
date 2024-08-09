

'use client';

import { Box, Typography, Button ,AppBar,Toolbar,IconButton,Avatar} from '@mui/material';
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
      <AppBar position="static" sx={{ backgroundColor: '#020929', padding: '10px 20px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar  src="/logo.jpg" alt="logo" sx={{ width: 56, height: 56 }}/>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="logo"
        sx={{ mr: 2 ,fontFamily: 'poppins',padding:"20px"}}
      > SupportIQ
      </IconButton>
      </Box>
      </Toolbar>
      </AppBar>

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
          Welcome to SupportIQ: 
          </Typography>
          <Typography variant="h3"  mb={2} sx={{ fontWeight: 'bold', textAlign: 'center',fontFamily:'Poppins' ,color:'#D9D9D9' }}>
          your all-knowing, always-on digital assistant!
          </Typography>
          <Typography variant="h6" mb={4} sx={{ fontWeight: 'bold',textAlign: 'center' ,fontFamily:'Poppins',  color:'#D9D9D9'}}>
          Think of me as your personal helper, designed to make your customer service experience seamless and efficient. Whether it’s day or night, I’m here to ensure you get the support you needs swiftly and effortlessly.
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

