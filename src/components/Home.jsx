// src/components/Home.js
import React from 'react';
import Header from './Header';

const Home = () => {
  return (
    <div>
      <Header />
      <h1 className='home-title'>Welcome to My Tech Blog</h1>
      <p className='home-content'>This is a blog about the latest in tech, programming tutorials, and more!</p>
    </div>
  );
};

export default Home;
