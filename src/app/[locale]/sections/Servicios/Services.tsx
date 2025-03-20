"use client";
import { Col, Row, Typography } from "antd";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import BasicSection from "@/components/BasicSection/BasicSection";
import styles from "./services.module.css";
import { dataCardServices } from "@/utils/data";

const Services = () => {
  return (
    <BasicSection id="services">
      <Typography.Title className={styles.title}>Servicios</Typography.Title>
      <Row gutter={[{ sm: 32 }, { xs: 32, sm: 100 }]}>
        {dataCardServices.map((element) => (
          <Col key={element.title} xs={24} sm={12} md={8} lg={6}>
            <ServiceCard
              icon={element.icon}
              title={element.title}
              description={element.description}
              href={element.href}
            />
          </Col>
        ))}
      </Row>
    </BasicSection>
  );
};

export default Services;
