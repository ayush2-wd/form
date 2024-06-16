import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Grid } from '@mui/material';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faSync } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    const handleSync = async () => {
        try {
          await axios.get('http://localhost:3001/api/sync-google-sheets');
          alert('Google Sheets synced successfully');
        } catch (error) {
          console.error('Error syncing Google Sheets', error);
        }
      };
    return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6" component={Link} to="/" color="inherit" style={{ textDecoration: 'none' }}>
                Form Management
              </Typography>
            </Grid>
            <Grid item>
              <Button component={Link} to="/form-a" color="inherit" style={{ marginLeft: '10px' }}>
              <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '5px' }} />Form A
              </Button>
              <Button component={Link} to="/form-b" color="inherit">
              <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '5px' }} />Form B
              </Button>
              <Button color="inherit" onClick={handleSync}>
              <FontAwesomeIcon icon={faSync} style={{ marginRight: '5px' }} />Sync Google Sheets
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
