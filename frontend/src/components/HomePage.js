// HomePage.js
import React from 'react';
import { Typography, Container, Grid, useMediaQuery, useTheme } from '@mui/material';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: isMobile ? '20px' : '50px' }}>
      <Typography variant={isMobile ? 'h5' : 'h4'} gutterBottom style={{ color: '#3f51b5', fontWeight: 'bold' }}>
        Welcome to Form Management
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" style={{ color: '#666', fontStyle: 'italic' }}>
            This platform helps you manage your forms easily and efficiently.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" style={{ color: '#444' }}>
            Click on Form A or Form B or Sync Google Sheets option as per your choice to perform further operations.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
