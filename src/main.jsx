import React from 'react'
import ReactDOM from 'react-dom/client'

import { ScrollToTop } from './other/ScrollToTop';
import { BrowserRouter as Router } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App/>
    </Router>
  </React.StrictMode>,
)
