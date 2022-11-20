import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Alert, Spin } from "antd";

// Actions
import { login } from "../store/actions";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.userReducer);

  const onFinish = (values) => {
    dispatch(login(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    // if user exists return to homepage
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input
          style={{ padding: "0.8rem" }}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input
          style={{ padding: "0.8rem" }}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      {error && (
        <Form.Item>
          <Alert
            description="Wrong username or password."
            type="error"
            showIcon
          />
        </Form.Item>
      )}
      <Form.Item wrapperCol={{ offset: 9 }}>
        <Button type="primary" htmlType="submit">
          {isLoading ? <Spin /> : "Submit"}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
