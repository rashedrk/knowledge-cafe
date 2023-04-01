import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookmark} from '@fortawesome/free-regular-svg-icons';


const Blog = (props) => {
    const log = () => console.log('clicked');
    const {author_name,blog_title,blog_cover_image,author_image,read_time} = props.blog;
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
                            <button className='btn text-primary text-decoration-underline'>Mark as read</button>

                        </div>
                        <div className='bookmark'>
                            <p className='small-text mt-2'>{read_time} min read</p>
                            <button className='btn'><FontAwesomeIcon icon={faBookmark} /></button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Blog;