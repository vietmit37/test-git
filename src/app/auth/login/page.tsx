import { SITE_TITLE } from "@/utils/consts/siteTitle.const";
import { Metadata } from "next";
import Login from "../../../components/auth/Login";

export const metadata: Metadata = {
  title: `Đăng nhập - ${SITE_TITLE}`,
};

const LoginPage: React.FC = () => {
  return <Login />;
};

export default LoginPage;
