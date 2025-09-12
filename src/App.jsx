import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import HomePage from './containers/HomePage';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

import GlobalStyle from './GlobalStyle';


function App() {
  useEffect(() => {
    document.body.style.background = '#f8f9fa';
    return () => { document.body.style.background = ''; };
  }, []);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          } />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;