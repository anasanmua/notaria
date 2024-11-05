"use client";
import { Button, Col, Row, Typography } from "antd";
import BasicSection from "@/components/BasicSection/BasicSection";
import contract from "@/../public/images/contract.jpg";
import Image from "next/image";
import styles from "./servicios.module.css";

const Service = () => {
  return (
    <>
      <BasicSection backgroundColor="cream1">
        <Row justify="space-between" className={styles.root}>
          <Col>
            <Image src={contract} width={600} alt="contract image" priority />
          </Col>
          <Col xs={12}>
            <Row gutter={[0, 10]}>
              <Col>
                <Typography.Title>Poder notarial</Typography.Title>
              </Col>
              <Col>
                <Typography.Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography.Paragraph>
              </Col>
              <Col>
                <Row gutter={10}>
                  <Col>
                    <Button type="primary">Equipo</Button>
                  </Col>
                  <Col>
                    <Button>Contacto</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </BasicSection>
      <BasicSection backgroundColor="cream2">
        <Row>
          <Col xs={12}>
            <Typography.Title>Documentación</Typography.Title>
          </Col>
          <Col xs={12}>
            <Row gutter={[0, 10]}>
              <Col>
                <Typography.Title>Poder notarial</Typography.Title>
              </Col>
              <Col>
                <Typography.Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography.Paragraph>
              </Col>
              <Col>
                <Row gutter={10}>
                  <Col>
                    <Button type="primary">Equipo</Button>
                  </Col>
                  <Col>
                    <Button>Contacto</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </BasicSection>
      <BasicSection backgroundColor="cream1">
        <Row>
          <Col xs={12}>
            <Typography.Title>Proceso</Typography.Title>
          </Col>
          <Col xs={12}>
            <Row gutter={[0, 10]}>
              <Col>
                <Typography.Title>Poder notarial</Typography.Title>
              </Col>
              <Col>
                <Typography.Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography.Paragraph>
              </Col>
              <Col>
                <Row gutter={10}>
                  <Col>
                    <Button type="primary">Equipo</Button>
                  </Col>
                  <Col>
                    <Button>Contacto</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </BasicSection>
    </>
  );
};

export default Service;
