import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useHistory } from "react-router-dom";

import loginLogo from "images/login.png";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import loginSvg from "images/login.svg";
import "../styles/SignIn.css";
function SignIn() {
  const [state, setState] = useState({
    userName: "",
    password: "",
  });
  const history = useHistory();
  const [form] = Form.useForm();
  const login = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);

    if (values.email && values.password) {
      localStorage.setItem("token", "signin");

      history.push("/dashboard");
    }
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
        <div className="formContainer">
          <div className="imageContainer">
            <img
              style={{
                width: "260px",
                marginBottom: "20px",
                alignSelf: "center",
              }}
              src={loginLogo}
            />
          </div>

          <Form
            form={form}
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="email"
                placeholder="Email"
                value={""}
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
                Login
              </Button>
              {/* <div className="signupSection">
                Want to{" "}
                <span
                  onClick={() => {
                    form.resetFields();

                    setState({
                      // userName: "",
                      // password: "",
                      whatOptionToShow:
                        state.whatOptionToShow === "SignUp"
                          ? "LogIn"
                          : "SignUp",
                    });
                  }}
                  className="signup"
                >
                  "Log In"
                </span>
              </div> */}
              {/* Or <a href="">register now!</a> */}
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
