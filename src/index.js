import React from 'react';
import { render } from 'react-dom';
import App from './app.js';
import './index.css'

const rootElement = document.getElementById("root");
render(
  <App />,
  rootElement
);