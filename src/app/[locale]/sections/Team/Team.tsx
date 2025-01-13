"use client";
import BasicSection from "@/components/BasicSection/BasicSection";
import { Col, Row, Typography } from "antd";
import WorkerCard from "@/components/WorkerCard/WorkerCard";

const dataTeamTest = [
  {
    name: "Don Carlos Rodríguez-Viña Cancio",
    jobTitle: "Notario",
    mail: "john.doe@example.com",
    phone: "+1-555-1234",
  },
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
