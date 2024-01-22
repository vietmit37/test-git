import { authApi } from "@/apis/auth/auth.api";
import { isAxiosResponse } from "@/axios";
import { systemUserSlicesActions } from "@/redux/reducers/slices/systemUserSlices";
import { call, put, takeLatest } from "redux-saga/effects";

const ACTION_NAME = "sagas/auth/systemAuth";

export const SYSTEM_AUTH_DONE = "sagas/auth/systemAuthDone";

export const systemAuth = () => ({
  type: ACTION_NAME,
});

export const systemAuthDone = () => ({
  type: SYSTEM_AUTH_DONE,
});

function* task() {
  try {
    const response: ReturnType<typeof authApi> = yield call(authApi);
    if (isAxiosResponse(response) && response.data && response.status === 200) {
      yield put(
        systemUserSlicesActions.updateSystemUser({ systemUser: response.data }),
      );
      yield put(systemAuthDone());
    }
  } catch (error) {}
}

export default function* systemAuthWatcher() {
  yield takeLatest(ACTION_NAME, task);
}
