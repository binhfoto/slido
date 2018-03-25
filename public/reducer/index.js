import {combineReducers} from 'redux';

import {
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    RESET_NOTIFICATION_MESSAGE,
    SIGNOUT,
    FETCH_EVENT_REQUEST,
    FETCH_EVENT_SUCCESS,
    FETCH_EVENT_FAIL,
    RESET_EVENT,
    FETCH_EVENTS_REQUEST,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAIL,
    CREATE_EVENT_REQUEST,
    CREATE_EVENT_SUCCESS,
    CREATE_EVENT_FAIL,
    POST_QUESTION_SUCCESS,
    POST_QUESTION_FAIL,
    HIGHLIGHT_QUESTION_SUCCESS,
    HIGHLIGHT_QUESTION_FAIL,
    DELETE_QUESTION_SUCCESS,
    DELETE_QUESTION_FAIL,
} from '../constants';


const isSignedIn = (state = false, {type}) => {
    switch (type) {
        case SIGNIN_SUCCESS:
            return true;
        case SIGNIN_FAIL:
        case SIGNOUT:
            return false;
        default:
            return state;
    }
};

const isLoading = (state = false, {type}) => {

    if(type.endsWith('_REQUEST')) return true;
    else if(type.endsWith('_SUCCESS') || type.endsWith('_FAIL')) return false;
    return state;
    /*
    switch (type) {
        case SIGNIN_REQUEST:
        case FETCH_EVENT_REQUEST:
        case CREATE_EVENT_REQUEST:
        case FETCH_EVENTS_REQUEST:
            return true;
        case SIGNIN_SUCCESS:
        case SIGNIN_FAIL:
        case FETCH_EVENT_SUCCESS:
        case FETCH_EVENT_FAIL:
        case FETCH_EVENTS_SUCCESS:
        case FETCH_EVENTS_FAIL:
            return false;
        default:
            return state;
    }*/
};

const notificationMessage = (state = null, {type, error}) => {
    if (type === POST_QUESTION_SUCCESS) {
        return 'Question posted successfully'
    } else if (type.endsWith('_FAIL')) {
        return error.message || error
    }
    return null; // RESET_ERROR_MESSAGE returns null

    /*switch (type) {
        case SIGNIN_FAIL:
        case FETCH_EVENT_FAIL:
        case CREATE_EVENT_FAIL:
        case FETCH_EVENTS_FAIL:
            return error.message || error;
        case RESET_ERROR_MESSAGE:
        default:
            return null;
    }*/
};

const event = (state = null, {type, event}) => {
    switch (type) {
        case FETCH_EVENT_SUCCESS:
            return event;
        case FETCH_EVENT_FAIL:
        case RESET_EVENT:
            return null;
        case HIGHLIGHT_QUESTION_SUCCESS: {
            const newQuestion = event.newQuestion;
            state.questions = state.questions.map(question => {
                if (question._id === newQuestion._id) {
                    question.isHighlight = newQuestion.isHighlight;
                }
                return question;
            });
            return state;
        }
        case POST_QUESTION_SUCCESS: {
            state.questions = state.questions.concat(event.newQuestion);
            return state;
        }
        case DELETE_QUESTION_SUCCESS: {
            const deletedQuestion = event.deletedQuestion;
            state.questions = state.questions.reduce((result, question) => {
                if (question._id !== deletedQuestion._id) {
                    result.push(question);
                }
                return result;
            }, []);
            return state;
        }
        default:
            return state;
    }
};

const events = (state = [], {type, events}) => {
    switch (type) {
        case FETCH_EVENTS_SUCCESS:
            return events;
        case FETCH_EVENTS_FAIL:
            return [];
        case CREATE_EVENT_SUCCESS: {
            return [].concat(events, state);
        }
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    isSignedIn,
    isLoading,
    notificationMessage,
    event,
    events
});

export default rootReducer;