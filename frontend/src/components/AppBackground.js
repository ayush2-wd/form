import React from 'react';

const AppBackground = ({ children }) => {
  return (
    <div style={{
      background: 'linear-gradient(to bottom, #ff8a00, #da1b60)',
      minHeight: '100vh',
      overflow: 'hidden',
    }}>
      {children}
    </div>
  );
};

export default AppBackground;
