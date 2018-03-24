import {
    SIGNIN_FAIL,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    RESET_ERROR_MESSAGE,
    SIGNOUT,
    FETCH_EVENT_REQUEST,
    FETCH_EVENT_SUCCESS,
    FETCH_EVENT_FAIL,
    RESET_EVENT
} from '../constants';

export const signIn = (username, password) => ({
    type: SIGNIN_REQUEST,
    username,
    password
});

export const signInSuccess = (token) => ({
    type: SIGNIN_SUCCESS,
    token
});

export const signInFail = (error) => ({
    type: SIGNIN_FAIL,
    error
});

export const resetErrorMessage = () => ({type: RESET_ERROR_MESSAGE});

export const signOut = () => ({type: SIGNOUT});

export const fetchEventByCode = code => ({
    type: FETCH_EVENT_REQUEST,
    code
});

export const fetchEventByCodeSuccess = event => ({
    type: FETCH_EVENT_SUCCESS,
    event
});

export const fetchEventByCodeFail = error => ({
    type: FETCH_EVENT_FAIL,
    error
});

export const resetEvent = () => ({type: RESET_EVENT});