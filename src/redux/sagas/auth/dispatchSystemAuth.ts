import { put } from "redux-saga/effects";
import { systemAuth } from "./systemAuth";

export function* dispatchSystemAuthSaga() {
  yield put(systemAuth());
}
