'use client';

import React, { ReactElement, useEffect, useState } from 'react';
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Typography,
} from 'antd';
import { ILevelProps, strengthColor, strengthIndicator } from '@/utils/password-strength';

function RegisterForm():ReactElement {
  const [level, setLevel] = useState<ILevelProps>();

  const changePassword = (value:string) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };
  const onFinish = async (values:any) => {
    console.log(values);
  };
  const onFinishFailed = (errorInfo:any) => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    changePassword('');
  }, []);

  return (
    <Form
      name="basic"
      layout="vertical"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 24,
      }}
      style={{
        minWidth: '400px',
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="fullName"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input placeholder="Alice Jhon" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: 'email',
            required: true,
            message: 'The input is not valid E-mail!',
          },
        ]}
        hasFeedback
      >
        <Input placeholder="abc@gmail.com" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password
          onChange={(e) => {
            changePassword(e.target.value);
          }}
          placeholder="*******"
        />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="confirm"
        dependencies={['password']}
        hasFeedback
        labelCol={{
          span: 24,
        }}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('The two passwords that you entered do not match!'),
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="*******" />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            message: 'The input is not valid number!',
          },
        ]}
      >
        <Input placeholder="012345678" />
      </Form.Item>
      <Form.Item>
        <Row align="middle">
          <Col span={12}>
            <div
              style={{
                position: 'relative',
                backgroundColor: level?.color,
                width: '85px',
                height: '8px',
                borderRadius: '7px',
              }}
            />
          </Col>
          <Col span={12} offset={1}>
            <Typography
              style={{
                fontSize: '0.78rem',
                fontWeight: 'bold',
              }}
            >
              {level?.label}
            </Typography>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegisterForm;
