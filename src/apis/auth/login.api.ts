import axios from "@/axios";
import { ILoginForm } from "@/types/auth/loginForm";
import { IUserAndTokens } from "@/types/auth/tokenUser";
import { AxiosResponse } from "axios";

export async function loginApi(
  data: ILoginForm,
): Promise<AxiosResponse<IUserAndTokens, ILoginForm>> {
  return await axios.post("auth/log-in", data);
}
