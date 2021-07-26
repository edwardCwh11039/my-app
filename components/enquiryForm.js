import { Button, Form, Input } from "antd";
import styled from "styled-components";

const CustomHeader = styled.h2`
  font-size: 42px;
  line-height: 1.1em;
  text-align: left;
  font-family: "Teko", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

export default function EnquiryForm() {
  const [form] = Form.useForm();

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Teko:wght@700&family=Zen+Loop&display=swap"
        rel="stylesheet"
      ></link>
      <CustomHeader>Get in Touch</CustomHeader>
      <Form layout="vertical" form={form}>
        {/* Name Input */}
        <Form.Item label="Name">
          <Form.Item
            name="First Name"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 10px)",
              margin: "0",
            }}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name="Last Name"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 10px)",
              margin: "0 8px",
            }}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
        </Form.Item>
        {/* Email Input */}
        <Form.Item label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        {/* Telephone Input */}
        <Form.Item label="Telephone" rules={[{ required: true }]}>
          <Input />
        </Form.Item>{" "}
        {/* Comment or Message Input */}
        <Form.Item label="Comment or Message" rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
