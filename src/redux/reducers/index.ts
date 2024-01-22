import { combineReducers } from "redux";
import { systemUserSlicesReducers } from "./slices/systemUserSlices";

export const rootReducer = combineReducers({
  systemUserState: systemUserSlicesReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
