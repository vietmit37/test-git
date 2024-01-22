import axios from "@/axios";
import { IResidentRes } from "@/types/resident/residentRes";
import { IStaffRes } from "@/types/staff/staffRes";
import { AxiosResponse } from "axios";

export async function authApi(): Promise<
  AxiosResponse<IResidentRes | IStaffRes>
> {
  return await axios.get("auth");
}
