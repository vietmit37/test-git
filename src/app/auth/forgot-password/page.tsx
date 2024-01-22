import { SITE_TITLE } from "@/utils/consts/siteTitle.const";
import { Metadata } from "next";
import Login from "../../../components/auth/Login";
import ForgotPassword from "@/components/auth/ForgotPassword";

export const metadata: Metadata = {
  title: `Quên mật khẩu - ${SITE_TITLE}`,
};

const ForgotPasswordPage: React.FC = () => {
  return <ForgotPassword />;
};

export default ForgotPasswordPage;
