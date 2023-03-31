import React from 'react';
import './Blog.css';

const Blog = (props) => {
    const {author_name,blog_title,blog_cover_image,author_image,read_time,publish_date} = props.blog;
    return (
            <div className="card mb-3" >
                <img src={blog_cover_image} class="card-img-top" alt=""/>
                <div className="card-body">
                    <div className='details'>
                        <div>
                            <div className='author-details mb-3'>
                                <img className='author-image' src={author_image} alt="" />
                                <div>
                                    <h6>{author_name}</h6>
                                    <p className='small-text'>Mar 14 (4 days ago)</p>
                                </div>
                            </div>
                            <h3>{blog_title}</h3>
                            <p className='small-text'>#beginners #programming</p>
                            <a href="">Mark as read</a>

                        </div>
                        <div>
                            <p className='small-text'>{read_time} min read</p>
                            <a href="">icon</a>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Blog;