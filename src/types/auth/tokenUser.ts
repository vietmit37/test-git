import { IResidentRes } from "../resident/residentRes";
import { IStaffRes } from "../staff/staffRes";

export interface IUserAndTokens {
  user: IResidentRes | IStaffRes;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface IUserAndAccessToken {
  user: IResidentRes | IStaffRes;
  accessToken: string;
}
