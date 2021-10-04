import React from 'react';

const Course = (props) => {
    console.log(props.course);
    const { img, name, instructor, Ratings, price, peopleReviewd } = props.course;
    return (
        <div className="course-container col">
            <div class="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{instructor}</p>
                    <p className="card-text">Review: {Ratings} ({peopleReviewd})</p>
                    <p className="card-text">Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default Course;