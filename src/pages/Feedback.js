import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Rating,
  Alert,
  Snackbar,
} from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';

const Feedback = () => {
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Removed duplicate declaration of Feedback component

  const handleSubmit = () => {
    if (!comment.trim()) {
      alert('Please provide some feedback');
      return;
    }

    // Simulate feedback submission (store in localStorage)
    const feedbacks = JSON.parse(localStorage.getItem('moodJournalFeedbacks') || '[]');
    feedbacks.push({
      id: Date.now(),
      rating,
      comment,
      date: new Date().toISOString(),
    });
    localStorage.setItem('moodJournalFeedbacks', JSON.stringify(feedbacks));

    setSubmitted(true);
    setComment('');
    setRating(3);
    
    setTimeout(() => setSubmitted(false), 3000);
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
          <FeedbackIcon sx={{ fontSize: 50, color: '#7c4dff', mb: 1 }} />
          <Typography variant="h4" sx={{ color: '#4a148c', fontWeight: 600 }}>
            Share Your Feedback
          </Typography>
          <Typography variant="body2" sx={{ color: '#6a1b9a', mt: 1 }}>
            Your thoughts help us improve the app and support others on their wellness journey.
          </Typography>
        </Box>

        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: '#6a1b9a', mb: 2 }}>
            How would you rate your experience?
          </Typography>
          <Rating
            value={rating}
            onChange={(_, newValue) => setRating(newValue)}
            size="large"
            sx={{
              '& .MuiRating-iconFilled': {
                color: '#7c4dff',
              },
              fontSize: '3rem',
            }}
          />
          <Typography variant="body2" sx={{ color: '#6a1b9a', mt: 1 }}>
            {rating === 1 && '😢 Needs Improvement'}
            {rating === 2 && '😔 Could Be Better'}
            {rating === 3 && '😐 Good'}
            {rating === 4 && '🙂 Very Good'}
            {rating === 5 && '😊 Excellent!'}
          </Typography>
        </Box>

        <TextField
          fullWidth
          label="Your Feedback"
          multiline
          rows={6}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Tell us what you think... What features do you like? What could be improved? Any suggestions?"
          sx={{
            mb: 3,
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: '#7c4dff',
              },
            },
          }}
        />

        <Button
          onClick={handleSubmit}
          variant="contained"
          fullWidth
          sx={{
            py: 1.5,
            backgroundColor: '#7c4dff',
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: '#4a2c9f',
            },
          }}
        >
          Submit Feedback
        </Button>

        <Box sx={{ mt: 3, p: 2, backgroundColor: 'rgba(124, 77, 255, 0.1)', borderRadius: 2 }}>
          <Typography variant="body2" sx={{ color: '#6a1b9a', textAlign: 'center' }}>
            💜 Thank you for taking the time to share your feedback. Every comment helps us create
            a better experience for everyone!
          </Typography>
        </Box>
      </Paper>

      <Snackbar
        open={submitted}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Thank you for your feedback! 🌟
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Feedback;
