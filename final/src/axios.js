import axios from 'axios'

const API_ROOT = "https://moosetherecord3.herokuapp.com/:5000"

const instance = axios.create({
    baseURL: API_ROOT,
})

export default instance;
