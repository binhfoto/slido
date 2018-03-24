import {
    SIGNIN_FAIL,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    RESET_ERROR_MESSAGE,
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
    CREATE_EVENT_FAIL
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

export const createEvent = (event) => ({type: CREATE_EVENT_REQUEST, event});
export const createEventSuccess = () => ({type: CREATE_EVENT_SUCCESS});
export const createEventFail = (error) => ({type: CREATE_EVENT_FAIL, error});

export const fetchEvents = () => ({type: FETCH_EVENTS_REQUEST});
export const fetchEventsSuccess = (events) => ({type: FETCH_EVENTS_SUCCESS, events});
export const fetchEventsFail = (error) => ({type: FETCH_EVENTS_FAIL, error});