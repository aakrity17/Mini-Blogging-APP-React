import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const savedBlogs = JSON.parse(localStorage.getItem("saved-blogs")) || [];
const list = [...blogList, ...savedBlogs];

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    let blog = list.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div
              className='bookmark-button'
              onClick={() => {
                setIsBookmarked(!isBookmarked);
              }}
            >
              {isBookmarked ? (
                <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
              ) : (
                <FontAwesomeIcon icon={faStar} />
              )}
            </div>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>

          <div className='likes-section'>
            <span className='likes-count'>{likes} likes</span>
            <button className='like-button' onClick={() => setLikes(likes + 1)}>
              Like
            </button>
          </div>

          <div className='comments-section'>
            {comments.map((comment, index) => (
              <div key={index} className='comment'>
                {comment}
              </div>
            ))}
          </div>

          <div className='comment-input'>
            <input
              value={input}
              placeholder='Enter comment'
              onChange={(event) => setInput(event.target.value)}
            />
            <button
              className='comment-button'
              onClick={() => {
                setComments([...comments, input]);
                setInput('');
              }}
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
