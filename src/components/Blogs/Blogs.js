import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';
import TimeSpent from '../TimeSpent/TimeSpent';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);

    const [time,setTime] = useState(0);
    return (
        <div className='blogs-container'>
            <div className="blogs">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} time={time} setTime={setTime}></Blog>)
                }
            </div>
            <div className="sidebar">
                <TimeSpent time= {time}></TimeSpent>
            </div>
        </div>
    );
};

export default Blogs;