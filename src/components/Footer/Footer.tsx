import { Col, Row, Typography } from "antd";
import styles from "./footer.module.css";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <Row className={styles.root} align="bottom">
      <Col xs={12}>
        <Row justify="space-evenly">
          <Col>
            <Typography.Paragraph>Notario 2024</Typography.Paragraph>
          </Col>
          <Col>
            <Typography.Paragraph>Política de Privacidad</Typography.Paragraph>
          </Col>
          <Col>
            <Typography.Paragraph>Términos y condiciones</Typography.Paragraph>
          </Col>
          <Col>
            <Typography.Paragraph>Aviso Legal</Typography.Paragraph>
          </Col>
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
