import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Head from './components/header';
import Blog from './components/blog';
import Auth from './components/auth';

function App() {
  return (
    <div className="App">
        <BrowserRouter forceRefresh={true}>
        <Head />
          <Routes>
            <Route path="/" element={<Blog/>}/>
            <Route path="/login" element={<Auth/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
