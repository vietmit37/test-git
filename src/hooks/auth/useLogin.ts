import { AxiosResponse } from "axios";
import { loginApi } from "../../apis/auth/login.api";
import { IUserAndTokens } from "@/types/auth/tokenUser";
import {
  ACCESS_TOKEN_NAME,
  REFRESH_TOKEN_NAME,
} from "@/utils/consts/token.const";
import { setCookie } from "cookies-next";
import { useMutation } from "@tanstack/react-query";
import { ILoginForm } from "@/types/auth/loginForm";

export default function useLogin() {
  const mutateResult = useMutation<
    AxiosResponse<IUserAndTokens, ILoginForm>,
    any,
    ILoginForm
  >({
    mutationFn: (dataLogin: ILoginForm) => loginApi(dataLogin),
    retry: false,
  });

  const { data, isError, error, mutate } = mutateResult;

  if (data?.data.tokens) {
    setCookie(ACCESS_TOKEN_NAME, data?.data.tokens.accessToken);
    setCookie(REFRESH_TOKEN_NAME, data?.data.tokens.refreshToken);
  }

  return {
    res: data,
    isError,
    error,
    mutate,
  };
}
