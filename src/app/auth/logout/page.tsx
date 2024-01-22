import { SITE_TITLE } from "@/utils/consts/siteTitle.const";
import { Metadata } from "next";
import Logout from "@/components/auth/Logout";

export const metadata: Metadata = {
  title: `Đăng xuất - ${SITE_TITLE}`,
};

const LogoutPage: React.FC = () => {
  return <Logout />;
};

export default LogoutPage;
