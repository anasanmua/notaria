"use client";
import { Col, Row, Typography } from "antd";
import styles from "./footer.module.css";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <Row className={styles.root} align="bottom">
      <Col xs={12}>
        <Row justify="space-evenly">
          <Col>
            <Typography.Paragraph>Notario 2024</Typography.Paragraph>
          </Col>
          <Link href="/cookies">
            <Col>
              <Typography.Paragraph>Cookies</Typography.Paragraph>
            </Col>
          </Link>
          <Link href="/politica-privacidad">
            <Col>
              <Typography.Paragraph>
                Términos y condiciones
              </Typography.Paragraph>
            </Col>
          </Link>
          <Link href="/aviso-legal">
            <Col>
              <Typography.Paragraph>Aviso Legal</Typography.Paragraph>
            </Col>
          </Link>
        </Row>
      </Col>
      <Col xs={12}>
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
