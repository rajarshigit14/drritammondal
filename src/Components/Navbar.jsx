import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = ['Home', 'About', 'Gallery', 'Clinics', 'Services', 'Socials'];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#00239C' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              fontWeight: 'bold',
              display: { xs: 'block' },
            }}
          >
            Dr. Ritam Mondal
          </Typography>


          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((section) => (
              <Button
                key={section}
                color="inherit"
                sx={{
                  fontSize: '1rem',
                  marginRight: '1rem',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                }}
              >
                <Link to={section.toLowerCase()} smooth duration={500} style={{ color: '#ffffff' }}>
                  {section}
                </Link>
              </Button>
            ))}
          </Box>

          {/* Mobile Hamburger Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawer(true)}
              sx={{ marginRight: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
          <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#E3F2FD', 
          color: '#00239C', 
          width: 250,
          border: 'none',
          boxShadow: '4px 0 15px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s ease', 
        },
      }}
    >
      <List>
        {navItems.map((section) => (
          <ListItem
            button
            key={section}
            onClick={toggleDrawer(false)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                cursor: 'pointer',
              },
            }}
          >
            <Link
              to={section.toLowerCase()}
              smooth
              duration={500}
              style={{
                textDecoration: 'none',
                color: '#00239C', 
              }}
            >
              <ListItemText
                primary={section}
                primaryTypographyProps={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                }}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>

    </>
  );
};

export default Navbar;

