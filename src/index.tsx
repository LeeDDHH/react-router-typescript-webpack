'use strict';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { MockedRequest } from 'msw';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './components/parts/Navigation';
import PageRoutes from './components/routes';

if (process.env.NODE_ENV === 'development') {
  console.log('development');
  const { worker } = require('./mocks/browser');
  const unhandleOption = {
    onUnhandledRequest(req: MockedRequest) {
      if (req.destination !== 'image') {
        console.warn(
          'Found an unhandled %s request to %s',
          req.method,
          req.url.href
        );
      }
    },
  };
  worker.start(unhandleOption);
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
