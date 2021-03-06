import React from 'react';
import ReactDOM from 'react-dom/client';
import PublicContainer from './containers/PublicContainer';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PublicContainer />
  </React.StrictMode>
);
