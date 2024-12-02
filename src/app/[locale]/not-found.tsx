"use client";
import Link from "next/link";
import Image from "next/image";
import tv from "../../../public/images/tv.jpg";
import { Button, Col, Divider, Row, Typography } from "antd";
import BasicSection from "@/components/BasicSection/BasicSection";

export default function NotFound() {
  return (
    <>
      <BasicSection backgroundColor="cream1">
        <Row
          gutter={[0, 40]}
          style={{ textAlign: "center", paddingTop: "50px" }}
          align="middle"
        >
          <Col xs={12}>
            <Row>
              <Col xs={24}>
                <Typography.Title level={2}>
                  Lo sentimos, esta página no existe... pero el botón de abajo
                  sí funciona. 😉
                </Typography.Title>
              </Col>
              <Col xs={24}>
                <Link href="/Users/ana.san.modo/Desktop/PersonalProjects/notaria/public">
                  <Button type="primary">Volver al inicio</Button>
                </Link>
              </Col>
            </Row>
          </Col>

          <Col xs={12}>
            <Image src={tv} priority width={400} alt="tv with no image" />
          </Col>
        </Row>
      </BasicSection>
      <Divider style={{ margin: 0, backgroundColor: "#bfbfbf" }} />
    </>
  );
}
