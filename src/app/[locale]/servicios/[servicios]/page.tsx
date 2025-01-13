"use client";
import { Button, Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import BasicSection from "@/components/BasicSection/BasicSection";
import { useTranslations } from "use-intl";

const Service = ({ params }: { params: { servicios: string } }) => {
  const servicio = params.servicios;
  console.log(servicio, "title");

  return (
    <>
      <BasicSection backgroundColor="cream1">
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
              <Col>Documento de identidad del poderdante y del apoderado</Col>
              <Col xs={24}> Partida de nacimiento poderdante,</Col>
              <Col>
                Si hay varios apoderados: indicar si el poder es solidario o
                mancomunado
              </Col>
            </Row>
          </Col>
          <Col>
            <Button style={{ marginTop: "15px" }} href={"/formulario-contacto"}>
              Solicitar más Información
            </Button>
          </Col>
        </Row>
      </BasicSection>
    </>
  );
};

export default Service;
