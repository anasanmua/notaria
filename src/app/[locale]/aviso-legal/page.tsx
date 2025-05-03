import { Col, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";

import BasicSection from "@/components/BasicSection/BasicSection";
import { useTranslations } from "next-intl";

const LegalNotice = () => {
  const t = useTranslations("general");
  const t2 = useTranslations("legalNotice");

  return (
    <>
      <BasicSection backgroundColor={"cream1"}>
        <Row justify="center">
          <Col xs={24} style={{ textAlign: "center" }}>
            <Title>{t("legalNotice")}</Title>
          </Col>
          <Col xs={24} sm={24}>
            <p>{t2("intro")}</p>
            <p>{t2("holder")}</p>
            <p>{t2("address")}</p>
            <p>{t2("phone")}</p>

            <Title level={4}>{t2("firstTitle")}</Title>
            <p>{t2("firstParagraph")}</p>
            <Title level={4}>{t2("secondTitle")}</Title>
            <p>{t2("secondParagraph1")}</p>
            <p>{t2("secondParagraph2")}</p>
            <p>{t2("secondParagraph3")}</p>
            <p>{t2("secondParagraph4")}</p>
            <Title level={4}>{t2("thirdTitle")}</Title>
            <p>{t2("thirdParagraph1")}</p>
            <p>{t2("thirdParagraph2")}</p>
            <p>{t2("thirdParagraph3")}</p>
            <p>{t2("thirdParagraph4")}</p>
            <p>{t2("thirdParagraph5")}</p>
            <p>{t2("thirdParagraph6")}</p>
            <Title level={4}>{t2("fourthTitle")}</Title>
            <p>{t2("fourthParagraph1")}</p>
            <p>{t2("fourthParagraph2")}</p>
            <Title level={4}>{t2("fifthTitle")}</Title>
            <p>{t2("fifthParagraph1")}</p>
            <p>{t2("fifthParagraph2")}</p>
            <p>{t2("fifthParagraph3")}</p>
          </Col>
        </Row>
      </BasicSection>
      <Divider style={{ margin: 0, backgroundColor: "#bfbfbf" }} />
    </>
  );
};

export default LegalNotice;
