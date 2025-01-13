"use client";
import BasicSection from "@/components/BasicSection/BasicSection";
import Title from "antd/lib/typography/Title";
import { Button, Form, Input, InputNumber, Row } from "antd";

// text-align on columns left?
const Information = () => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <BasicSection>
      <Title style={{ textAlign: "center" }}>Formulario de contacto</Title>
      <div style={{ display: "flex", justifyContent: " center" }}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{ width: 600 }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "age"]}
            label="Age"
            rules={[{ type: "number", min: 0, max: 99 }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={["user", "website"]} label="Website">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label={null}
            style={{ display: "flex", justifyContent: "right" }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </BasicSection>
  );
};

export default Information;
