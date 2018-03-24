import axios from 'axios';
import Token from './token';

const getEndPoint = (endpoint) => [ ADMIN_API_URL, endpoint ].join('');
const withAuthHeader = (token) => {
    return {
        'Authorization': `Token ${token}`
    };
};

const Api = {
    signIn: (username, password) => {
        const endpoint = getEndPoint('/auth/signin');
        return axios
            .post(endpoint, { username, password })
            .then(response => ({ token: response.data.token }))
            .catch(response => ({ error: response.response.data }));
    },

    fetchEventByCode: (code) => {
        const endpoint = getEndPoint(`/api/events/${code}`);
        return axios
            .get(endpoint)
            .then(response => ({ event: response.data.event }))
            .catch(response => ({ error: response.response.data }));
    }
};

export default Api;