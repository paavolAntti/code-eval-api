import React, { useEffect } from 'react';
// Components
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import CreateUser from './components/CreateUser';
import Courses from './components/course/Courses';
import SingleCourse from './components/course/SingleCourse';
// Reducers
import { setUser, logoutUser  } from './reducers/loginReducer'
import { getAllCourses } from './reducers/courseReducer';
// Other
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const App = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);
	const courses = useSelector(state => state.course)
	// Logout
	const logout = (event) => {
		event.preventDefault()
		dispatch(logoutUser())
	}
	// Styles
	const linkStyle = {
		padding: 5
	}
	useEffect(() => {
		const loggedUser = window.localStorage.getItem('loggedUser');
		if (loggedUser) {
			const userToLog = JSON.parse(loggedUser);
			dispatch(setUser(userToLog));
		}
	}, [dispatch]);

	useEffect(() => {
		if (user) {
			dispatch(getAllCourses())
		}
	}, [dispatch, user])
	// If no user, show the login form
	if (!user) {
		return (
			<div>
				<Router>
				<div>
					<div className='navigation'>
							<Link style={linkStyle} to='/login'>Login</Link>
							<Link style={linkStyle} to='/createuser'>New User</Link>
					</div>
					<Routes>
						<Route path='/createuser' element={<CreateUser/>}/>
						<Route path='/login' element={<Login/>}/>
					</Routes>
				</div>
				</Router>
			</div>
		)	
	}
	// If user is logged in show the main page
	return (
		<div className='main_container'>
			<h4>{user.name} signed in <button onClick={logout}>logout</button></h4>
			<Router>
				<div>
					<div className='navigation'>
							<Link style={linkStyle} to='/courses'>Courses</Link>
							<Link style={linkStyle} to='/user'>User Info</Link>
					</div>
					<Routes>
						<Route path='/courses' element={<Courses courses={courses} user={user}/>}/>
						<Route path='/user' element={<UserInfo user={user}/>}/>
						<Route path='/course/:id' element={<SingleCourse courses={courses} user={user}/>}/>
					</Routes>
				</div>
			</Router>
		</div>
	)
}


export default App;
