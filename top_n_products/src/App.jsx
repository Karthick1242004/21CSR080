import React from 'react';
import { Container, Typography } from '@mui/material';
import AllProducts from './components/All_products/All_products'

function App() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
      </Typography>
      <AllProducts />
    </Container>
  );
}

export default App;
