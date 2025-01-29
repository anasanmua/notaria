"use client";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import styles from "./intro.module.css";
import justice from "@/../public/images/justice.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button, Col, Row } from "antd";
import { Link as ScrollLink } from "react-scroll";

const Intro = () => {
  const t = useTranslations("Intro");
  const t2 = useTranslations("General");

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={justice}
        alt="Justice"
        layout="fill"
        objectFit="cover"
        objectPosition="top center"
        priority
      />
      <div className={styles.textOverlay}>
        <Row justify="end" align="top">
          <Col xs={24} sm={12}>
            <Row gutter={[0, 10]}>
              <Col>
                <Title className={styles.title}>{t("title")}</Title>
              </Col>
              <Col xs={20}>
                <Text className={styles.colorWhite}>{t("description")}</Text>
              </Col>
              <Col>
                <Row gutter={10}>
                  <Col>
                    {/*@ts-ignore*/}
                    <ScrollLink to="equipo" smooth={true} duration={500}>
                      {/*@ts-ignore*/}
                      <Button type="primary">{t2("team")}</Button>
                    </ScrollLink>
                  </Col>
                  <Col>
                    {/*@ts-ignore*/}
                    <ScrollLink to="contact" smooth={true} duration={500}>
                      {/*@ts-ignore*/}
                      <Button>{t2("contact")}</Button>
                    </ScrollLink>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Intro;
