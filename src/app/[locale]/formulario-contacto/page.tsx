"use client";
import BasicSection from "@/components/BasicSection/BasicSection";
import Title from "antd/lib/typography/Title";
import { Button, Checkbox, Form, Input, InputNumber, Select } from "antd";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";

interface User extends Record<string, unknown> {
  name: string;
  surname: string;
  email: string;
  phone: number;
  contactWay: string;
  message: string;
  privacyPolicy: boolean;
}

// text-align on columns left?
const Information = () => {
  const t = useTranslations("General");
  const t2 = useTranslations("ContactForm");

  const defaultLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  const fullWidthLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 20 },
  };

  const buttonLayout = {
    wrapperCol: { span: 20 },
  };

  // TO DO Añadir rule para pol.priv
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

  const sendEmail = (values: User) => {
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

  return (
    <BasicSection>
      <Title style={{ textAlign: "center" }}>Formulario de contacto</Title>
      <div style={{ display: "flex", justifyContent: " center" }}>
        <Form
          layout="vertical"
          {...defaultLayout}
          onFinish={sendEmail}
          style={{ width: 600 }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={"name"}
            label={t("name")}
            rules={[{ required: true }]}
            labelAlign="left"
          >
            <Input />
          </Form.Item>
          <Form.Item name={"surname"} label={t("surname")} labelAlign="left">
            <Input />
          </Form.Item>
          <Form.Item
            name={"email"}
            label={t("email")}
            rules={[{ type: "email" }]}
            labelAlign="left"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"phone"}
            label={t("phone")}
            rules={[{ type: "number", min: 0 }]}
            labelAlign="left"
          >
            <InputNumber style={{ width: 150 }} />
          </Form.Item>

          <Form.Item
            {...fullWidthLayout}
            name={"contactWay"}
            label={t2("contactWay")}
          >
            <Select
              placeholder="Select a reason"
              optionFilterProp="label"
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
            name={"message"}
            label={t2("howCanWeHelp")}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            {...buttonLayout}
            label={null}
            style={{ textAlign: "left" }}
          >
            <Form.Item name="privacyPolicy">
              <Checkbox>
                He leído y acepto la
                <a
                  href="/politica-privacidad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Privacidad
                </a>
              </Checkbox>
            </Form.Item>
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
