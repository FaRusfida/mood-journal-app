import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" className="page-container fade-in">
      <Box sx={{ textAlign: 'center', mb: 5, mt: 3 }}>
        <Typography
          variant="h2"
          sx={{
            color: '#7c4dff',
            fontWeight: 600,
            mb: 2,
            background: 'linear-gradient(135deg, #7c4dff 0%, #64b5f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Welcome to Your Mood Journal
        </Typography>
        <Typography variant="h6" sx={{ color: '#6a1b9a', mb: 4 }}>
          Track your daily mood, practice mindfulness, and build better mental wellness habits
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card
            className="hover-card"
            sx={{
              height: '100%',
              background: 'linear-gradient(135deg, #ffffff 0%, #f3e5f5 100%)',
            }}
            onClick={() => navigate('/prompts')}
          >
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <PsychologyIcon sx={{ fontSize: 60, color: '#7c4dff', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ color: '#4a148c', fontWeight: 600 }}>
                Daily Wellness
              </Typography>
              <Typography variant="body1" sx={{ color: '#6a1b9a' }}>
                Explore a variety of mental health prompts and exercises designed to support your
                daily wellness journey.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            className="hover-card"
            sx={{
              height: '100%',
              background: 'linear-gradient(135deg, #ffffff 0%, #e1bee7 100%)',
            }}
            onClick={() => navigate('/my-journal')}
          >
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <TrendingUpIcon sx={{ fontSize: 60, color: '#64b5f6', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ color: '#4a148c', fontWeight: 600 }}>
                Track Your Mood
              </Typography>
              <Typography variant="body1" sx={{ color: '#6a1b9a' }}>
                Record your daily mood, journal your thoughts, and visualize your progress over
                time with beautiful mood trends.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            className="hover-card"
            sx={{
              height: '100%',
              background: 'linear-gradient(135deg, #ffffff 0%, #ce93d8 100%)',
            }}
            onClick={() => navigate('/feedback')}
          >
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <FavoriteIcon sx={{ fontSize: 60, color: '#f06292', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ color: '#4a148c', fontWeight: 600 }}>
                Share Feedback
              </Typography>
              <Typography variant="body1" sx={{ color: '#6a1b9a' }}>
                Help us improve by sharing your experience and suggestions. Your feedback matters!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box
        sx={{
          textAlign: 'center',
          p: 4,
          borderRadius: 3,
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Typography variant="h6" sx={{ color: '#4a148c', mb: 2, fontWeight: 500 }}>
          🌟 Start Your Wellness Journey Today 🌟
        </Typography>
        <Typography variant="body1" sx={{ color: '#6a1b9a' }}>
          Register or login to begin tracking your mood and exploring wellness prompts designed to
          support your mental health.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
