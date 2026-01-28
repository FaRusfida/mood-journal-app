import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Snackbar,
  Grid,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmailIcon from '@mui/icons-material/Email';
import CopyAllIcon from '@mui/icons-material/CopyAll';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const contactEmail = 'rusppi2004@gmail.com';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Simulate contact form submission
    const contacts = JSON.parse(localStorage.getItem('moodJournalContacts') || '[]');
    contacts.push({
      id: Date.now(),
      name,
      email,
      message,
      date: new Date().toISOString(),
    });
    localStorage.setItem('moodJournalContacts', JSON.stringify(contacts));

    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Container maxWidth="lg" className="page-container fade-in">
      <Box sx={{ textAlign: 'center', mb: 4, mt: 2 }}>
        <ContactMailIcon sx={{ fontSize: 60, color: '#7c4dff', mb: 2 }} />
        <Typography variant="h3" sx={{ color: '#4a148c', fontWeight: 600, mb: 1 }}>
          Contact Us
        </Typography>
        <Typography variant="h6" sx={{ color: '#6a1b9a', mb: 4 }}>
          Get in touch with <strong>russie_creations</strong>
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contact Information Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              height: '100%',
              background: 'linear-gradient(135deg, #ffffff 0%, #f3e5f5 100%)',
              borderRadius: 3,
              boxShadow: 3,
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ color: '#4a148c', fontWeight: 600, mb: 3 }}>
                Contact Information
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ color: '#6a1b9a', mb: 1, fontWeight: 600 }}>
                  russie_creations
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                  <EmailIcon sx={{ color: '#7c4dff' }} />
                  <Typography variant="body1" sx={{ color: '#4a148c', fontWeight: 500 }}>
                    {contactEmail}
                  </Typography>
                  <IconButton
                    onClick={handleCopyEmail}
                    size="small"
                    sx={{
                      color: '#7c4dff',
                      '&:hover': {
                        backgroundColor: 'rgba(124, 77, 255, 0.1)',
                      },
                    }}
                  >
                    <CopyAllIcon fontSize="small" />
                  </IconButton>
                </Box>
                {copied && (
                  <Typography variant="caption" sx={{ color: '#4caf50', ml: 4 }}>
                    Email copied!
                  </Typography>
                )}
              </Box>

              <Box sx={{ mt: 4, p: 2, backgroundColor: 'rgba(124, 77, 255, 0.1)', borderRadius: 2 }}>
                <Typography variant="body2" sx={{ color: '#6a1b9a', textAlign: 'center' }}>
                  💜 We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello, feel free to reach out.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #ffffff 0%, #f3e5f5 100%)',
            }}
          >
            <Typography variant="h5" sx={{ color: '#4a148c', fontWeight: 600, mb: 3 }}>
              Send us a Message
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#7c4dff',
                    },
                  },
                }}
              />

              <TextField
                fullWidth
                label="Your Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#7c4dff',
                    },
                  },
                }}
              />

              <TextField
                fullWidth
                label="Message"
                multiline
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what's on your mind..."
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
                type="submit"
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
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar
        open={submitted}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Thank you for your message! We'll get back to you soon. 🌟
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactUs;
