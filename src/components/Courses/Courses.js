import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./eduFakeDb.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div className="courses-container">
            <div className="text-success my-5">
                <h4>Explore a variety of <span className="fw-bold"> quality courses and gain new skills</span> to <br />
                    head start a successful career</h4>
            </div>
            <div className="courses">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;