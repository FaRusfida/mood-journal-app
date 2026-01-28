import React, { useState, useContext } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Simple validation (UI only - no backend)
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Simulate login (accept any email/password)
    login({ email, name: email.split('@')[0] });
    navigate('/prompts');
  };

  return (
    <Container maxWidth="sm" className="page-container fade-in">
      <Paper
        elevation={6}
        sx={{
          p: 4,
          mt: 4,
          borderRadius: 3,
          background: 'linear-gradient(135deg, #ffffff 0%, #f3e5f5 100%)',
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <LockOutlinedIcon sx={{ fontSize: 50, color: '#7c4dff', mb: 1 }} />
          <Typography variant="h4" sx={{ color: '#4a148c', fontWeight: 600 }}>
            Login
          </Typography>
          <Typography variant="body2" sx={{ color: '#6a1b9a', mt: 1 }}>
            Welcome back! Please login to continue.
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#7c4dff',
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#7c4dff',
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              mb: 2,
              py: 1.5,
              backgroundColor: '#7c4dff',
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#4a2c9f',
              },
            }}
          >
            Login
          </Button>
        </form>

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="body2" sx={{ color: '#6a1b9a' }}>
            Don't have an account?{' '}
            <Link
              to="/register"
              style={{ color: '#7c4dff', textDecoration: 'none', fontWeight: 500 }}
            >
              Register here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
