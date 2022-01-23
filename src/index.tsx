'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './components/parts/Navigation';
import PageRoutes from './components/routes';

const App = () => {
  return (
    <Router>
      <Navigation/>
      <PageRoutes/>
    </Router>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));
