import React from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const SingleCourse = ({ courses, user }) => {
    //const dispatch = useDispatch()
    //const history = useHistory()
    const linkStyle = {
		padding: 5
	}
    const id = useParams().id
    if (!courses) {
        return (
            <div></div>
        )
    }
    const course = courses.find(c => c.id === id)
    // Sort exercises by name
    course.exercises.sort((a,b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    });
    // If no courses given, render nothing
    if (!course) return (
        <div></div>
    )
    return (
            <div className='course_container' key={course.id}>
                <div className='header'>
                    <h2>{course.name}</h2>
                    <p><b>Class</b>: {course.class}</p>
                </div>
                <div>
                    <h4>Course Exercises</h4>
                    {course.exercises.map(e =>
                        <ul key={e.id}>
                            <li><b>Name: </b><Link style={linkStyle} key={e.id} to={`/course/exercise/${e.id}`}>{e.name}</Link></li>
                            <li><b>Description: </b>{e.description}</li>
                        </ul>
                    )}
                </div>
            </div>
    )
}

export default SingleCourse