import { JSX } from "react";
import { Button, Col, Row, Typography } from "antd";
import BasicSection from "@/components/BasicSection/BasicSection";
import Image from "next/image";
import contract from "@/../public/images/contract.jpg";

const Intro = (): JSX.Element => {
  return (
    <BasicSection backgroundColor="cream1" id="part-1">
      <Row justify="space-between">
        <Col xs={12}>
          <Row gutter={[0, 10]}>
            <Col>
              <Typography.Title>
                Al servicio de su tranquilidad jurídica
              </Typography.Title>
            </Col>
            <Col>
              <Typography.Text>
                Nos dedicamos a ofrecer servicios notariales de alta calidad,
                respaldados por años de experiencia y un profundo conocimiento
                del marco legal español.
              </Typography.Text>
            </Col>
            <Col>
              <Row gutter={10}>
                <Col>
                  <Button type="primary">Equipo</Button>
                </Col>
                <Col>
                  <Button>Contacto</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <Image src={contract} width={600} />
        </Col>
      </Row>
    </BasicSection>
  );
};

export default Intro;
