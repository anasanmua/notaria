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
    title: "Legalización de Documentos",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
    href: "poder-notarial",
  },
  {
    icon: CheckSquare,
    title: "Actas Notariales",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
    href: "poder-notarial",
  },
  {
    icon: Home,
    title: "Constitución de Hipotecas",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
    href: "poder-notarial",
  },
  {
    icon: FileText,
    title: "Redacción de Escrituras",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
    href: "poder-notarial",
  },
  {
    icon: Archive,
    title: "Tramitación de Testamentos",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
    href: "poder-notarial",
  },
  {
    icon: Handshake,
    title: "Contrato de Compraventa",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
    href: "poder-notarial",
  },
  {
    icon: Folder,
    title: "Constitución de Sociedades",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
    href: "poder-notarial",
  },
  {
    icon: UserCheck,
    title: "Autorización de Matrimonios",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
    href: "poder-notarial",
  },
  {
    icon: DollarSign,
    title: "Declaraciones Juradas",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
    href: "poder-notarial",
  },
];

const Services = () => {
  return (
    <BasicSection id="servicios">
      <Typography.Title className={styles.title}>Servicios</Typography.Title>
      <Row gutter={[{ sm: 32 }, { xs: 32, sm: 100 }]}>
        {dataServicesTest.map((element) => (
          <Col key={element.title} xs={24} sm={12} md={8}>
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
