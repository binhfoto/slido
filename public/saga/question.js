import {call, put, takeEvery} from "redux-saga/effects";
import Api from "../service/api";

import {
    POST_QUESTION_REQUEST,
    DELETE_QUESTION_REQUEST,
    UPDATE_QUESTION_REQUEST
} from '../constants';

import {
    postQuestionSuccess,
    postQuestionFail,
    deleteQuestionSuccess,
    deleteQuestionFail,
    updateQuestionSuccess,
    updateQuestionFail
} from '../action';

/******************************** POST QUESTION SAGA ********************************/
function * watchPostQuestion (action) {
    const {question, error} = yield call(Api.postQuestion, action.question);
    if (question) {
        yield put(postQuestionSuccess(question));
    } else {
        yield put(postQuestionFail(error));
    }
}

function * postQuestion () {
    yield takeEvery(POST_QUESTION_REQUEST, watchPostQuestion);
};

/******************************** DELETE QUESTION SAGA ********************************/
function * watchDeleteQuestion (action) {
    const {question, error} = yield call(Api.deleteQuestion, action.question);
    if (question) {
        yield put(deleteQuestionSuccess(question));
    } else {
        yield put(deleteQuestionFail(error));
    }
}

function * deleteQuestion () {
    yield takeEvery(DELETE_QUESTION_REQUEST, watchDeleteQuestion);
};

/******************************** EDIT QUESTION SAGA ********************************/
function * watchUpdateQuestion (action) {
    const {question, error} = yield call(Api.updateQuestion, action.question);
    if (question) {
        yield put(updateQuestionSuccess(question));
    } else {
        yield put(updateQuestionFail(error));
    }
}

function * updateQuestion () {
    yield takeEvery(UPDATE_QUESTION_REQUEST, watchUpdateQuestion);
}

export default {
    postQuestion,
    deleteQuestion,
    updateQuestion
}