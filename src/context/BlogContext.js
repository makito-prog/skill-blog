// src/context/BlogContext.js
import React, { createContext, useState } from 'react';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "React Basics", content: "This is about React basics..." },
    { id: 2, title: "Advanced React", content: "This is about advanced React topics..." }
  ]);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
