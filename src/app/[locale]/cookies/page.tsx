import { Col, Row, Divider } from "antd";
import Title from "antd/lib/typography/Title";
import BasicSection from "@/components/BasicSection/BasicSection";
import { useTranslations } from "next-intl";

const Cookies = () => {
  const t = useTranslations("general");
  const t2 = useTranslations("cookies");
  return (
    <>
      <BasicSection backgroundColor={"cream1"}>
        <Row justify={"center"}>
          <Col xs={24} style={{ textAlign: "center" }}>
            <Title>{t("cookies")}</Title>
          </Col>
          <Col xs={12} sm={24}>
            <p>{t2("paragraph1")}</p>
            <p>{t2("paragraph2")}</p>
          </Col>
        </Row>
      </BasicSection>
      <Divider style={{ margin: 0, backgroundColor: "#bfbfbf" }} />
    </>
  );
};

export default Cookies;
