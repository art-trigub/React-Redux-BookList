import axios from "axios";

export default axios.create({
    baseURL: 'https://5efae4c880d8170016f75b52.mockapi.io/books/books',
    headers: {'Content-type': 'application/json'}
});