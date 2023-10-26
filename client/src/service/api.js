import axios from 'axios'

export const authenticateSignup =async (data) => {

    const URL = 'http://localhost:8000';
    try {
        return await axios.post(`${URL}/signup`, user)
    }
    catch (error) {
        console.log('Error while calling login API: ', error);
    }
}