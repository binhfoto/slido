import {call, put, takeEvery} from "redux-saga/effects";

import {
    SIGNIN_REQUEST
} from '../constants';

import {
    signInSuccess,
    signInFail
} from '../action';

import Api from "../service/api";
import Token from "../service/token";

/********************************SIGN IN SAGA********************************/
function * watchSignInRequest ({username, password}) {
    const {token, error} = yield call(Api.signIn, username, password);
    if (token) {
        Token.set(token);
        yield put(signInSuccess(token));
    } else {
        yield put(signInFail(error));
    }
}

const signIn = function * () {
    yield takeEvery(SIGNIN_REQUEST, watchSignInRequest);
};

export default {signIn};