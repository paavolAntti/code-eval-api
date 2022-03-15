import axios from 'axios'

const baseUrl = 'http://localhost/api/users'

const newUser = async (username, mail, password) => {
    const newUser = {
        username: username,
        mail: mail,
        password: password
    }
    const user = await axios.post(baseUrl, newUser)
    return user.data.mail
    
}

const userWithMail = async (id, mail) => {
    console.log('mail in controller: ', mail)
    console.log('id in controller: ', id)
    const user = await axios.get(`${baseUrl}/${id}/${mail}`)
    console.log('user in controller: ', user)
    return user.data.id
}

export default { newUser, userWithMail }