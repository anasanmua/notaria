"use client";
import { Button, Col, Row, Tabs } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import BasicSection from "@/components/BasicSection/BasicSection";
import { data, DataService, Service } from "@/utils/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./servicios.module.css";
import Head from "next/head";

const Service = ({ params }: { params: { servicios: string } }) => {
  const t = useTranslations("Service");
  const servicio = params.servicios;

  const getImage = (servicio: string) => {
    try {
      return require(`@/../public/images/${servicio}.jpg`);
    } catch (error) {
      return require("@/../public/images/poderes.jpg"); // Fallback image
    }
  };

  const imageUrl = getImage(servicio);

  const tabArray = data[servicio as keyof DataService];

  const tabs = tabArray?.map((item: Service) => ({
    key: item.type,
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
      <Head>
        <link rel="preload" as="image" href={imageUrl} />
      </Head>
      <BasicSection backgroundColor="cream1">
        <Row>
          <Col xs={24} className={styles.imageCol}>
            <Image
              className={styles.image}
              src={imageUrl}
              height={600}
              priority
              alt={servicio}
            />
          </Col>
          <Col xs={24}>
            <Title className={styles.title}>
              {servicio.charAt(0).toUpperCase() + servicio.slice(1)}
            </Title>
          </Col>
          <Col xs={24}>
            <Tabs centered type="card" items={tabs} />
          </Col>
          <Col>
            <Button
              className={styles.button}
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
