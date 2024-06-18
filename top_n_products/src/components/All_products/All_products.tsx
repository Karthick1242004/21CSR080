import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CircularProgress, Alert } from '@mui/material';

function AllProducts() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get<any[]>(
        'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000',
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4NjkyMTQzLCJpYXQiOjE3MTg2OTE4NDMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImZmMjg1YWViLWE5MDAtNGU1Yy04YjZjLTBkYjNlNGI1NWQ4NSIsInN1YiI6ImthcnRoaWNrcmFqYW5zLjIxY3NlQGtvbmd1LmVkdSJ9LCJjb21wYW55TmFtZSI6Iktvbmd1IEVuZ2luZWVyaW5nIENvbGxlZ2UiLCJjbGllbnRJRCI6ImZmMjg1YWViLWE5MDAtNGU1Yy04YjZjLTBkYjNlNGI1NWQ4NSIsImNsaWVudFNlY3JldCI6IlVOdGVWWGtvcFNrRWN6ZFIiLCJvd25lck5hbWUiOiJLYXJ0aGlja3JhamFuIFMiLCJvd25lckVtYWlsIjoia2FydGhpY2tyYWphbnMuMjFjc2VAa29uZ3UuZWR1Iiwicm9sbE5vIjoiMjFDU1IwODAifQ.CD4EKJuzhA6rUyl9L0mRaOLlNWeDst8d0Y3aezRnxM8`
          }
        }
      );
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Ecommerce
      </Typography>
      {error && <Alert severity="error">Error: {error}</Alert>}
      {data.length > 0 ? (
        <Grid container spacing={4}>
          {data.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://media.wired.com/photos/64daad6b4a854832b16fd3bc/master/w_2240,c_limit/How-to-Choose-a-Laptop-August-2023-Gear.jpg"
                  alt="Laptop"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.productName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Price:</strong> ${product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Rating:</strong> {product.rating}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Discount:</strong> {product.discount}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Availability:</strong> {product.availability}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
}

export default AllProducts;
