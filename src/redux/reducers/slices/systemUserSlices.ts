import { IUserRes } from "@/types/user/userRes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SystemUserState {
  systemUser: IUserRes | null;
}

export const initialState: SystemUserState = {
  systemUser: null,
};

type SystemUserPayload = PayloadAction<Pick<SystemUserState, "systemUser">>;

const systemUserSlices = createSlice({
  name: "systemUserSlices",
  initialState,
  reducers: {
    updateSystemUser: (state, { payload }: SystemUserPayload) => {
      Object.assign(state, payload);
    },
  },
});

export const systemUserSlicesReducers = systemUserSlices.reducer;
export const systemUserSlicesActions = systemUserSlices.actions;
