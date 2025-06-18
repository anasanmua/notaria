"use client";
import { Col, Row, Tabs, Tag } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import BasicSection from "@/components/BasicSection/BasicSection";
import { data, DataService, Service } from "@/utils/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Head from "next/head";
import { getEmoji } from "@/utils/emojiFunction";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import styles from "./servicios.module.css";
import Paragraph from "antd/lib/typography/Paragraph";
import { capitalizeFirstLetter } from "@/utils/stringUtils";
import CallToActionButton from "@/components/CallToActionButton/CallToActionButton";
import {
  richTextLinksDescription,
  richTextLinksDocuments,
} from "@/utils/rickLinks";

const Services = ({ params }: { params: { selectedService: string } }) => {
  const t = useTranslations("service");
  const t2 = useTranslations("general");
  const selectedService = params.selectedService;
  const tabArray = data[selectedService as keyof DataService];

  const getImage = (selectedService: string) => {
    try {
      return `/images/${selectedService}.jpg`;
    } catch (error) {
      return "/images/poderes.jpg";
    }
  };

  const imageUrl = getImage(selectedService);

  const tabs = tabArray?.map((item: Service) => ({
    key: item.type,
    label: t(item.type),
    children: (
      <Row gutter={24}>
        <Col xs={24} sm={12}>
          <Title level={4}>{t2("description")}</Title>
          <Paragraph style={{ textAlign: "justify" }}>
            {t.rich(item.description, richTextLinksDescription)}
          </Paragraph>
          {item.tax && (
            <Paragraph>
              <Tag
                className={styles.tag}
                icon={<ExclamationCircleOutlined />}
                color="gold"
              >
                {t.rich(item.tax, richTextLinksDescription)}
              </Tag>
            </Paragraph>
          )}
          {item.additionalTitle && (
            <Title level={4}>{t(item.additionalTitle)}</Title>
          )}
          {item.additionalDescription && (
            <Text>{t(item.additionalDescription)}</Text>
          )}
        </Col>
        {item.documents && (
          <Col xs={24} sm={12} className={styles.documentsCard}>
            <Title level={4} className={styles.documentsCardTitle}>
              {t2("documentsNeeded")}
            </Title>
            {item.hasAdditionalDocs && <Text>{t("mortgageWithProperty")}</Text>}
            <ul>
              {item.documents.map((doc, idx) => (
                <li key={idx}>
                  <span style={{ marginRight: "10px" }}>
                    {getEmoji(t(doc))}
                  </span>
                  <Text>{t.rich(doc, richTextLinksDocuments)}</Text>
                </li>
              ))}
            </ul>
            {item.hasAdditionalDocs && (
              <Text>{t("mortgageWithoutProperty")}</Text>
            )}
            <ul>
              {item.additionalDocs?.map((el) => <li key={el}>{t(el)}</li>)}
            </ul>
            <Text italic>
              {item.additionalInfoDoc && t(item.additionalInfoDoc)}
            </Text>
          </Col>
        )}
      </Row>
    ),
  }));

  console.log(tabs, "tabs");
  return (
    <>
      <Head>
        <link rel="preload" as="image" href={imageUrl} />
      </Head>
      <BasicSection backgroundColor="cream1">
        <Row justify="center">
          <Col xs={24} sm={16} className={styles.imageCol}>
            <Image
              className={styles.image}
              src={imageUrl}
              fill
              priority
              alt={selectedService}
              placeholder="blur"
              blurDataURL="/images/contract.jpg"
            />
          </Col>
          <Col xs={24}>
            <Title className={styles.centerText}>
              {capitalizeFirstLetter(selectedService)}
            </Title>
          </Col>
          <Col xs={24}>
            <Tabs
              type="card"
              items={tabs}
              style={{ justifyContent: "start" }}
            />
          </Col>
          <Col className={styles.centerText} xs={24}>
            <CallToActionButton
              className={styles.button}
              href={"/formulario-contacto"}
            >
              {t2("requestMoreInfo")}
            </CallToActionButton>
          </Col>
        </Row>
      </BasicSection>
    </>
  );
};

export default Services;
