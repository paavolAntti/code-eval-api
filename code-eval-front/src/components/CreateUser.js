import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { newUser } from '../reducers/loginReducer'



const CreateUser = () => {
    const [username, setUsername] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const create = (event) => {
        event.preventDefault()
        console.log(`creating new user with ${username} and ${mail}`)
        dispatch(newUser(username, mail, password))
        navigate('/login')
    }

    return (
        <div className='userform'>
            <h2>new user</h2>
            <form onSubmit={create}>
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
                        <input
                            type='text'
                            name='mail'
                            placeholder='email'
                            value={mail}
                            onChange={({target}) => setMail(target.value)}
                        />
                </div>
                <div>
                    <button type='submit'>create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateUser