import sendRequest from './send-request';

const BASE_URL = '/api/details';

export function getOne(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export function addDetail(id, detail) {
    return sendRequest(`${BASE_URL}/${id}`, 'POST', {detail})
};
