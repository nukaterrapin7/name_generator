import sendRequest from './send-request';

const BASE_URL = '/api/notes';

export function getOne(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export function addNote(id, note) {
    return sendRequest(`${BASE_URL}/${id}`, 'POST', {note})
};

export function deleteNote(id, note) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE', {note})
}