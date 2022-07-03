import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";
import { increment } from "./counterSlice";

export function* log(action: PayloadAction) {
    console.log('log');
    console.log(action);
}

export default function* counterSaga() {
    console.log('counter saga');

    // * meaning is any action
    // yield takeEvery('*', log)
    yield takeEvery(increment.toString(), log)
}