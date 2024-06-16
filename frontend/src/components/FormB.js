import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Container, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faGlobe, faPaperPlane, faFileExcel } from '@fortawesome/free-solid-svg-icons';

const FormB = () => {
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [countryCode, setCountryCode] = useState(localStorage.getItem('countryCode') || '');
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phoneNumber') || '');

  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('countryCode', countryCode);
    localStorage.setItem('phoneNumber', phoneNumber);
  }, [name, countryCode, phoneNumber]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/forms', {
        type: 'B',
        name,
        countryCode,
        phoneNumber,
      });
      alert('Form B submitted successfully');
    } catch (error) {
      console.error('Error submitting form B', error);
      alert(`Error submitting form B: ${error.response ? error.response.data.details : error.message}`);
    }
  };

  const handleExcelRedirect = () => {
    window.open('https://docs.google.com/spreadsheets/d/1JWU83pX-tHcTwlwyK5Jb0Y1OGwjsIbLnhDqv_CLfuho/edit?usp=sharing', '_blank');
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Form B
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2 }}>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
          <TextField
            label="Name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2 }}>
          <FontAwesomeIcon icon={faGlobe} style={{ marginRight: '10px' }} />
          <FormControl variant="standard" fullWidth>
            <InputLabel>Country Code</InputLabel>
            <Select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              required
            >
              <MenuItem value="+1">+1 (USA)</MenuItem>
              <MenuItem value="+91">+91 (India)</MenuItem>
              <MenuItem value="+44">+44 (UK)</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Or enter country code"
            variant="standard"
            onChange={(e) => setCountryCode(e.target.value)}
            fullWidth
            style={{ marginLeft: '10px' }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2 }}>
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
          <TextField
            label="Phone Number"
            variant="standard"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            fullWidth
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<FontAwesomeIcon icon={faPaperPlane} />}
          style={{ marginBottom: '10px' }}
        >
          Submit
        </Button>

        <Button
          variant="outlined"
          color="primary"
          onClick={handleExcelRedirect}
          startIcon={<FontAwesomeIcon icon={faFileExcel} />}
        >
          View Updated Sheet
        </Button>
      </Box>
    </Container>
  );
};

export default FormB;
