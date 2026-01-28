import React, { useContext } from 'react'; // Importing React for JSX
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  IconButton,
  Alert,
  LinearProgress,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { UserContext } from '../context/UserContext';
import { moodEmojis, moodLabels } from '../data';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const MyJournal = () => {
  const { user, journalEntries, deleteEntry } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <Container maxWidth="lg" className="page-container">
        <Alert severity="info" sx={{ mt: 4 }}>
          Please{' '}
          <Typography
            component="span"
            onClick={() => navigate('/login')}
            sx={{
              color: '#7c4dff',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontWeight: 500,
            }}
          >
            login
          </Typography>{' '}
          to view your journal entries.
        </Alert>
      </Container>
    );
  }

  // Calculate average mood
  const averageMood =
    journalEntries.length > 0
      ? journalEntries.reduce((sum, entry) => sum + entry.mood, 0) / journalEntries.length
      : 0;

  // Get mood trend (last 7 entries)
  const recentEntries = journalEntries.slice(0, 7);
  const moodTrend = recentEntries.map((entry) => entry.mood); // Get mood trend (last 7 entries)

  if (journalEntries.length === 0) {
    return (
      <Container maxWidth="lg" className="page-container fade-in">
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h4" sx={{ color: '#4a148c', mb: 2, fontWeight: 600 }}>
            Your Journal is Empty
          </Typography>
          <Typography variant="h6" sx={{ color: '#6a1b9a', mb: 4 }}>
            Start by browsing prompts and adding entries to track your mood!
          </Typography>
          <Box
            component="button"
            onClick={() => navigate('/prompts')}
            sx={{
              backgroundColor: '#7c4dff',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: 2,
              fontSize: '1rem',
              cursor: 'pointer',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#4a2c9f',
              },
            }}
          >
            Browse Prompts
          </Box>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" className="page-container fade-in">
      <Box sx={{ textAlign: 'center', mb: 4, mt: 2 }}>
        <Typography
          variant="h3"
          sx={{
            color: '#4a148c',
            fontWeight: 600,
            mb: 2,
          }}
        >
          📔 My Journal
        </Typography>
        <Typography variant="h6" sx={{ color: '#6a1b9a', mb: 3 }}>
          Welcome back, {user.name}! Here's your wellness journey.
        </Typography>

        {/* Mood Trend Display */}
        <Typography variant="body2" sx={{ color: '#6a1b9a' }}>
          Mood Trend: {moodTrend.join(', ')}
        </Typography>

        {/* Statistics Cards */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #7c4dff20 100%)',
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Typography variant="h4" sx={{ color: '#4a148c', fontWeight: 600 }}>
                  {journalEntries.length}
                </Typography>
                <Typography variant="body2" sx={{ color: '#6a1b9a' }}>
                  Total Entries
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #64b5f620 100%)',
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <Typography variant="h4" sx={{ color: '#4a148c', fontWeight: 600 }}>
                    {averageMood.toFixed(1)}
                  </Typography>
                  <Typography variant="h5">{moodEmojis[Math.round(averageMood)]}</Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#6a1b9a' }}>
                  Average Mood
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f0629220 100%)',
                borderRadius: 3,
              }}
            >
              <CardContent>
                <TrendingUpIcon sx={{ fontSize: 40, color: '#f06292', mb: 1 }} />
                <Typography variant="body2" sx={{ color: '#6a1b9a' }}>
                  Mood Trend
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Journal Entries */}
      <Grid container spacing={3}>
        {journalEntries.map((entry) => (
          <Grid item xs={12} key={entry.id}>
            <Card
              className="hover-card"
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f3e5f5 100%)',
                borderLeft: `4px solid #7c4dff`,
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Typography variant="h4">{entry.promptIcon}</Typography>
                      <Typography variant="h6" sx={{ color: '#4a148c', fontWeight: 600 }}>
                        {entry.promptTitle}
                      </Typography>
                    </Box>
                    <Chip
                      label={entry.date}
                      size="small"
                      sx={{
                        backgroundColor: '#7c4dff20',
                        color: '#4a148c',
                        fontWeight: 500,
                      }}
                    />
                  </Box>
                  <IconButton
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this entry?')) {
                        deleteEntry(entry.id);
                      }
                    }}
                    sx={{ color: '#f06292' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>

                <Box sx={{ my: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <Typography variant="body1" sx={{ color: '#6a1b9a', fontWeight: 500 }}>
                      Mood:
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="h5">{moodEmojis[entry.mood]}</Typography>
                      <Typography variant="body1" sx={{ color: '#4a148c' }}>
                        {entry.mood}/5 - {moodLabels[entry.mood]}
                      </Typography>
                    </Box>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(entry.mood / 5) * 100}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: '#e0e0e0',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: entry.mood >= 4 ? '#81c784' : entry.mood >= 3 ? '#64b5f6' : '#f06292',
                      },
                    }}
                  />
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ color: '#6a1b9a', fontWeight: 500, mb: 1 }}>
                    Notes:
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#4a148c',
                      whiteSpace: 'pre-wrap',
                      p: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.5)',
                      borderRadius: 2,
                    }}
                  >
                    {entry.notes}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyJournal;