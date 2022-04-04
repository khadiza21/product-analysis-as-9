import React from 'react';

const Review = (props) => {
    const {id,name} = props.review;
    return (
        <div>
            <h1>id: {id}</h1>
            <h2>Name: {name}</h2>
        </div>
    );
};

export default Review;