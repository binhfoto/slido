import {combineReducers} from 'redux';

import {
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    RESET_ERROR_MESSAGE,
    SIGNOUT,
    FETCH_EVENT_REQUEST,
    FETCH_EVENT_SUCCESS,
    FETCH_EVENT_FAIL,
    RESET_EVENT
} from '../constants';


const isSignedIn = (state = true, {type}) => {
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
    switch (type) {
        case SIGNIN_REQUEST:
        case FETCH_EVENT_REQUEST:
            return true;
        case SIGNIN_SUCCESS:
        case SIGNIN_FAIL:
        case FETCH_EVENT_SUCCESS:
        case FETCH_EVENT_FAIL:
            return false;
        default:
            return state;
    }
};

const errorMessage = (state = null, {type, error}) => {
    switch (type) {
        case SIGNIN_FAIL:
        case FETCH_EVENT_FAIL:
            return error.message || error;
        case RESET_ERROR_MESSAGE:
        default:
            return null;
    }
};

const event = (state = null, {type, event}) => {
    switch (type) {
        case FETCH_EVENT_SUCCESS:
            return event;
        case FETCH_EVENT_FAIL:
        case RESET_EVENT:
            return null;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    isSignedIn,
    isLoading,
    errorMessage,
    event
});

export default rootReducer;