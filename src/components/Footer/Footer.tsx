import { Col, Row, Typography } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import styles from "./footer.module.css";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("general");

  return (
    <Row className={styles.root} align="bottom" gutter={[0, 20]}>
      <Col xs={24} sm={12}>
        <Row justify="space-evenly" className={styles.stackCols}>
          <Col>
            <Paragraph>Notario 2024</Paragraph>
          </Col>
          <Col>
            <Link href="/cookies" className={styles.link}>
              <Paragraph>{t("cookies")}</Paragraph>
            </Link>
          </Col>
          <Col>
            <Link href="/politica-privacidad" className={styles.link}>
              <Paragraph>{t("privacyPolicy")}</Paragraph>
            </Link>
          </Col>
          <Col>
            <Link href="/aviso-legal" className={styles.link}>
              <Paragraph>{t("legalNotice")}</Paragraph>
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
