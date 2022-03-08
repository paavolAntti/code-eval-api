import React from 'react';
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


const App = () => {
	// TODO LOGIN REDUCER
	const user = null;
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
		<Router>
			<div>
				<div className='navigation'>
						<Link to='/logout'>Logout</Link>
				</div>
				<Routes>
					<Route path='/logout' element={<h1>Logout</h1>}/>
				</Routes>
			</div>
		</Router>
	)
}

export default App;
