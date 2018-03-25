import axios from 'axios';
import Token from './token';

const getEndPoint = (endpoint) => [ ADMIN_API_URL, endpoint ].join('');
const withAuthHeader = (token) => {
    return {
        'Authorization': `${token}`
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
    },

    fetchEvents: () => {
        const endpoint = getEndPoint(`/api/events`);
        return axios
            .get(endpoint, {
                headers: withAuthHeader(Token.get())
            })
            .then(response => ({ events: response.data.events }))
            .catch(response => ({ error: response.response.data }));
    },

    createEvent: (event) => {
        const endpoint = getEndPoint(`/api/events`);
        return axios
            .post(endpoint, event, {
                headers: withAuthHeader(Token.get())
            })
            .then(response => ({ event: response.data.event }))
            .catch(response => ({ error: response.response.data }));
    },

    postQuestion: (question) => {
        const endpoint = getEndPoint(`/api/questions`);
        return axios
            .post(endpoint, question, {
                headers: withAuthHeader(Token.get())
            })
            .then(response => ({ question: response.data.question }))
            .catch(response => ({ error: response.response.data }));
    },

    updateQuestion: (question) => {
        const endpoint = getEndPoint(`/api/questions/${question._id}`);
        return axios
            .put(endpoint, question, {
                headers: withAuthHeader(Token.get())
            })
            .then(response => ({ question: response.data.question }))
            .catch(response => ({ error: response.response.data }));
    },

    deleteQuestion: (question) => {
        const endpoint = getEndPoint(`/api/questions/${question._id}`);
        return axios
            .delete(endpoint, {
                headers: withAuthHeader(Token.get())
            })
            .then(response => ({ question: response.data.question }))
            .catch(response => ({ error: response.response.data }));
    }
};

export default Api;