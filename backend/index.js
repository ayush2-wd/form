const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const sequelize = require('./config/database');
const Form = require('./models/Form');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Synchronize the database schema
sequelize.sync({ force: true }).then(() => {
  console.log('Database synchronized');
});

app.post('/api/forms', async (req, res) => {
  const { type, name, countryCode, phoneNumber } = req.body;
  try {
    const form = await Form.create({ type, name, countryCode, phoneNumber });

    // Send data to Google Sheets
    await axios.post(process.env.GOOGLE_APPS_SCRIPT_URL, { type, name, countryCode, phoneNumber }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    res.status(201).json(form);
  } catch (error) {
    console.error('Error saving form data', error); // Log the error
    res.status(500).json({ error: 'Error saving form data', details: error.message });
  }
});

app.get('/api/forms', async (req, res) => {
  try {
    const forms = await Form.findAll();
    res.status(200).json(forms);
  } catch (error) {
    console.error('Error fetching forms', error); // Log the error
    res.status(500).json({ error: 'Error fetching forms', details: error.message });
  }
});

app.get('/api/sync-google-sheets', async (req, res) => {
  try {
    const response = await axios.get(process.env.GOOGLE_APPS_SCRIPT_URL);
    const data = response.data;
    // Optionally, save the data to your local database
    res.status(200).json(data);
  } catch (error) {
    console.error('Error synchronizing data with Google Sheets', error); // Log the error
    res.status(500).json({ error: 'Error synchronizing data with Google Sheets', details: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
