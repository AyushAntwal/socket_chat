import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Admin from './App/Admin';
import Student from './App/Student';
import User1 from './App/User1';
import User2 from './App/User2';
import User3 from './App/User3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route index element={<App />} />
    <Route path='/admin' element={<Admin />} />
    <Route path='/user' element={<Student />} />
    <Route path='/user1' element={<User1 />} />
    <Route path='/user2' element={<User2 />} />
    <Route path='/user3' element={<User3 />} />
  </Routes>
  </BrowserRouter>
);

