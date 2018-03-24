// date time format
export const DATE_TIME_FORMAT = 'MM/DD/YYYY HH:mm';

// route
export const HOME_ROUTE = '/';
export const SIGN_IN_ROUTE = '/signin';
export const EVENT_MANAGEMENT_ROUTE = '/eventmgmt';
export const EVENT_ROOM_ROUTE = code => `/eventroom/${code}`;

// action
export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAIL    = 'SIGNIN_FAIL';

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export const SIGNOUT = 'SIGNOUT';

export const FETCH_EVENT_REQUEST = 'FETCH_EVENT_REQUEST';
export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS';
export const FETCH_EVENT_FAIL    = 'FETCH_EVENT_FAIL';

export const RESET_EVENT = 'RESET_EVENT';

export const CREATE_EVENT_REQUEST = 'CREATE_EVENT_REQUEST';
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS';
export const CREATE_EVENT_FAIL    = 'CREATE_EVENT_FAIL';

export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAIL    = 'FETCH_EVENTS_FAIL';