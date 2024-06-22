// src/components/Home.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });


  const getAllThreads = async () => {
    try {
      let allThreads = await axios.get("/api/threads")
      console.log(allThreads);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllThreads()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };



  return (
    <div>
      <h1>Welcome to My Tech Blog</h1>
      <form>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            name="title" 
            value={newBlog.title} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea 
            name="content" 
            value={newBlog.content} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <button type="submit">Add Blog Post</button>
      </form>
      <div className="blog-posts">
          <div className="blog-post">
            <h2>タイトル</h2>
            <p>内容</p>
          </div>
      </div>
    </div>
  );
};

export default Home;
