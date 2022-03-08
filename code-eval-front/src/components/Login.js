// Imports
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/loginReducer'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const login = (event) => {
        event.preventDefault()
        console.log(`logging in with ${username} and ${password}`)
        dispatch(loginUser({ username, password }))
        
    }

    return (
        <div className='userform'>
            <h2>Login</h2>
            <form onSubmit={login}>
                <div>
                        <input
                            type='text'
                            name='username'
                            placeholder='username'
                            value={username}
                            onChange={({ target }) => setUsername(target.value)}
                        /> 
                </div>
                <div>
                        <input
                            type='password'
                            name='password'
                            placeholder='password'
                            value={password}
                            onChange={({target}) => setPassword(target.value)}
                        />
                </div>
                <div>
                    <button type='submit'>login</button>
                </div>
            </form>
        </div>
    )
}

export default Login