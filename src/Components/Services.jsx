import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Healing, Vaccines, LocalHospital, ChildCare } from '@mui/icons-material';

const Services = () => {
  const services = [
    {
      icon: <Healing style={{ fontSize: 50, color: '#00239C' }} />,
      title: 'Comprehensive Neonatal Care',
      description: 'Expert treatment for neonatal care and pediatric illnesses with a compassionate touch.',
    },
    {
      icon: <Vaccines style={{ fontSize: 50, color: '#00239C' }} />,
      title: 'Vaccinations',
      description: 'Administering neonatal and pediatric vaccinations, including painless options.',
    },
    {
      icon: <LocalHospital style={{ fontSize: 50, color: '#00239C' }} />,
      title: 'Emergency Treatments',
      description: 'Hospital admissions in corporate hospitals for urgent and critical care.',
    },
    {
      icon: <ChildCare style={{ fontSize: 50, color: '#00239C' }} />,
      title: 'Parental Guidance',
      description: 'Support and advice on nutrition and growth for your child’s optimal development.',
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        minHeight: '45vh',
        py: 6,
        px: { xs: 3, md: 6 },
        backgroundColor: '#E3F2FD',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          mb: 3,
          color: '#00239C',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        Services
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ mb: 1 }}>{service.icon}</Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: '#00239C',
                    mb: 1,
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#555', fontFamily: 'Inter, sans-serif' }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
