# 📋 Form Management System

Welcome to the Form Management System! This project provides a seamless solution for managing forms efficiently, comprising both backend and frontend components.

## 🌟 Overview

The project is structured into two main directories: `backend` and `frontend`. The backend directory contains the server-side logic, including database configuration and form models. The frontend directory encompasses the user interface components, allowing users to interact with forms easily.

## Table of Contents

- [Form Management System](#form-management-system)
- [Overview](#overview)
- [Features](#features)
- [Installation and Setup](#installation-and-setup)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Google Sheets Integration](#google-sheet-integration)
- [Connecting to Online Excel Sheet](#connecting-to-online-excel-sheet)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Form Submission**: Users can submit forms with personal information.
- **Data Synchronization**: Sync form data with Google Sheets for easy access and management.
- **User-Friendly Interface**: Beautifully designed UI with modern components and icons.
- **Responsive Design**: Works flawlessly on desktop and mobile devices.
- **Local Storage**: Saves form data locally to prevent data loss.

## 🔧 Installation and Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

4. Create a .env file in the root directory and add your environment variables:

   ```bash
   DB_NAME='database name'
   DB_USER='username'
   DB_PASSWORD='passkey'
   DB_HOST='your host type'
   DB_DIALECT='the one you used'
   GOOGLE_APPS_SCRIPT_URL="use sheets to get it here"
   Ensure your MySQL database is running and configured correctly.
   ```

5. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

6. Start the frontend development server:

   ```bash
   cd frontend
   npm start
   ```

## Configuration

### Google Apps Script

1. **Create a new Google Apps Script project**:

   - Go to [Google Apps Script](https://script.google.com/).
   - Click on "New Project".
   - Write the necessary script to handle form submissions.

2. **Deploy the script as a web app**:

   - Click on `Deploy` > `New deployment`.
   - Select `Web app`.
   - Configure the deployment settings and deploy the script.
   - Note the generated web app URL.

3. **Update your backend code**:
   - Locate the `googleAppsScriptUrl` variable in your backend code.
   - Replace its value with the web app URL obtained in the previous step.

### Sequelize Configuration

Ensure your Sequelize models and migrations are set up correctly to match your database schema. Here’s a basic example:

````javascript
// models/Form.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Form = sequelize.define('Form', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  countryCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Form;

## Running the Application

To run the application, follow these steps:

1. **Backend**:
   - Ensure your backend server is running. This handles API requests and data storage.
   - Start the backend server by navigating to your project directory and running:
     ```bash
     node server.js
     ```

2. **Frontend**:
   - Start the React development server to launch the UI.
   - Navigate to your project directory and run:
     ```bash
     npm start
     ```

3. **Access the application**:
   - Open your web browser and go to `http://localhost:3000` to access the application.


## 🖼️ Screenshots

![Form Management System](/images/Home.png)
![Form A](/images/formA.png)
![Form B](/images/formB.png)
![Form Sync Mechanism](/images/sync.png)
![Form Excel Sheet Synchronization](/images/excel.png)
![Responsive Homepage](/images/Responsive1.png)
![Responsive Forms](/images/Responsive2.png)

## 💻 Technologies Used

### Frontend
- **React**
- **Material-UI**
- **Font Awesome**

### Backend
- **Node.js**
- **Express**
- **Sequelize**

### Database
- **MySQL**

### Others
- **Google Apps Script** for Google Sheets synchronization

## 🔄 Google Sheets Integration

To synchronize data with Google Sheets, we utilized the Google Sheets API. This allows us to read from and write to Google Sheets directly from our application. By integrating Google Sheets, we ensure real-time data updates and easy collaboration among users.

## 🌐 Connecting to Online Excel Sheet

To implement functionality to connect to an online Excel sheet, follow these steps:

1. **Identify the online Excel sheet's URL or API endpoint.** Obtain the URL or API endpoint of the online Excel sheet you want to connect to.

2. **Install `xlsx`.** Install the `xlsx` library in your Node.js project. You can do this using npm:

    ```bash
    npm install xlsx
    ```

3. **Use `xlsx` to read the online Excel sheet.** Utilize `xlsx` in your backend code to read the online Excel sheet. For example:

    ```javascript
    const xlsx = require('xlsx');
    const workbook = xlsx.readFile('https://example.com/path/to/your/excel/file.xlsx');

    const worksheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheetName];

    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    console.log(jsonData);
    ```

    Replace `'https://example.com/path/to/your/excel/file.xlsx'` with the URL of your online Excel sheet.

4. **Process the data as needed.** Once you've read the data from the online Excel sheet into JSON format, you can process it as needed in your application.

    For example, you can iterate over the JSON data and perform operations or store it in your database:

    ```javascript
    jsonData.forEach(row => {
      // Process each row of data
      console.log(row);
    });
    ```

    You can also modify the data and write it back to the Excel sheet using the `xlsx` library if necessary.

5. **Handle errors appropriately.** Ensure that you handle errors gracefully, especially when dealing with network requests or file I/O operations.

That's it! By following these steps, you'll be able to connect to and read data from an online Excel sheet in your Node.js application using the `xlsx` library.


## ✨ Contributors

- [Ayush Keshari](https://github.com/ayush2-wd)

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

````
