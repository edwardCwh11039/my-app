import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import apiService from "../lib/services/api-service";
import storage from "../lib/services/storage";
import { validateMessages } from "../lib/constant/config";
import { Role } from "../lib/constant/role";

const LoginForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const login = async (loginRequest) => {
    const { data } = await apiService.login(loginRequest);

    if (!!data) {
      storage.setUserInfo(data);
      router.push("dashboard");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "80px",
        maxHeight: "100vh",
      }}
    >
      <h1
        style={{
          width: "35%",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Course Management Assistant
      </h1>
      <Form
        name="login-form"
        onFinish={(values) => {
          login({ role: Role.Manager, ...values });
        }}
        form={form}
        validateMessages={validateMessages}
        style={{ width: "35%" }}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input email",
            },
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Please input email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input password",
            },
            {
              min: 4,
              max: 16,
              message: "Password is Invalid",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Please input password"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%", margin: "25px 0px" }}
          >
            Sign In
          </Button>
          <div>
            <span> No account? </span>
            <a>Sign up</a>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
