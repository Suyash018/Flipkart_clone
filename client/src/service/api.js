import axios from 'axios'

export const authenticateSignup =async (data) => {

    const URL = 'http://localhost:8000';
    try {
        return await axios.post(`${URL}/signup`, data)
    }
    catch (error) {
        console.log('Error while calling signup API: ', error);
    }
}

export const authenticateLogin =async (data) => {

    const URL = 'http://localhost:8000';
    try {
        return await axios.post(`${URL}/login`, data)
    }
    catch (error) {
        console.log('Error while calling login API: ', error);
    }
}