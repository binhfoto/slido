import { call, put, takeEvery, all } from 'redux-saga/effects';
import {SIGNIN_REQUEST} from '../constants';
import {signInSuccess, signInFail} from '../action';
import Api from '../service/api';
import Token from '../service/token';

function * watchSignIn ({username, password}) {
    const {token, error} = yield call(Api.signIn, username, password);
    if (token) {
        Token.set(token);
        yield put(signInSuccess(token));
    } else {
        yield put(signInFail(error));
    }
}

function * signIn() {
    yield takeEvery(SIGNIN_REQUEST, watchSignIn);
}


export default function * () {
    yield all([
        signIn()
    ]);
};