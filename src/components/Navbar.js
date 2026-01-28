import React, { useContext, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { UserContext } from '../context/UserContext';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#e8eaf6',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        mb: 3
      }}
    >
      <Toolbar>
        <FavoriteIcon sx={{ mr: 1, color: '#7c4dff' }} />
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: '#7c4dff',
            fontWeight: 600,
            '&:hover': {
              color: '#4a2c9f',
            },
          }}
        >
          Mood Journal App
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button
            component={Link}
            to="/prompts"
            sx={{ color: '#6a1b9a', textTransform: 'none', fontWeight: 500 }}
          >
            Browse Prompts
          </Button>
          {user && (
            <Button
              component={Link}
              to="/my-journal"
              sx={{ color: '#6a1b9a', textTransform: 'none', fontWeight: 500 }}
            >
              My Journal
            </Button>
          )}
          <Button
            component={Link}
            to="/feedback"
            sx={{ color: '#6a1b9a', textTransform: 'none', fontWeight: 500 }}
          >
            Feedback
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{ color: '#6a1b9a', textTransform: 'none', fontWeight: 500 }}
          >
            Contact Us
          </Button>
          {user ? (
            <Button
              variant="outlined"
              onClick={handleLogout}
              sx={{
                borderColor: '#7c4dff',
                color: '#7c4dff',
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#4a2c9f',
                  backgroundColor: 'rgba(124, 77, 255, 0.1)',
                },
              }}
            >
              Logout
            </Button>
          ) : (
            <Fragment>
              <Button
                variant="contained"
                component={Link}
                to="/login"
                sx={{
                  backgroundColor: '#7c4dff',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#4a2c9f',
                  },
                }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/register"
                sx={{
                  borderColor: '#7c4dff',
                  color: '#7c4dff',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: '#4a2c9f',
                    backgroundColor: 'rgba(124, 77, 255, 0.1)',
                  },
                }}
              >
                Register
              </Button>
            </Fragment>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
