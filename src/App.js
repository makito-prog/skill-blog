// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BlogProvider } from './context/BlogContext';

function App() {
  return (
    <BlogProvider>
      <div className="App">
        <Header />
        <Home />
      </div>
    </BlogProvider>
  );
}

export default App;
