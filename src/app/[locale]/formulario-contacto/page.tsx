"use client";
import BasicSection from "@/components/BasicSection/BasicSection";
import Title from "antd/lib/typography/Title";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { useTranslations } from "next-intl";
import { FormEvent } from "react";
import emailjs from "@emailjs/browser";

// text-align on columns left?
const Information = () => {
  const t = useTranslations("General");
  const t2 = useTranslations("ContactForm");

  const defaultLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const fullWidthLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 20 },
  };

  const buttonLayout = {
    wrapperCol: { span: 20 },
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

  //type this values
  const sendEmail = (values) => {
    console.log(values);
    console.log("hello");

    emailjs
      .send("contact_service", "contact_form", values, {
        publicKey: "SbZVFYR3ilV-3chOp",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <BasicSection>
      <Title style={{ textAlign: "center" }}>Formulario de contacto</Title>
      <div style={{ display: "flex", justifyContent: " center" }}>
        <Form
          {...defaultLayout}
          onFinish={sendEmail}
          style={{ width: 600 }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label={t("name")}
            rules={[{ required: true }]}
            labelAlign="left"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "surname"]}
            label={t("surname")}
            labelAlign="left"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label={t("email")}
            rules={[{ type: "email" }]}
            labelAlign="left"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "phone"]}
            label={t("phone")}
            rules={[{ type: "number", min: 0 }]}
            labelAlign="left"
          >
            <InputNumber style={{ width: 150 }} />
          </Form.Item>

          <Form.Item
            {...fullWidthLayout}
            name={["user", "contactWay"]}
            label={t2("contactWay")}
          >
            <Select
              placeholder="Select a reason"
              optionFilterProp="label"
              onChange={onChange}
              options={[
                {
                  value: "mail",
                  label: "Correo electrónico",
                },
                {
                  value: "phone",
                  label: t("phone"),
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            {...fullWidthLayout}
            name={["user", "message"]}
            label={t2("howCanWeHelp")}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            {...buttonLayout}
            label={null}
            style={{ textAlign: "right" }}
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
