import { ThemeProvider } from '@mui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';

import './index.css';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import reportWebVitals from './reportWebVitals';




ReactDOM.render(
    
      <Router >
      <Routes>
          <Route path="/explore" element={<Page2 />} />
          <Route path="/" element={<App />} />
          <Route path="/bookdetail" element={<Page3 />} />
      </Routes>
    </Router> 
   
     
   ,
    document.getElementById('root')
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
