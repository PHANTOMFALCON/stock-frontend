import { Box, Button, ChakraProvider, Container } from "@chakra-ui/react";
import Axios from "axios";
import Upload from "./components/Upload";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga4'; 
Axios.defaults.baseURL = "https://stock-backend-hz83.onrender.com/";
const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID); // Initialize Google Analytics with your tracking ID
    ReactGA.send('pageview'); // Send pageview event when app loads
  }, []);

  const navigateToHome = () => {
    Analytics.track('navigate-home');
    ReactGA.event({
      category: 'Navigation',
      action: 'Navigate to Home',
    });
    navigate('/');
  };

  const navigateAgreement = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Navigate to Agreement',
    });
    Analytics.track('navigate-agreement');
    navigate('/agreement');
  };

  return (
    <ChakraProvider>
      <div>
        <br />
        &nbsp;&nbsp;
        <Button onClick={navigateToHome} colorScheme="blue" size="md">
          Home
        </Button>
        &nbsp;&nbsp;
        <Button onClick={navigateAgreement} colorScheme="blue" size="md">
          Agreement
        </Button>
      </div>
      <br />
      <Box
        minH="100vh"
        w="100%"
        bg="gray.200"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container maxWidth="container.xl">
          <Routes>
            <Route path="/" element={<Upload />} />
          </Routes>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
