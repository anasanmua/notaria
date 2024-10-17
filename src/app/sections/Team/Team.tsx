import BasicSection from "@/components/BasicSection/BasicSection";
import { Col, Row, Typography } from "antd";
import WorkerCard from "@/components/WorkerCard/WorkerCard";

const dataTeamTest = [
  {
    name: "John Doe",
    jobTitle: "Data Analyst",
    mail: "john.doe@example.com",
    phone: "+1-555-1234",
  },
  {
    name: "Jane Smith",
    jobTitle: "Data Engineer",
    mail: "jane.smith@example.com",
    phone: "+1-555-5678",
  },
  {
    name: "Robert Brown",
    jobTitle: "Database Administrator",
    mail: "robert.brown@example.com",
    phone: "+1-555-9101",
  },
  {
    name: "Emily Johnson",
    jobTitle: "Business Analyst",
    mail: "emily.johnson@example.com",
    phone: "+1-555-1123",
  },
  {
    name: "Michael Davis",
    jobTitle: "Data Scientist",
    mail: "michael.davis@example.com",
    phone: "+1-555-4567",
  },
  {
    name: "Sarah Wilson",
    jobTitle: "Data Architect",
    mail: "sarah.wilson@example.com",
    phone: "+1-555-8910",
  },
  {
    name: "David Lee",
    jobTitle: "Machine Learning Engineer",
    mail: "david.lee@example.com",
    phone: "+1-555-2345",
  },
  {
    name: "Lisa Clark",
    jobTitle: "ETL Developer",
    mail: "lisa.clark@example.com",
    phone: "+1-555-6789",
  },
  {
    name: "James Martinez",
    jobTitle: "Data Quality Specialist",
    mail: "james.martinez@example.com",
    phone: "+1-555-3456",
  },
];

const Team = () => {
  return (
    <BasicSection backgroundColor="cream1" id="part-2">
      <Typography.Title>Equipo</Typography.Title>
      <Row gutter={[0, 100]}>
        {dataTeamTest.map((worker) => (
          <Col key={worker.mail} xs={8}>
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
