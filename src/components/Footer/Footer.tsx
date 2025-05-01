"use client";
import { Col, Row, Typography } from "antd";
import styles from "./footer.module.css";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("General");

  return (
    <Row className={styles.root} align="bottom" gutter={[0, 20]}>
      <Col xs={24} sm={12}>
        <Row justify="space-evenly" className={styles.stackCols}>
          <Col>
            <Typography.Paragraph>Notario 2024</Typography.Paragraph>
          </Col>
          <Col>
            <Link href="/cookies">
              <Typography.Paragraph>Cookies</Typography.Paragraph>
            </Link>
          </Col>
          <Col>
            <Link href="/politica-privacidad">
              <Typography.Paragraph>{t("privacyPolicy")}</Typography.Paragraph>
            </Link>
          </Col>
          <Col>
            <Link href="/aviso-legal">
              <Typography.Paragraph>{t("legalNotice")}</Typography.Paragraph>
            </Link>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={12}>
        <Row justify="center" gutter={[15, 0]}>
          <Col className={styles.icon}>
            <Instagram />
          </Col>
          <Col className={styles.icon}>
            <Linkedin />
          </Col>
          <Col className={styles.icon}>
            <Facebook />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;
