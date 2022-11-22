import sendRequest from './send-request';

const BASE_URL = '/api/notes';

export function addNote() {
    return sendRequest(`${BASE_URL}/notes`, 'POST')
};