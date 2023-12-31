import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';

const savedList = JSON.parse(localStorage.getItem('saved-blogs')) || [];
const Home = () => {
  const [blogs, setBlogs] = useState([...blogList, ...savedList]);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category, title, subcategory, and description
  const handleSearchResults = () => {
    const allBlogs = blogList.concat(savedList);
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()) ||
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim()) ||
      // blog.author.toLowerCase().includes(searchKey.toLowerCase().trim()) ||

      blog.subCategory.some(sub => sub.toLowerCase().includes(searchKey.toLowerCase().trim())) ||
      blog.description.toLowerCase().includes(searchKey.toLowerCase().trim())

    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs([...blogList, ...savedList]);
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
