import axios from 'axios';

const api = axios.create({
    baseURL:'https://omniweekdrop.herokuapp.com' ,
});

export default api;