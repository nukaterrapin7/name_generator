import sendRequest from './send-request';

const BASE_URL = '/api/notes';

export function getAll() {
    return sendRequest(`${BASE_URL}/notes`)
}

export function addNote(name) {
    return sendRequest(`${BASE_URL}/notes`, 'POST', {name})
};

export function getOne(id) {
    return sendRequest(`${BASE_URL}/notes/details`, 'GET', {id})
}