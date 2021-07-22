import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from 'shared/themes';
import { Routes } from 'shared/navigation';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <ChakraProvider theme={theme}>
          <Routes />
        </ChakraProvider>
      </Router>
    </>
  );
};

export default App;
