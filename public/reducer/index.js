import {combineReducers} from 'redux';

import {
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    RESET_ERROR_MESSAGE
} from '../constants';


const isSignedIn = (state = true, {type}) => {
    switch (type) {
        case SIGNIN_SUCCESS:
            return true;
        case SIGNIN_FAIL:
            return false;
        default:
            return state;
    }
};

const isLoading = (state = false, {type}) => {
    switch (type) {
        case SIGNIN_REQUEST:
            return true;
        case SIGNIN_SUCCESS:
        case SIGNIN_FAIL:
            return false;
        default:
            return state;
    }
};

const errorMessage = (state = null, {type, error}) => {
    switch (type) {
        case SIGNIN_FAIL:
            return error;
        case RESET_ERROR_MESSAGE:
        default:
            return null;
    }
};


const rootReducer = combineReducers({
    isSignedIn,
    isLoading,
    errorMessage
});

export default rootReducer;