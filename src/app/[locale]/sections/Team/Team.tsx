"use client";
import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Image from "next/image";
import WorkerCard from "@/components/WorkerCard/WorkerCard";
import BasicSection from "@/components/BasicSection/BasicSection";
import justice from "@/../public/images/justice.jpg";
import styles from "./team.module.css";
import IconText from "@/components/IconText/IconText";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { teamData } from "@/utils/data";

const Team = () => {
  return (
    <BasicSection backgroundColor="cream1" id="team">
      <Row gutter={50}>
        <Col xs={24} sm={24} md={8} lg={8}>
          <Image
            className={styles.img}
            src={justice}
            fill
            priority
            alt="justice image"
          />
        </Col>
        <Col xs={24} sm={24} md={16} lg={16}>
          <Paragraph>
            Juan Pérez García – Notario del Ilustre Colegio de Madrid
          </Paragraph>
          <Title level={2}>Notario en Hortaleza</Title>
          <Paragraph>
            Nacido en Madrid, Juan Pérez García cuenta con una sólida
            trayectoria en el ámbito notarial. Licenciado en Derecho por la
            Universidad Complutense de Madrid, inició su preparación para las
            oposiciones a notarías, obteniendo su plaza en el año 2010. Desde
            entonces, ha ejercido en distintas localidades hasta establecerse en
            Madrid, donde dirige su notaría con el compromiso de ofrecer un
            servicio cercano, eficiente y basado en la máxima seguridad
            jurídica.
          </Paragraph>
          <span style={{ display: "grid", gap: "16px" }}>
            <IconText
              icon={Mail}
              text={"notaria@notariaperezgarcia.com"}
              type={"secondary"}
            />
            <IconText
              icon={Phone}
              text={"+34 91 123 45 67"}
              type={"secondary"}
            />
          </span>
        </Col>
      </Row>
      <Title>Nuestro equipo</Title>
      <Paragraph>
        En nuestra notaría contamos con un equipo de profesionales altamente
        cualificados a tu disposición.
      </Paragraph>
      <Row gutter={[{ sm: 32 }, { xs: 32, sm: 100 }]}>
        {teamData.map((worker) => (
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
