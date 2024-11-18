import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Image5 from '../assets/Image3.jpeg';
import Image9 from '../assets/Image9.jpeg';
const AboutSection = () => {
  const paragraph = `
    Dr. Ritam Mondal is working as Pediatric and Neonatology consultant in South Kolkata. 
    He is attached with various corporate institutions. After completion of his MD in Pediatrics, 
    he has worked with hospitals like Cloudnine & Motherhood Hospital with a dedicated team of Doctors 
    from UK and CANADA. He worked as a Neonatology fellow and registrar with Cloudnine Hospital Bengaluru 
    and moved to Kolkata to join hands with Woodlands Hospital as a Pediatrician. His special interest is 
    neonatology and pediatric growth and development. He is a life member of the Indian Academy of Pediatrics 
    and currently works with Manipal Hospitals, Mukundapur as a Pediatric consultant.
  `;

  const accolades = [
    {
      title: 'Area of Specialization',
      details: ['Neonatology', 'General Pediatrics'],
      icon: '🩺',
    },
    {
      title: 'Awards & Honours',
      details: [
        'Presented poster in State Pediatric Conference',
        'Paper presented on Pediatric Neurology',
        'Trained in Pediatric Advanced Life Support (PALS)',
        'Trained in Neonatal Advanced Life Support (NALS)',
      ],
      icon: '🏆',
    },
  ];

  return (
    <Box
      id="about"
      py={6}
      px={{ xs: 2, md: 12 }}
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
      gap={4}
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ flex: 1 }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#00239C',
            fontWeight: 'bold',
            textAlign: { xs: 'center', md: 'left' },
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            fontFamily: 'Inter, sans-serif',
            mt: { xs: 1, md: 0 },
            mb: { xs: 2, md: 4 },
          }}
        >
          About Dr. Ritam Mondal
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#00239C',
            lineHeight: 1.8,
            textAlign: { xs: 'center', md: 'left' },
            fontSize: { xs: '0.9rem', md: '1rem' },
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {paragraph}
        </Typography>

        {/* Accolades Section */}
        {accolades.map((section, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: { xs: 3, md: 4 },
              my: 3,
              borderRadius: '12px',
              backgroundColor: index % 2 === 0 ? '#E3F2FD' : '#FFFDE7',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -15,
                left: -15,
                backgroundColor: '#00239C',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: 50,
                height: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              {section.icon}
            </Box>
            <Typography
              variant="h6"
              sx={{
                color: '#00239C',
                fontWeight: 'bold',
                fontSize: { xs: '1.2rem', md: '1.4rem' },
                mb: 2,
              }}
            >
              {section.title}
            </Typography>
            <Stack
              spacing={1}
              sx={{
                color: '#00239C',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
              }}
            >
              {section.details.map((item, i) => (
                <Typography key={i} component="p" sx={{ pl: 2, position: 'relative' }}>
                  <Box
                    component="span"
                    sx={{
                      position: 'absolute',
                      left: -8,
                      top: 0,
                      fontSize: '1.2rem',
                      color: index % 2 === 0 ? '#1976D2' : '#FBC02D',
                    }}
                  >
                    ●
                  </Box>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Paper>
        ))}
      </motion.div>

      {/* Image Section */}
        <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
        {/* Doctor's Image */}
        <Box
            component="img"
            src={Image9}
            alt="Dr. Ritam Mondal"
            sx={{
            width: { xs: '90%', md: '110%' },
            maxWidth: 350,
            borderRadius: '10px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            mb: 2,
            transition: 'transform 0.3s',
            '&:hover': {
                transform: 'scale(1.05)',
            },
            }}
        />

        {/* Decorative Divider */}
        <Box
            sx={{
            width: '60%',
            height: 2,
            backgroundColor: '#00239C',
            mb: 2,
            borderRadius: '1px',
            }}
        />

        {/* Degrees Section */}
        <Box
            sx={{
            backgroundColor: '#E3F2FD',
            padding: '8px 16px',
            borderRadius: '20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
            transition: 'transform 0.3s',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.25)',
            },
            }}
        >
            <Typography
            variant="h6"
            sx={{
                color: '#00239C',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontFamily: 'Inter, sans-serif',
            }}
            >
            MBBS, MD (Paed), PGPN (Boston)
            </Typography>
        </Box>
        </motion.div>

    </Box>
  );
};

export default AboutSection;
