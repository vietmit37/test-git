"use client";

import React, { useEffect } from "react";
import { Button, Form, Input, Space, message, theme } from "antd";
import Title from "antd/es/typography/Title";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import useForgotPassword from "@/hooks/auth/useForgotPassword";
import Link from "next/link";
import { IForgotPasswordForm } from "@/types/auth/forgotPasswordForm";

const ForgotPassword: React.FC = () => {
  const {
    token: {
      colorPrimary,
      colorBgBase,
      colorBgContainer,
      borderRadius,
      colorTextBase,
      colorBorder,
    },
  } = theme.useToken();

  const { res, isError, error, mutate } = useForgotPassword();

  const onFinish = (values: IForgotPasswordForm) => {
    mutate(values);
  };

  useEffect(() => {
    if (res?.data) {
      message.success("Đăng ký thành công", 2);
    }
  }, [res?.data]);

  useEffect(() => {
    if (isError) {
      message.error(error?.response?.data.message, 4);
    }
  }, [isError]);

  return (
    <div className="login" style={{ backgroundColor: colorBgBase }}>
      <div
        className="form-login"
        style={{
          borderRadius: borderRadius,
          boxShadow: `${colorBorder} 0px 3px 8px`,
        }}
      >
        <Space className="logo-login">
          <img src="https://graphicsfamily.com/wp-content/uploads/edd/2020/04/house-apartment-logo-blue-png-transparent.png" />
        </Space>

        <div
          style={{ backgroundColor: colorBgContainer, padding: "50px 20px" }}
        >
          <Title
            level={1}
            style={{ color: colorTextBase, textAlign: "center" }}
          >
            Cấp lại mật khẩu
          </Title>

          <Form
            className="login-form"
            initialValues={{ remember: false }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Vui lòng nhập email!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="mr-2" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Vui lòng nhập tài khoản!" }]}
            >
              <Input
                prefix={<UserOutlined className="mr-2" />}
                placeholder="Tài khoản"
              />
            </Form.Item>
            <Form.Item>
              <Button
                style={{ background: colorPrimary }}
                htmlType="submit"
                className="login-form-button"
              >
                Gửi yêu cầu
              </Button>

              <div className="mt-8 text-center">
                <Link href="/auth/login">
                  <Button type="link">
                    <span>Đăng nhập</span>
                  </Button>
                </Link>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
