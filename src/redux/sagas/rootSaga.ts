import { all } from "redux-saga/effects";
import systemAuthWatcher from "./auth/systemAuth";
import { dispatchSystemAuthSaga } from "./auth/dispatchSystemAuth";

export default function* rootSaga() {
  yield all([systemAuthWatcher(), dispatchSystemAuthSaga()]);
}
