"use client";
import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import BasicSection from "@/components/BasicSection/BasicSection";
import contract from "../../../../../public/images/contract.jpg";
import Image from "next/image";
import styles from "./servicios.module.css";
import { useTranslations } from "use-intl";

const Service = ({ params }: { params: { servicios: string } }) => {
  const servicio = params.servicios;
  console.log(servicio, "title");
  const t = useTranslations(servicio);

  return (
    <>
      <BasicSection backgroundColor="cream1">
        {/* <Row
          justify="space-between"
          className={styles.root}
          // gutter={{ xs: 10, sm: 50, md: 75, lg: 100 }}
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
          <Col>
            <Row>
              <Col xs={12}>
                <Title>PODERES</Title>
              </Col>
              <Col>
                <Text>
                  Faculta a un tercero para que pueda actuar en tu nombre.
                </Text>
              </Col>
              <Col>
                <Text>Tipos</Text>
                <Row>
                  <Col>General</Col>
                  <Col>
                    Poder amplio para que puedan representarte en la mayoría de
                    negocios jurídicos
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row> */}
        <Row>
          <Col xs={24}>
            <Title>PODERES</Title>
          </Col>
          <Col xs={24}>
            <Text>
              Faculta a un tercero para que pueda actuar en tu nombre.
            </Text>
          </Col>
          <Col xs={24}>
            <Text>Tipos</Text>
            <Row>
              <Col xs={24}>General</Col>
              <Col>
                Poder amplio para que puedan representarte en la mayoría de
                negocios jurídicos
              </Col>
              <Col xs={24}>Documentos</Col>
              <Col>"Documento de identidad del poderdante y del apoderado"</Col>
              <Col xs={24}> "Partida de nacimiento poderdante",</Col>
              <Col>
                "Si hay varios apoderados: indicar si el poder es solidario o
                mancomunado"
              </Col>
            </Row>
          </Col>
        </Row>
      </BasicSection>
    </>
  );
};

export default Service;
