import axios from 'axios';
const api = axios.create({
    baseUrl:'https://omniweekdrop.herokuapp.com',

});

export default api;