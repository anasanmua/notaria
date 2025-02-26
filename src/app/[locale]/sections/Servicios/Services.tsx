"use client";
import { Col, Row, Typography } from "antd";
import {
  Archive,
  Briefcase,
  CheckSquare,
  ClipboardList,
  DollarSign,
  FileText,
  Folder,
  Home,
  Landmark,
  PenTool,
  UserCheck,
  Users,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import BasicSection from "@/components/BasicSection/BasicSection";
import styles from "./services.module.css";

const dataServicesTest = [
  {
    icon: Users,
    title: "notarialPowerTitle",
    description: "notarialPowerDescription",
    href: "poderes",
  },
  {
    icon: PenTool,
    title: "testamentaryTitle",
    description: "testamentaryDescription",
    href: "sucesiones",
  },
  {
    icon: CheckSquare,
    title: "marriageContractsTitle",
    description: "marriageContractsDescription",
    href: "matrimonial",
  },
  {
    icon: Home,
    title: "mortgageTitle",
    description: "mortgageDescription",
    href: "hipotecario",
  },
  {
    icon: Archive,
    title: "donationsTitle",
    description: "donationsDescription",
    href: "donaciones",
  },
  {
    icon: FileText,
    title: "realStateTitle",
    description: "realStateDescription",
    href: "inmobiliario",
  },
  {
    icon: Briefcase,
    title: "tradeTitle",
    description: "tradeDescription",
    href: "mercantil",
  },
  {
    icon: Folder,
    title: "nationalityTitle",
    description: "nationalityDescription",
    href: "nacionalidad",
  },
  {
    icon: Landmark,
    title: "policiesTitle",
    description: "policiesDescription",
    href: "polizas",
  },
  {
    icon: ClipboardList,
    title: "ratificationsTitle",
    description: "ratificationsDescription",
    href: "ratificaciones",
  },
  {
    icon: UserCheck,
    title: "manifestationsTitle",
    description: "manifestationsDescription",
    href: "actas",
  },
  {
    icon: DollarSign,
    title: "signatureLegitimationTitle",
    description: "signatureLegitimationDescription",
    href: "legitimacion",
  },
];

const Services = () => {
  return (
    <BasicSection id="services">
      <Typography.Title className={styles.title}>Servicios</Typography.Title>
      <Row gutter={[{ sm: 32 }, { xs: 32, sm: 100 }]}>
        {dataServicesTest.map((element) => (
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
