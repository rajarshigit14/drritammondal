import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, YouTube } from '@mui/icons-material';

const SocialsSection = () => {
  const socials = [
    {
      icon: <YouTube sx={{ fontSize: 40 , color:'red'}} />,
      link: 'https://youtube.com/@wanderingdoctor?si=8FfXqmJP6r5vmDJz',
    },
    {
      icon: <Facebook sx={{ fontSize: 40 }} />,
      link: 'https://www.facebook.com/profile.php?id=100066600607063&mibextid=LQQJ4d',
    },
  ];

  return (
    <Box id="socials" py={3} textAlign="center" sx={{
        backgroundColor:'#E3F2FD'
    }}>
      <Typography
        variant="h4"
        sx={{ color: '#00239C', fontWeight: 'bold', mb: 2 }}
      >
        Connect with Me
      </Typography>
      <Box display="flex" justifyContent="center" mt={2} gap={2}>
        {socials.map((social, index) => (
          <IconButton
            key={index}
            color="primary"
            sx={{
              '&:hover': { transform: 'scale(1.2)' },
              transition: 'transform 0.3s ease',
            }}
            onClick={() => window.open(social.link, '_blank')}
          >
            {social.icon}
          </IconButton>
        ))}
      </Box>
      <Typography
        variant="body2"
        sx={{
          mt: 3,
          color: '#00239C',
          fontSize: '0.875rem',
          fontWeight: '600',
        }}
      >
        &copy; 2024 Dr.Ritam Mondal. All rights reserved.
      </Typography>
    </Box>
  );
};

export default SocialsSection;
