import React from 'react';
import './NewsPaper.css';

const NewsPaper = ({newsPaper}) => {
    const {title, description, photo, time, sort} = newsPaper;
    return (
        <container>
            <div className='newspaper'>
            <img className='img' src={photo} alt=""/>
            <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{time}</p>
            </div>
        </div>
        </container>
    );
};

export default NewsPaper;