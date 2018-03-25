import {call, put, takeEvery} from "redux-saga/effects";

import {
    FETCH_EVENT_REQUEST,
    FETCH_EVENTS_REQUEST,
    CREATE_EVENT_REQUEST
} from '../constants';

import {
    fetchEventByCodeSuccess,
    fetchEventByCodeFail,
    fetchEventsSuccess,
    fetchEventsFail,
    createEventSuccess,
    createEventFail
} from '../action';

import Api from "../service/api";


/******************************** FETCH EVENT BY CODE SAGA ********************************/
function * watchFetchEvent({code}) {
    const {event, error} = yield call(Api.fetchEventByCode, code);
    if (event) {
        yield put(fetchEventByCodeSuccess(event));
    } else {
        yield put(fetchEventByCodeFail(error));
    }
}

function * fetchEventByCode () {
    yield takeEvery(FETCH_EVENT_REQUEST, watchFetchEvent)
};

/******************************** FETCH ALL EVENTS SAGA ********************************/
function * watchFetchEvents ({}) {
    const {events, error} = yield call(Api.fetchEvents);
    if (events) {
        yield put(fetchEventsSuccess(events));
    } else {
        yield put(fetchEventsFail(error));
    }
}

function * fetchEvents () {
    yield takeEvery(FETCH_EVENTS_REQUEST, watchFetchEvents);
};

/******************************** CREATE EVENT SAGA ********************************/
function * watchCreateEvent (action) {
    const {event, error} = yield call(Api.createEvent, action.event);
    if (event) {
        yield put(createEventSuccess([event]));
    } else {
        yield put(createEventFail(error));
    }
}

function * createEvent () {
    yield takeEvery(CREATE_EVENT_REQUEST, watchCreateEvent);
}

export default {
    fetchEventByCode,
    fetchEvents,
    createEvent
};