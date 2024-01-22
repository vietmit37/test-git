'use client';

import React from 'react';
import { Col, Row, Typography } from 'antd';
import AuthWrapper from '@/components/auth/wrapper';
import RegisterForm from '@/components/auth/form/register-form';

const { Title } = Typography;
function Register() {
  return (
    <div className="w-full">
      <AuthWrapper>
        <Row>
          <Col span={24}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '-1px',
              }}
            >
              <Title level={3}>Sign up</Title>
              Already have an account?
            </div>
          </Col>
        </Row>
        <RegisterForm />
      </AuthWrapper>
    </div>

  );
}

export default Register;
