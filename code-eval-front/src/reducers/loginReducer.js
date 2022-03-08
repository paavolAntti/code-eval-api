import loginService from '../services/login.js'
import userService from '../services/users'
import storage from '../utils/storage'

export const setUser = (user) => {
    return async dispatch => {
        dispatch({
            type: 'SETUSER',
            data: user
        })
    }
}

export const loginUser = (credentials) => {
    return async dispatch => {
        try {
            const user = await loginService.login(credentials)
            dispatch({
                type: 'LOGIN',
                data: user
            })
        } catch (exception) {
            console.log(`error logging in ${exception.message}`)
        }
    }
}

export const logoutUser = () => {
    return async dispatch => {
        dispatch({
            type: 'LOGOUT'
        })
    }
}

export const newUser = (username, mail, password) => {
    return async dispatch => {
        try {
            const user = await userService.newUser(username, mail, password)
            dispatch({
                type: 'NEWUSER',
                data: user
            })
        } catch (exception) {
            console.log('error creating new user: ', exception.message)
        }
    }
}

const loginReducer = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log('login data: ', action.data)
            window.localStorage.setItem('loggedUser', JSON.stringify(action.data))
            storage.saveUser(action.data)
            return action.data
        case 'LOGOUT':
            console.log('logout')
            window.localStorage.removeItem('loggedUser')
            storage.logoutUser()
            return null
        case 'SETUSER':
            return action.data
        case 'NEWUSER':
            return state
        default:
            return state
    }
}

export default loginReducer