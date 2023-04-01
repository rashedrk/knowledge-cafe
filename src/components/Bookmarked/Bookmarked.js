import React from 'react';
import './Bookmarked.css';

const Bookmarked = (props) => {
    const bookmarks = props.bookmark;
    return (
        <div className='bookmarks-container'>
            <h5>Bookmarked Blogs: {bookmarks.length}</h5>
            {
                bookmarks.map(bookmark => 
                    <h6 className='bg-white rounded p-3'>{bookmark}</h6>
                )
            }
        </div>
    );
};

export default Bookmarked;