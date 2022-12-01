import sendRequest from './send-request';

const BASE_URL = '/api/savedNames';

export function getAll() {
    return sendRequest(`${BASE_URL}/savedNames`)
}

export function addSavedName(name) {
    return sendRequest(`${BASE_URL}/savedNames`, 'POST', {name})
};

export function getOne(id) {
    return sendRequest(`${BASE_URL}/notes/${id}`)
}