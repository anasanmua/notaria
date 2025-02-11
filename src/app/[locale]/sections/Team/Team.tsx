"use client";
import { Col, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Image from "next/image";
import WorkerCard from "@/components/WorkerCard/WorkerCard";
import BasicSection from "@/components/BasicSection/BasicSection";
import justice from "@/../public/images/justice.jpg";
import styles from "./team.module.css";

const dataTeamTest = [
  {
    name: "Alejandro Ortega",
    jobTitle: "Oficial",
    mail: "jane.smith@example.com",
    phone: "+1-555-5678",
  },
  {
    name: "Eva María Andía",
    jobTitle: "Oficial",
    mail: "robert.brown@example.com",
    phone: "+1-555-9101",
  },
  {
    name: "Cecilia Serradilla",
    jobTitle: "Oficial",
    mail: "emily.johnson@example.com",
    phone: "+1-555-1123",
  },
  {
    name: "Cristina Pérez",
    jobTitle: "Oficial",
    mail: "michael.davis@example.com",
    phone: "+1-555-4567",
  },
  {
    name: "Lourdes",
    jobTitle: "Oficial",
    mail: "sarah.wilson@example.com",
    phone: "+1-555-8910",
  },
  {
    name: "Pedro Prieto",
    jobTitle: "Oficial",
    mail: "david.lee@example.com",
    phone: "+1-555-2345",
  },
  {
    name: "Lucía",
    jobTitle: "Oficial",
    mail: "lisa.clark@example.com",
    phone: "+1-555-6789",
  },
  {
    name: "Eva María Moreno",
    jobTitle: "Recepcionista",
    mail: "james.martinez@example.com",
    phone: "+1-555-3456",
  },
];

const Team = () => {
  return (
    <BasicSection backgroundColor="cream1" id="equipo">
      <Row>
        <Col xs={8}>
          <Image
            className={styles.img}
            src={justice}
            priority
            width={400}
            alt="justice image"
          />
        </Col>
        <Col xs={16}>
          <Paragraph>Don Carlos Rodríguez-Viña Cancio</Paragraph>
          <Title level={2}>Notario en Hortaleza</Title>
          <Title level={5}>
            Como notaría en Barcelona queremos formar parte de los momentos
            importantes del día a día de cualquier persona o empresa. Nuestro
            compromiso es resolver de manera ágil y eficiente cualquier tipo de
            trámite notarial que necesites. ¡Hacemos de tus necesidades
            cotidianas nuestros servicios notariales!
          </Title>
        </Col>
      </Row>
      <Typography.Title>Equipo</Typography.Title>
      <Row gutter={[{ sm: 32 }, { xs: 32, sm: 100 }]}>
        {dataTeamTest.map((worker) => (
          <Col key={worker.mail} xs={24} sm={12} md={8}>
            <WorkerCard
              mail={worker.mail}
              name={worker.name}
              phone={worker.phone}
              title={worker.jobTitle}
            />
          </Col>
        ))}
      </Row>
    </BasicSection>
  );
};

export default Team;
