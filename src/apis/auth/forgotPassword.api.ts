import axios from "@/axios";
import { IForgotPasswordForm } from "@/types/auth/forgotPasswordForm";
import { AxiosResponse } from "axios";

export async function forgotPasswordApi(
  data: IForgotPasswordForm,
): Promise<AxiosResponse<string, IForgotPasswordForm>> {
  return await axios.post("auth/forgot-password", data);
}
