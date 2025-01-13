"use client";

import { Button, Col, Row, Typography } from "antd";
import BasicSection from "@/components/BasicSection/BasicSection";
import Image from "next/image";
import contract from "../../../../../public/images/contract.jpg";
import styles from "./intro.module.css";
import { useTranslations } from "next-intl";
import { Link as ScrollLink } from "react-scroll";

const Intro = (): JSX.Element => {
  const t = useTranslations("Intro");
  const t2 = useTranslations("General");

  return (
    <BasicSection backgroundColor="cream1">
      <Row justify="space-evenly" className={styles.root}>
        <Col xs={24} sm={12}>
          <Row gutter={[0, 10]}>
            <Col>
              <Typography.Title>{t("title")}</Typography.Title>
            </Col>
            <Col>
              <Typography.Text>{t("description")}</Typography.Text>
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
        <Col xs={0} sm={6} md={8} lg={10} xl={12}>
          <Image
            src={contract}
            alt="contract image"
            priority
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Col>
      </Row>
    </BasicSection>
  );
};

export default Intro;
