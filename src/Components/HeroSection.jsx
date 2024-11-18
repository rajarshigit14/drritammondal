import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import doctorImage from '../assets/displayimg1.jpg';
import backgroundImage from '../assets/backgroundimg1.jpg';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const phoneNumber = '918240284506'; 

  return (
    <Box
      id="home"
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      minHeight="100vh"
      sx={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: { xs: 'cover', md: 'contain' }, // Adjusted to contain on larger screens
        backgroundRepeat: 'no-repeat', // Prevents image repetition
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        overflowX: 'hidden',
        overflowY: 'hidden',
        fontFamily: 'Inter, sans-serif',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        backdropFilter: { md: 'blur(5px)' }, // Blur effect for larger screens only
      }}
    >
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems={{ xs: 'center', md: 'flex-start' }}
        textAlign={{ xs: 'center', md: 'left' }}
        sx={{
          maxWidth: { xs: '100%', md: '50%' },
          p: { xs: 2, md: 10 },
          marginTop: { xs: 8, md: 0 },
        }}
      >

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '4.5rem' },
              color: 'white',
              fontWeight: {xs:'800',md: '800'},
              maxWidth: '450px',
              fontFamily: 'Inter, sans-serif',
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)',
              letterSpacing: '1.5px',
              lineHeight: 1.3,
            }}
          >
            Trusted Care
            <Box component="span" sx={{ color: '#00239C' }}> for Your Little Treasure</Box>
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          style={{ marginTop: '3rem' }}
        >
          <Button
            variant="contained"
            color="primary"
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            sx={{
              backgroundColor: '#00239C',
              fontWeight: 'bold',
              padding:{xs:'0.6rem 1.5rem',md:'0.8rem 2rem'},
              fontSize: { xs: '0.9rem', md: '1rem' },
              borderRadius: '30px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s',
              '&:hover': {
                backgroundColor: '#ffffff',
                color:'#00239C',
                transform: 'scale(1.05)',
              },
            }}
          >
            Contact on WhatsApp
          </Button>
          <Box
          sx={{
            mt: 2,
            py: 1,
            px: {xs:'1rem',md:'2rem'},
            backgroundColor: '#00239C', 
            borderRadius: '30px',
            display: 'inline-block', 
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '0.9rem', md: '1.2rem' },
            color: '#FFFFFF',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          For Appointment Assistance, Call{' '}
          <Box component="span" sx={{ fontWeight: 'bold', color: '#FFD700' }}>
            8240284506
          </Box>
        </Typography>
      </Box>
        </motion.div>
      </Box>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 1 }}
        style={{ flex: '1', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
      >
        <Avatar
          src={doctorImage}
          alt="Doctor"
          sx={{
            width: { xs: 270, md: 420 },
            height: { xs: 270, md: 420 },
            boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.3)',
            border: '4px solid white',
          }}
        />
         <Box
              sx={{
              padding: '8px 16px',
              borderRadius: '20px',
              marginTop:'16px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',              
              }}
          > 
              <Typography
              variant="h4"
              sx={{
                  color: '#00239C',
                  fontWeight: 'bold',
                  
                  display: { xs: 'none', md: 'block' },
                  textAlign: 'center',
                  fontSize: { xs: '1rem', md: '1.7rem' },
                  fontFamily: 'Inter, sans-serif',
              }}
              >
              Dr. Ritam Mondal (MD, Pediatrics)
              </Typography>
          </Box> 
      </motion.div>
    </Box>
  );
};

export default HeroSection;
