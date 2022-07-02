'use strict';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './components/parts/Navigation';
import PageRoutes from './components/routes';

if (process.env.NODE_ENV === 'development') {
  console.log('development');
  const { worker } = require('./mocks/browser');
  worker.start();
}

const App = () => {
  return (
    <Router>
      <Navigation />
      <PageRoutes />
    </Router>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
