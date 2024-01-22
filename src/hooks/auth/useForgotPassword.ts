import { AxiosResponse } from "axios";
import { forgotPasswordApi } from "../../apis/auth/forgotPassword.api";
import { useMutation } from "@tanstack/react-query";
import { IForgotPasswordForm } from "@/types/auth/forgotPasswordForm";

export default function useForgotPassword() {
  const mutateResult = useMutation<
    AxiosResponse<string, IForgotPasswordForm>,
    any,
    IForgotPasswordForm
  >({
    mutationFn: (dataForgotPassword: IForgotPasswordForm) =>
      forgotPasswordApi(dataForgotPassword),
    retry: false,
  });

  const { data, isError, error, mutate } = mutateResult;

  return {
    res: data,
    isError,
    error,
    mutate,
  };
}
