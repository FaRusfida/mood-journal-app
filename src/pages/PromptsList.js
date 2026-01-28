import React, { useContext, useState } from 'react'; // React is used for JSX
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Rating,
  Box,
  Chip,
  Alert,
} from '@mui/material';
import { mockPrompts } from '../data';
import { UserContext } from '../context/UserContext';
import { moodEmojis } from '../data';

const PromptsList = () => {
  const { user, addEntry } = useContext(UserContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [mood, setMood] = useState(3);
  const [notes, setNotes] = useState('');

  const handleAdd = (prompt) => {
    if (!user) {
      alert('Please login to add prompts to your journal');
      navigate('/login');
      return;
    }
    setSelectedPrompt(prompt);
    setOpen(true);
  };

  const handleSubmit = () => {
    if (!notes.trim()) {
      alert('Please add some notes to your journal entry');
      return;
    }

    addEntry({
      promptId: selectedPrompt.id,
      promptTitle: selectedPrompt.title,
      promptIcon: selectedPrompt.icon,
      date: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      mood,
      notes,
    });

    setOpen(false);
    setNotes('');
    setMood(3);
    alert('Entry added to your journal! 🌟');
  };

  const handleClose = () => {
    setOpen(false);
    setNotes('');
    setMood(3);
  };

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
          🌈 Browse Wellness Prompts
        </Typography>
        <Typography variant="h6" sx={{ color: '#6a1b9a' }}>
          Explore prompts designed to support your mental health and wellness
        </Typography>
      </Box>

      {!user && (
        <Alert severity="info" sx={{ mb: 3 }}>
          Please{' '}
          <Button
            variant="text"
            onClick={() => navigate('/login')}
            sx={{ textTransform: 'none', p: 0, minWidth: 'auto' }}
          >
            login
          </Button>{' '}
          to add prompts to your journal
        </Alert>
      )}

      <Grid container spacing={3}>
        {mockPrompts.map((prompt) => (
          <Grid item xs={12} sm={6} md={4} key={prompt.id}>
            <Card
              className="hover-card"
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: `linear-gradient(135deg, #ffffff 0%, ${prompt.color}20 100%)`,
                border: `2px solid ${prompt.color}40`,
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Typography variant="h3" sx={{ mb: 1 }}>
                    {prompt.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: '#4a148c', fontWeight: 600, mb: 1 }}
                  >
                    {prompt.title}
                  </Typography>
                  <Chip
                    label={prompt.category}
                    size="small"
                    sx={{
                      backgroundColor: `${prompt.color}30`,
                      color: prompt.color,
                      fontWeight: 500,
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: '#6a1b9a', mb: 2, minHeight: '60px' }}
                >
                  {prompt.description}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleAdd(prompt)}
                  sx={{
                    backgroundColor: prompt.color,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: prompt.color,
                      opacity: 0.9,
                    },
                  }}
                >
                  Add to Journal
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for adding journal entry */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            background: 'linear-gradient(135deg, #ffffff 0%, #f3e5f5 100%)',
          },
        }}
      >
        <DialogTitle sx={{ color: '#4a148c', fontWeight: 600 }}>
          {selectedPrompt && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h5">{selectedPrompt.icon}</Typography>
              <Typography variant="h6">{selectedPrompt.title}</Typography>
            </Box>
          )}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ color: '#6a1b9a', mb: 1 }}>
              How are you feeling?
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Rating
                value={mood}
                onChange={(_, newValue) => setMood(newValue)} // Use _ to indicate unused parameter
                size="large"
                sx={{
                  '& .MuiRating-iconFilled': {
                    color: '#7c4dff',
                  },
                }}
              />
              <Typography variant="h5">{moodEmojis[mood]}</Typography>
            </Box>
          </Box>
          <TextField
            fullWidth
            label="Journal Notes"
            multiline
            rows={6}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write your thoughts, reflections, or experiences here..."
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#7c4dff',
                },
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleClose} sx={{ color: '#6a1b9a', textTransform: 'none' }}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              backgroundColor: '#7c4dff',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#4a2c9f',
              },
            }}
          >
            Save Entry
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default PromptsList;
