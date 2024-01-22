export interface IUserRes {
  id: number;
  username: string;
  password: string;
  email: string;
  fullName: string;
  phone: string;
  address: string;
  dob: string;
  gender: number;
  activityStatus: null;
  avatarImage: string | null;
  identityNumber: string | null;
  dateOfIdentity: string | null;
  placeOfIdentity: string | null;
  hashedRefreshToken: string | null;
  type: number | null;
  owner: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserAndAccessToken {
  accessToken: string;
  user: IUserRes;
}
