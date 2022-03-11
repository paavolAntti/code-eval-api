import React, { useEffect } from 'react';
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import { setUser, logoutUser  } from './reducers/loginReducer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const App = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);
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
	}, [dispatch])
	// If no user, show the login form
	if (!user) {
		return (
			<div>
				<Login/>
			</div>
		)	
	} 
	// If user is logged in show the main page
	return (
		<div className='main_container'>
			<h4>{user.username} signed in <button onClick={logout}>logout</button></h4>
			<Router>
				<div>
					<div className='navigation'>
							<Link style={linkStyle} to='/courses'>Courses</Link>
							<Link style={linkStyle} to='/user'>User Info</Link>
					</div>
					<Routes>
						<Route path='/courses' element={<h2>Courses</h2>}/>
						<Route path='/user' element={<UserInfo user={user}/>}/>
					</Routes>
				</div>
			</Router>
		</div>
	)
}


export default App;
