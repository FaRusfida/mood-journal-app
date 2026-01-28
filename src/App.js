import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PromptsList from './pages/PromptsList';
import MyJournal from './pages/MyJournal';
import Feedback from './pages/Feedback';
import ContactUs from './pages/ContactUs';

// Soft calming theme with pastel colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#7c4dff', // Lavender purple
      light: '#b085ff',
      dark: '#4a2c9f',
    },
    secondary: {
      main: '#64b5f6', // Soft blue
      light: '#9be7ff',
      dark: '#1976d2',
    },
    background: {
      default: '#f3e5f5', // Light pastel purple
      paper: '#ffffff',
    },
    text: {
      primary: '#4a148c',
      secondary: '#6a1b9a',
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="container-fluid p-0">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/prompts" element={<PromptsList />} />
              <Route path="/my-journal" element={<MyJournal />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
