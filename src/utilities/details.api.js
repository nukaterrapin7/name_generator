import sendRequest from './send-request';

const BASE_URL = '/api/details';

// export function getAll() {
//     return sendRequest(`${BASE_URL}/details`)
// }

export function addDetail(name, detail) {
    return sendRequest(`${BASE_URL}/details`, 'POST', {name, detail})
};
