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
import { getEmoji } from "@/utils/emojiFunction";

const Service = ({ params }: { params: { servicios: string } }) => {
  const t = useTranslations("Service");
  const t2 = useTranslations("General");
  const servicio = params.servicios;
  const tabArray = data[servicio as keyof DataService];

  const getImage = (servicio: string) => {
    try {
      return require(`@/../public/images/${servicio}.jpg`);
    } catch (error) {
      return require("@/../public/images/poderes.jpg"); // Fallback image
    }
  };

  const imageUrl = getImage(servicio);

  const tabs = tabArray?.map((item: Service) => ({
    key: item.type,
    label: t(item.type),
    children: (
      <Row>
        <Col xs={24} sm={12}>
          <Title level={4}>{t2("description")}</Title>
          <Text>{t(item.description)}</Text>
        </Col>
        {item.documents && (
          <Col xs={24} sm={12}>
            <Title level={4}>{t2("documentsNeeded")}</Title>
            <ul>
              {item.documents.map((doc, idx) => (
                <li key={idx}>
                  <span style={{ marginRight: "10px" }}>
                    {getEmoji(t(doc))}
                  </span>
                  <Text>{t(doc)}</Text>
                </li>
              ))}
            </ul>
          </Col>
        )}
      </Row>
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
