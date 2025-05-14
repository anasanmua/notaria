"use client";
import BasicSection from "@/components/BasicSection/BasicSection";
import Title from "antd/lib/typography/Title";
import { Button, Checkbox, Form, Input, InputNumber, Select } from "antd";
import { useTranslations } from "next-intl";
import { sendEmail, User } from "@/app/[locale]/formulario-contacto/MailSender";
import styles from "./formulario-contacto.module.css";

const Information = () => {
  const t = useTranslations("general");
  const t2 = useTranslations("contactForm");

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

  const validateMessages = {
    required: "El ${label} es un campo obligatorio",
    types: {
      email: "Por favor, añada un dominio válido al email",
    },
  };

  return (
    <BasicSection>
      <Title className={styles.title}>Formulario de contacto</Title>
      <div className={styles.formContainer}>
        <Form
          layout={"vertical"}
          {...defaultLayout}
          onFinish={sendEmail}
          className={styles.form}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={"name"}
            label={t("name")}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={"surname"} label={t("surname")} labelAlign={"left"}>
            <Input />
          </Form.Item>
          <Form.Item
            name={"email"}
            label={t("email")}
            rules={[{ type: "email", required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"phone"}
            label={t("phone")}
            rules={[{ required: true, type: "number" }]}
          >
            <InputNumber className={styles.phoneNumber} />
          </Form.Item>

          <Form.Item
            {...fullWidthLayout}
            name={"contactWay"}
            label={t2("contactWay")}
          >
            <Select
              placeholder={t("selectReason")}
              optionFilterProp={"label"}
              options={[
                {
                  value: "mail",
                  label: t("email"),
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
            rules={[{ required: true }]}
          >
            <Input.TextArea className={styles.maxHeight} />
          </Form.Item>

          <Form.Item
            name={"privacy"}
            valuePropName={"checked"}
            rules={[
              {
                required: true,
                message: "Por favor, acepte la Política de privacidad",
              },
            ]}
          >
            <Checkbox>
              He leído y acepto la{" "}
              <a href={"/politica-privacidad"} target={"_blank"}>
                Política de Privacidad
              </a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...buttonLayout} label={null} className={styles.button}>
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
