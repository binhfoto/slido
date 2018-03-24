import { call, put, takeEvery, all } from 'redux-saga/effects';

import {
    SIGNIN_REQUEST,
    FETCH_EVENT_REQUEST
} from '../constants';

import {
    signInSuccess,
    signInFail,
    fetchEventByCodeSuccess,
    fetchEventByCodeFail
} from '../action';

import Api from '../service/api';
import Token from '../service/token';

function * watchSignInRequest ({username, password}) {
    const {token, error} = yield call(Api.signIn, username, password);
    if (token) {
        Token.set(token);
        yield put(signInSuccess(token));
    } else {
        yield put(signInFail(error));
    }
}

function * signIn() {
    yield takeEvery(SIGNIN_REQUEST, watchSignInRequest);
}

function * watchFetchEvent({code}) {
    const {event, error} = yield call(Api.fetchEventByCode, code);
    if (event) {
        yield put(fetchEventByCodeSuccess(event));
    } else {
        yield put(fetchEventByCodeFail(error));
    }
}

function * fetchEventByCode() {
    yield takeEvery(FETCH_EVENT_REQUEST, watchFetchEvent)
}

export default function * () {
    yield all([
        signIn(),
        fetchEventByCode()
    ]);
};