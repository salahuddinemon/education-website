import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./eduFakeDb.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    const newCourses = courses.slice(0, 4);
    console.log(newCourses);
    return (
        <div className="container row row-cols-1 row-cols-md-3 g-4 my-5 mx-auto">
            {
                newCourses.map((newCourse) => (
                    <div className="">
                        <div className="col">
                            <div class="card border border-primary h-100">
                                <img src={newCourse.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{newCourse.name}</h5>
                                    <p className="card-text">{newCourse.instructor}</p>
                                    <p className="card-text">Reviews: {newCourse.Ratings} ({newCourse.peopleReviewd})</p>
                                    <p className="card-text">Price: {newCourse.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Home;