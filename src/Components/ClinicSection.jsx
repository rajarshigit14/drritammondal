import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { LocalHospital, LocalPharmacy, MedicalServices } from '@mui/icons-material'; // New icons
import { motion } from 'framer-motion';

const ClinicsSection = () => {
  const clinics = [
    { name: 'Shoishob Pediatric Clinic, Champahati', icon: <MedicalServices /> },
    { name: 'Remedy Diagnostic, Garia', icon: <MedicalServices /> },
    { name: 'Welkin, Garia', icon: <MedicalServices />  },
    { name: 'Apollo Clinic, Baruipur', icon: <MedicalServices />  },
  ];

  const hospitals = [
    { name: 'Manipal Hospital, Mukundapur', icon: <LocalHospital /> },
    { name: 'Desun Hospital', icon: <LocalHospital /> },
    { name: 'Iris Hospital', icon: <LocalHospital /> },
    { name: 'Apex Hospital', icon: <LocalHospital /> },
    { name: 'Remedy Hospital', icon: <LocalHospital /> },
    { name: 'Hindustan Healthpoint', icon: <LocalHospital /> },
  ];

  return (
    <Box id="clinics" py={6} textAlign="center" sx={{ backgroundColor: '#F3E5F5' }}>
      {/* Heading for Clinics */}
      <Typography variant="h4" sx={{ color: '#9C27B0', fontWeight: 'bold', mb: 4 }}>
        Clinics
      </Typography>

      <Grid container spacing={2} justifyContent="center" mb={4}>
        {clinics.map((clinic) => (
          <Grid item xs={10} sm={4} md={3} key={clinic.name}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card sx={{ boxShadow: 5, borderRadius: 2, backgroundColor: '#EDE7F6', cursor: 'pointer' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ backgroundColor: '#9C27B0', borderRadius: '50%', padding: 1 }}>
                      {clinic.icon}
                    </Box>
                    <Typography variant="h6" sx={{ color: '#9C27B0', fontWeight: 'bold' }}>
                      {clinic.name}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Heading for Hospitals */}
      <Typography variant="h4" sx={{ color: '#9C27B0', fontWeight: 'bold', mb: 4 }}>
        Attached with
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {hospitals.map((hospital) => (
          <Grid item xs={10} sm={4} md={3} key={hospital.name}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card sx={{ boxShadow: 5, borderRadius: 2, backgroundColor: '#EDE7F6', cursor: 'pointer' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ backgroundColor: '#9C27B0', borderRadius: '50%', padding: 1 }}>
                      <LocalHospital sx={{ color: '#fff' }} />
                    </Box>
                    <Typography variant="h6" sx={{ color: '#9C27B0', fontWeight: 'bold' }}>
                      {hospital.name}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ClinicsSection;

