import Axios from 'axios';
const baseURL = "/api/persons"

const getAll = () => {
    return Axios.get(baseURL).then(response => response.data);
}

const create = newPerson => {
    return Axios.post(baseURL, newPerson).then(response => response.data);
}

const update = (id, newPerson) => {
    return Axios.put(`${baseURL}/${id}`, newPerson).then(response => response.data)
}

const deleteEntry = id => {
    return Axios.delete(`${baseURL}/${id}`).then(response => response.data)
}


export default {
    getAll,
    create,
    update,
    deleteEntry
}