import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const UserInfo = ({ user }) => {
    if (!user) {
        return (
            <div></div>
        )
    }
    
    return (
            <div className='user_container'>
                <div className='header'>
                    <h2>{user.name}</h2>
                    <ul>
                        <li>email: {user.email}</li>
                        <li>username: {user.username}</li>
                        <li>role: {user.role.role}</li>
                    </ul>
                </div>
                
            </div>
    )
}

export default UserInfo