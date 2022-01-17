import axios from 'axios'

const API_ROOT = "https://moosetherecord4.herokuapp.com/"

const instance = axios.create({
    baseURL: API_ROOT,
})

export default instance;
