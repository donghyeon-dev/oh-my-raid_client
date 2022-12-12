import axios from 'axios';

const instance = axios.create({
    baseURL : 'http://localhost:8880',
    headers:{
        Authorization: sessionStorage.getItem('token')
    }
});

const signIn = (parameter) => {
    instance.post('/login', parameter)
}

export default instance;