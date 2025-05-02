"use client";
import Title from "antd/lib/typography/Title";
import { Col, Row, Divider } from "antd";
import BasicSection from "@/components/BasicSection/BasicSection";
import { useTranslations } from "next-intl";

const Privacy = () => {
  const t = useTranslations("general");
  const t2 = useTranslations("privacyPolicy");

  return (
    <>
      <BasicSection backgroundColor={"cream1"}>
        <Row justify="center">
          <Col xs={24} style={{ textAlign: "center" }}>
            <Title>{t("privacyPolicy")}</Title>
          </Col>
          <Col xs={24} sm={24}>
            <Title level={3}>{t2("subtitle")}</Title>
            <Title level={4}>{t2("firstSubIndex")}</Title>
            <ul>
              <li>{t2("firstUl1")}</li>
              <li>{t2("firstUl2")}</li>
              <li>{t2("firstUl3")}</li>
              <li>{t2("firstUl4")}</li>
              <li>{t2("firstUl5")}</li>
            </ul>
            <p>{t2("firstParagraph")}</p>
            <Title level={4}>{t2("secondSubIndex")} </Title>
            <p>{t2("secondParagraph1")}</p>
            <ul>
              <li>{t2("secondUl1")}</li>
              <li>{t2("secondUl1")}</li>
              <li>{t2("secondUl3")}</li>
            </ul>
            <p>{t2("secondParagraph2")}</p>
            <Title level={4}>{t2("thirdSubIndex")}</Title>
            <p>{t2("thirdParagraph")}</p>
            <Title level={4}>{t2("fourthSubIndex")}</Title>
            <p>{t2("fourthParagraph")}</p>
            <Title level={4}>{t2("fithSubIndex")}</Title>
            <p>{t2("fifthParagraph1")}</p>
            <p>{t2("fifthParagraph2")}</p>

            <ul>
              <li>{t2("fifthUl1")}</li>
              <li>{t2("fifthUl2")}</li>
              <li>{t2("fifthUl3")}</li>
              <li>{t2("fifthUl4")}</li>
              <li>{t2("fifthUl5")}</li>
              <li>{t2("fifthUl6")}</li>
              <li>{t2("fifthUl7")}</li>
            </ul>
            <p>{t2("fifthParagraph3")}</p>
            <p>{t2("fifthParagraph4")}</p>
            <p>{t2("fifthParagraph5")}</p>
            <p>{t2("fifthParagraph6")}</p>
          </Col>
        </Row>
      </BasicSection>
      <Divider style={{ margin: 0, backgroundColor: "#bfbfbf" }} />
    </>
  );
};

export default Privacy;
