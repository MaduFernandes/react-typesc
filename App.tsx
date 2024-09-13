import React from 'react';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import Home from './pages/Home';

export const App = () => {
  return (
    <div>
      <Header />
      <Container fixed>
        <Home />
      </Container>
    </div>
  );
};
