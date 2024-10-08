import React, { useState, useEffect } from 'react';
import './Blog.css';
import blogsData from './Blogs.json';  // Import the JSON file directly

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogsData);  // Set the imported JSON data
  }, []);

  return (
    <div className="blog-container">
      <h1 className="blog-title">Latest Blogs</h1>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <h2 className="blog-card-title">{blog.title}</h2>
            <p className="blog-card-date">{blog.date}</p>
            <p className="blog-card-excerpt">{blog.excerpt}</p>
            <a href={blog.url} className="blog-read-more">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
