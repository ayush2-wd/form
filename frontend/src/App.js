import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormA from './components/FormA';
import FormB from './components/FormB';
import Navigation from './components/Navigation';
import AppBackground from './components/AppBackground'; 
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <AppBackground> {}
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form-a" element={<FormA />} />
          <Route path="/form-b" element={<FormB />} />
        </Routes>
      </AppBackground>
    </Router>
  );
};

export default App;
