import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

import loginLogo from "images/login.png";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import loginSvg from "images/login.svg";
import "../styles/SignIn.css";
function SignIn() {
  const [state, setState] = useState({
    userName: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="signIn">
      <div className="signInLeft">
        <img
          style={{
            width: "400px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
          src={loginSvg}
        />
      </div>

      <div className="signInRight">
        <div className="form">
          <div>
            <img
              style={{
                width: "260px",
                marginBottom: "20px",
                alignSelf: "center",
              }}
              src={loginLogo}
            />
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              {/* <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item> */}

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                {/* Or <a href="">register now!</a> */}
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
