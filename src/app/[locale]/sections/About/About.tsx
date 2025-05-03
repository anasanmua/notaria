"use client";
import BasicSection from "@/components/BasicSection/BasicSection";
import { Col, Row } from "antd";
import { Archive, BadgeCheck, Trophy } from "lucide-react";
import IconText from "@/components/IconText/IconText";
import { useTranslations } from "next-intl";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/lib/typography/Text";

const About = (): JSX.Element => {
  const t = useTranslations("About");

  return (
    <BasicSection backgroundColor="cream2" id="about">
      <Row>
        <Col>
          <Row gutter={50}>
            <Col xs={24} sm={12}>
              <Title level={3}>
                Si necesitas los servicios de un notario, es importante que
                tengas en cuenta lo siguiente:
              </Title>
              <Paragraph>
                <ul>
                  <li>En España ejercen cerca de 3.000 notarios</li>
                  <li>
                    Como ciudadano, tienes derecho a elegir libremente el
                    notario que mejor se adapte a tus necesidades.
                  </li>
                  <li>
                    Los aranceles notariales están regulados por ley, lo que
                    asegura tarifas uniformes y transparentes.
                  </li>
                </ul>
              </Paragraph>
            </Col>
            <Col xs={24} sm={12}>
              <Row gutter={[0, 16]}>
                <Col xs={24} style={{ paddingTop: "25px" }}>
                  <Text>{t("subtitle")}</Text>
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
