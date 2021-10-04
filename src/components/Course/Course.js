import React from 'react';
import './Course.css'

//display data dynamically
const Course = (props) => {
    const { img, name, instructor, Ratings, price, peopleReviewd } = props.course;
    return (
        <div className="col">
            <div class="card border border-primary h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{instructor}</p>
                    <p className="card-text">Reviews: {Ratings} ({peopleReviewd})</p>
                    <p className="card-text">Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default Course;