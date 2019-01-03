import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'Token '

export default instance;