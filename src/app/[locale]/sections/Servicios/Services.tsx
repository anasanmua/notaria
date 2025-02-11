"use client";
import { Col, Row, Typography } from "antd";
import {
  Archive,
  CheckSquare,
  DollarSign,
  FileText,
  Folder,
  Handshake,
  Home,
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
    href: "poder-notarial",
  },
  {
    icon: PenTool,
    title: "testamentaryTitle",
    description: "testamentaryDescription",
    href: "testamentos",
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
    icon: FileText,
    title: "condominiumDissolutionTitle",
    description: "condominiumDissolutionDescription",
    href: "condominio",
  },
  {
    icon: Archive,
    title: "donationsTitle",
    description: "donationsDescription",
    href: "donaciones",
  },
  {
    icon: Folder,
    title: "nationalityTitle",
    description: "nationalityDescription",
    href: "jura-nacionalidad",
  },
  {
    icon: UserCheck,
    title: "manifestationsTitle",
    description: "manifestationsDescription",
    href: "actas-manifestaciones",
  },
  {
    icon: DollarSign,
    title: "signatureLegitimationTitle",
    description: "signatureLegitimationDescription",
    href: "legitimacion-firma",
  },
  {
    icon: Handshake,
    title: "saleTitle",
    description: "saleDescription",
    href: "compra-ventaAAA",
  },
];

const Services = () => {
  return (
    <BasicSection id="servicios">
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
