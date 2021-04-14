const axios = require('axios');
const baseUrl = '/api/phones';

const getAll = () => {
    return axios.get(baseUrl);
}

const addPhone = (newObject) => {
    return axios.post(baseUrl, newObject)
}

const popPhone = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updatePhone = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

module.exports = {
    getAll, addPhone, popPhone, updatePhone
}