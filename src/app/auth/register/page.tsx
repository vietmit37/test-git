import { SITE_TITLE } from "@/utils/consts/siteTitle.const";
import { Metadata } from "next";
import Register from "@/components/auth/Register";

export const metadata: Metadata = {
  title: `Đăng ký - ${SITE_TITLE}`,
};

const RegisterPage: React.FC = () => {
  return <Register />;
};

export default RegisterPage;
