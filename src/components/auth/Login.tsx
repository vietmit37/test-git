import AuthWrapper from '@/components/auth/wrapper';
import LoginForm from '@/components/auth/form/login-form';
import { Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import Link from 'next/link';

function Login() {
  return (

    <div
      className="h-screen flex"
    >
      <AuthWrapper>
        <Row>
          <Col span={24}>
            <div
              className="flex justify-between align-baseline mb-[-1px]"
            >
              <Title level={3}>Login</Title>
              <Link href="">
                Don&apos;t have an account?
              </Link>
            </div>
          </Col>
        </Row>
        <LoginForm />
      </AuthWrapper>
    </div>

  );
}
export default Login;
