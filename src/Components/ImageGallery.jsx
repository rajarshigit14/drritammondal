import React, { useState } from 'react';
import { Dialog, DialogActions, Grid, IconButton, Box, Typography } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { motion } from 'framer-motion';

import Image1 from '../assets/Image1.jpeg';
import Image2 from '../assets/Image4.jpeg';
import Image3 from '../assets/Image5.jpeg';
import Image4 from '../assets/Image2.jpeg';
import Image5 from '../assets/Image3.jpeg';
import Image6 from '../assets/Image6.jpeg';
import Image7 from '../assets/Image7.jpeg';
import Image8 from '../assets/Image8.jpeg';
import Image10 from '../assets/Image10.jpeg';
import Image11 from '../assets/Image11.jpeg';
import Image12 from '../assets/Image12.jpeg';
import Image13 from '../assets/Image13.jpeg';

const images = [
  { src: Image1, alt: 'Image 1' },
  { src: Image2, alt: 'Image 2' },
  { src: Image3, alt: 'Image 3' },
  { src: Image4, alt: 'Image 4' },
  { src: Image5, alt: 'Image 5' },
  { src: Image6, alt: 'Image 6' },
  { src: Image7, alt: 'Image 7' },
  { src: Image8, alt: 'Image 8' },
  { src: Image13, alt: 'Image 13'},
  { src: Image10, alt: 'Image 10' },
  { src: Image11, alt: 'Image 11' },
  { src: Image12, alt: 'Image 12' }, 

];

const ImageGallery = () => {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClickOpen = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box
    id="gallery"
      sx={{
        padding: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden', 
      }}
    >
      <Typography variant="h4" sx={{ color: '#00239C', fontWeight: 'bold', mb: 3 }}>
        Image Gallery
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth:'450px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                }}
                onClick={() => handleClickOpen(index)}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <img
      src={images[currentImageIndex].src}
      alt={images[currentImageIndex].alt}
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '100%', // Prevents image from overflowing horizontally
        maxHeight: '90vh', // Ensures image fits within the viewport height
        borderRadius: '10px',
        objectFit: 'contain', // Ensures the image maintains its aspect ratio
      }}
    />
    <DialogActions
      sx={{
        position: 'absolute',
        top: '50%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        transform: 'translateY(-50%)',
      }}
    >
      <IconButton
        onClick={prevImage}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: '#ffffff',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
          fontSize: '2rem',
          p: 2,
        }}
      >
        <ArrowBack fontSize="inherit" />
      </IconButton>
      <IconButton
        onClick={nextImage}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: '#ffffff',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
          fontSize: '2rem',
          p: 2,
        }}
      >
        <ArrowForward fontSize="inherit" />
      </IconButton>
    </DialogActions>
  </Box>
</Dialog>

    </Box>
  );
};

export default ImageGallery;

