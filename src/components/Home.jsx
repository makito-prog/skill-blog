// src/components/Home.js
import React, { useContext, useState } from 'react';
import { BlogContext } from '../context/BlogContext';

const Home = () => {
  const { blogs, setBlogs } = useContext(BlogContext);
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogs([...blogs, { ...newBlog, id: blogs.length + 1 }]);
    setNewBlog({ title: '', content: '' });
  };

  return (
    <div>
      <h1>Welcome to My Tech Blog</h1>
      <form onSubmit={handleSubmit}>
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
        {blogs.map(blog => (
          <div className="blog-post" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
