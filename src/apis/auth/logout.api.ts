import axios from "@/axios";
import { AxiosResponse } from "axios";

export async function logoutApi(): Promise<AxiosResponse> {
  return await axios.get("auth/log-out");
}
