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

        let signInEndpoint = getEndPoint('/auth/signin');

        return axios
            .post(signInEndpoint, { username, password })
            .then(response => ({ token: response.data.token }))
            .catch(response => ({ error: response.response.data }));
    }
};

export default Api;