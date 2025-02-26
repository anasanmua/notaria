"use client";
import { Button, Col, Row, Tabs } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import BasicSection from "@/components/BasicSection/BasicSection";
import { data } from "@/utils/data";
import { useTranslations } from "next-intl";

const Service = ({ params }: { params: { servicios: string } }) => {
  const t = useTranslations("Service");
  const servicio = params.servicios;

  const tabArray = data[servicio];
  console.log(tabArray, "hey");
  const tabs = tabArray?.map((item, index) => ({
    key: item.type + index,
    label: t(item.type),
    children: (
      <>
        <Title level={4}>Descripción</Title>
        <Text>{t(item.description)}</Text>
        {item.documents && (
          <>
            <Title level={5}>Documentos necesarios</Title>
            <ul>
              {item.documents.map((doc, idx) => (
                <li key={idx}>{t(doc)}</li>
              ))}
            </ul>
          </>
        )}
      </>
    ),
  }));

  return (
    <>
      <BasicSection backgroundColor="cream1">
        <Row>
          <Col xs={24}>
            {/*TODO This doesnt work*/}
            <Title>{servicio}</Title>
          </Col>
          <Col xs={24}>
            <Tabs type="card" items={tabs} />
          </Col>
          <Col>
            <Button
              style={{ marginTop: "15px" }}
              type="primary"
              href={"/formulario-contacto"}
            >
              Solicitar más Información
            </Button>
          </Col>
        </Row>
      </BasicSection>
    </>
  );
};

export default Service;
