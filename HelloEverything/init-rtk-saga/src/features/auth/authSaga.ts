import { PayloadAction } from "@reduxjs/toolkit";
import { push } from 'connected-react-router';
import { take, fork, call, put } from "redux-saga/effects";
import { Constants } from "../../constants.ts";
import { history } from "../../utils";
import { authActions, LoginPayload } from "./authSlice";
function* handleLogin(payload: LoginPayload) {
    try {
        console.log('handle login', payload);
        localStorage.setItem(Constants.access_token, 'fake_token')
        // yield put(authActions.loginSuccess(
        //     {
        //         id: '123',
        //         name: 'name'
        //     }
        // ))
        console.log('1');
        // console.log(payload);
        
        // history.push('/admin')
        // console.log(history);
        // console.log(JSON.stringify(history.push('/admin')));
        // yield put(push('/admin'));
        // yield put(push('/admin'))
        yield call(history.push, "/admin")
        console.log('2');

    } catch (error: any) {
        yield put(authActions.loginFailed(error?.message))
    }
}
function* handleLogout() {
    console.log('handle logout');
    localStorage.removeItem(Constants.access_token)
}

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem(Constants.access_token))
        if (!isLoggedIn) {
            const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
            yield fork(handleLogin, action.payload);
        }

        yield take(authActions.logout.type);
        yield call(handleLogout);
    }

}

export default function* authSaga() {
    yield fork(watchLoginFlow)
}