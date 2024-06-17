
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Grid, useMediaQuery, useTheme, IconButton, Menu, MenuItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faSync, faBars } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSync = async () => {
    try {
      await axios.get('http://localhost:3001/api/sync-google-sheets');
      alert('Google Sheets synced successfully');
    } catch (error) {
      console.error('Error syncing Google Sheets', error);
    }
    handleMenuClose();
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
              {isMobile ? (
                <>
                  <IconButton color="inherit" onClick={handleMenuClick}>
                    <FontAwesomeIcon icon={faBars} />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem component={Link} to="/form-a" onClick={handleMenuClose}>
                      <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '5px' }} /> Form A
                    </MenuItem>
                    <MenuItem component={Link} to="/form-b" onClick={handleMenuClose}>
                      <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '5px' }} /> Form B
                    </MenuItem>
                    <MenuItem onClick={handleSync}>
                      <FontAwesomeIcon icon={faSync} style={{ marginRight: '5px' }} /> Sync Google Sheets
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <Button component={Link} to="/form-a" color="inherit" style={{ marginLeft: '10px' }}>
                    <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '5px' }} /> Form A
                  </Button>
                  <Button component={Link} to="/form-b" color="inherit">
                    <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '5px' }} /> Form B
                  </Button>
                  <Button color="inherit" onClick={handleSync}>
                    <FontAwesomeIcon icon={faSync} style={{ marginRight: '5px' }} /> Sync Google Sheets
                  </Button>
                </>
              )}
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
