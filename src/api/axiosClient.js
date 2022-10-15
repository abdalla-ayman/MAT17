import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    headers: {
    
    }
});


export default instance