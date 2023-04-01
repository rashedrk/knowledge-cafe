import React from 'react';
import './TimeSpent.css';

const TimeSpent = (props) => {
    const time = props.time;
    return (
        <div className='spent-time'>
            <h5>Spent time on read: {time} min</h5>
        </div>
    );
};

export default TimeSpent;