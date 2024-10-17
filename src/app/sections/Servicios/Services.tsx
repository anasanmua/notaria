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
    icon: FileText,
    title: "Redacción de Escrituras",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
  },
  {
    icon: PenTool,
    title: "Legalización de Documentos",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
  },
  {
    icon: CheckSquare,
    title: "Actas Notariales",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
  },
  {
    icon: Home,
    title: "Constitución de Hipotecas",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
  },
  {
    icon: Users,
    title: "Poderes Notariales",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
  },
  {
    icon: Archive,
    title: "Tramitación de Testamentos",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
  },
  {
    icon: Handshake,
    title: "Contrato de Compraventa",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
  },
  {
    icon: Folder,
    title: "Constitución de Sociedades",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
  },
  {
    icon: UserCheck,
    title: "Autorización de Matrimonios",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
  },
  {
    icon: DollarSign,
    title: "Declaraciones Juradas",
    description:
      "Elaboración de escrituras públicas para la compra-venta de inmuebles, herencias, y testamentos de inmuebles, herencias y testamentos de inmuebles, herencias, y testamentos",
  },
];

const Services = () => {
  return (
    <BasicSection id="part-3">
      <Typography.Title className={styles.title}>Servicios</Typography.Title>
      <Row gutter={[15, 100]}>
        {dataServicesTest.map((element) => (
          <Col key={element.title} xs={8}>
            <ServiceCard
              icon={element.icon}
              title={element.title}
              description={element.description}
            />
          </Col>
        ))}
      </Row>
    </BasicSection>
  );
};

export default Services;
