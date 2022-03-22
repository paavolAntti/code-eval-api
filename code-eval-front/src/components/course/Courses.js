import React from 'react'
import { Link } from 'react-router-dom'

const Courses = ({ courses, user }) => {
    const linkStyle = {
		padding: 5
	}
    if (!courses) {
        return (
            <div>
                <h2>No courses to show</h2>
            </div>
        )
    }
    if (user.role.role === 'admin' || user.role.role === 'teacher') {
        return (
            <div>
                <h2>All Courses</h2>
                {courses.map(course => 
                    <div key={course.id}>
                        <Link style={linkStyle} key={course.id} to={`/course/${course.id}`}>{course.name}</Link>
                    </div>)}
            </div>
        )
    } else if (user.courses){
        return (
            <div>
                <h2>Your Courses</h2>
                {user.courses.map(course => 
                    <div key={course.id}>
                        <Link style={linkStyle} key={course.id} to={`/course/${course.id}`}>{course.name}</Link>
                    </div>)}
            </div>
        )
    } else {
        return (<div>No courses to show</div>)
    }
}

export default Courses