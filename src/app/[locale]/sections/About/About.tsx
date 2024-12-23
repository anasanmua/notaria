"use client";
import BasicSection from "@/components/BasicSection/BasicSection";
import { Col, Row, Typography } from "antd";
import Image from "next/image";
import contract from "../../../../../public/images/contract.jpg";
import { Trophy, BadgeCheck, Archive } from "lucide-react";
import IconText from "@/components/IconText/IconText";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  return (
    <BasicSection backgroundColor="cream2" id="sobre">
      <Row>
        <Col xs={0} sm={6} md={8} lg={10} xl={12}>
          <Image
            priority
            src={contract}
            alt="Description of contract"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Col>
        <Col>
          <Row gutter={50}>
            <Col xs={24} sm={12}>
              <Typography.Title>Sobre</Typography.Title>
              <Typography.Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography.Paragraph>
            </Col>
            <Col xs={24} sm={12}>
              <Row gutter={[0, 16]}>
                <Col xs={24} style={{ paddingTop: "25px" }}>
                  <Typography.Text>{t("subtitle")}</Typography.Text>
                </Col>
                <Col xs={24}>
                  <IconText icon={Trophy} text={t("item1")} />
                </Col>

                <Col xs={24}>
                  <IconText icon={Archive} text={t("item2")} />
                </Col>

                <Col xs={24}>
                  <IconText icon={BadgeCheck} text={t("item3")} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </BasicSection>
  );
};

export default About;
