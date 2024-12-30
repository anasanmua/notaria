// Service.tsx
"use client";
import { Button, Col, Row, Typography } from "antd";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BasicSection from "@/components/BasicSection/BasicSection";
import contract from "../../../../../public/images/contract.jpg";
import Image from "next/image";
import styles from "./servicios.module.css";

interface ServiceProps {
  title: string;
  description: string;
  icon?: React.FC;
}

const Service = async ({
  params,
}: {
  params: Promise<{ servicios: string }>;
}) => {
  const servicios = (await params).servicios;
  console.log(servicios, "title");

  return (
    <>
      <BasicSection backgroundColor="cream1">
        <Row
          justify="space-between"
          className={styles.root}
          gutter={{ xs: 10, sm: 50, md: 75, lg: 100 }}
        >
          <Col xs={0} sm={6} md={8} lg={10} xl={12}>
            <Image
              src={contract}
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="contract image"
              priority
            />
          </Col>
          <Col xs={24} sm={12}>
            <Row gutter={[0, 10]}>
              <Col>
                HOLAAAAHOLAAAAHOLAAAAHOLAAAAHOLAAAAHOLAAAA
                <Typography.Title>TestTitle</Typography.Title>
              </Col>
              <Col>
                <Typography.Paragraph>TestDescription </Typography.Paragraph>
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
