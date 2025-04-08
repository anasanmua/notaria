"use client";
import { Button, Col, Row, Tabs, Tag } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import BasicSection from "@/components/BasicSection/BasicSection";
import { data, DataService, Service } from "@/utils/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Head from "next/head";
import { getEmoji } from "@/utils/emojiFunction";
import Link from "next/link";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import styles from "./servicios.module.css";
import Paragraph from "antd/lib/typography/Paragraph";

const Services = ({ params }: { params: { paramService: string } }) => {
  const t = useTranslations("Service");
  const t2 = useTranslations("General");
  const selectedService = params.servicios;
  const tabArray = data[selectedService as keyof DataService];

  const getImage = (selectedService: string) => {
    try {
      return require(`@/../public/images/${selectedService}.jpg`);
    } catch (error) {
      return require("@/../public/images/poderes.jpg"); // Fallback image
    }
  };
  console.log(params)
  console.log(selectedService)

  const imageUrl = getImage(selectedService);

  const tabs = tabArray?.map((item: Service) => ({
    key: item.type,
    label: t(item.type),
    children: (
      <Row>
        <Col xs={24} sm={12}>
          <Title level={4}>{t2("description")}</Title>
          <Paragraph style={{ textAlign: "justify" }}>
            {t.rich(item.description, {
              registroCivil: (chunks) => (
                <Link
                  target="_blank"
                  href="https://sede.mjusticia.gob.es/es/tramites/certificado-nacimiento"
                >
                  {chunks}
                </Link>
              ),
              colegioNotarial: (chunks) => (
                <Link
                  target="_blank"
                  href="https://madrid.notariado.org/portal/legalizacion-y-apostillas"
                >
                  {chunks}
                </Link>
              ),
              ministerioAsuntos: (chunks) => (
                <Link
                  target="_blank"
                  href="https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Legalizaciones/Servicio-de-legalizaciones.aspx"
                >
                  {chunks}
                </Link>
              ),
              impuestoSucesiones: (chunks) => (
                <Link
                  target="_blank"
                  href="https://www.comunidad.madrid/servicios/atencion-contribuyente/impuesto-sucesiones"
                >
                  {chunks}
                </Link>
              ),
              patrimoniales: (chunks) => (
                <Link target="_blank" href="https://google.com">
                  {chunks}
                </Link>
              ),
              terrenos: (chunks) => (
                <Link
                  target="_blank"
                  href="https://agenciatributaria.madrid.es/portales/contribuyente/es/Tramites/Plusvalia-Autoliquidacion/?vgnextoid=6258ef82e1bed010VgnVCM1000000b205a0aRCRD&vgnextchannel=97d608f9be116810VgnVCM1000001d4a900aRCRD"
                >
                  {chunks}
                </Link>
              ),
              donaciones: (chunks) => (
                <Link
                  target="_blank"
                  href="https://www.comunidad.madrid/servicios/atencion-contribuyente/donaciones"
                >
                  {chunks}
                </Link>
              ),
              actos: (chunks) => (
                <Link href="https://www.comunidad.madrid/servicios/atencion-contribuyente/actos-juridicos-documentados">
                  {chunks}
                </Link>
              ),
              societarias: (chunks) => (
                <Link
                  target="_blank"
                  href="https://www.comunidad.madrid/servicios/atencion-contribuyente/operaciones-societarias"
                >
                  {chunks}
                </Link>
              ),
            })}
          </Paragraph>
          {item.tax && (
            <Paragraph>
              <Tag
                className={styles.tag}
                icon={<ExclamationCircleOutlined />}
                color="gold"
              >
                {t.rich(item.tax, {
                  registroCivil: (chunks) => (
                    <Link
                      target="_blank"
                      href="https://sede.mjusticia.gob.es/es/tramites/certificado-nacimiento"
                    >
                      {chunks}
                    </Link>
                  ),
                  colegioNotarial: (chunks) => (
                    <Link
                      target="_blank"
                      href="https://madrid.notariado.org/portal/expedientes-matrimoniales"
                    >
                      {chunks}
                    </Link>
                  ),
                  ministerioAsuntos: (chunks) => (
                    <Link
                      target="_blank"
                      href="https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Legalizaciones/Servicio-de-legalizaciones.aspx"
                    >
                      {chunks}
                    </Link>
                  ),
                  impuestoSucesiones: (chunks) => (
                    <Link
                      target="_blank"
                      href="https://www.comunidad.madrid/servicios/atencion-contribuyente/impuesto-sucesiones"
                    >
                      {chunks}
                    </Link>
                  ),
                  patrimoniales: (chunks) => (
                    <Link target="_blank" href="https://google.com">
                      {chunks}
                    </Link>
                  ),
                  terrenos: (chunks) => (
                    <Link
                      target="_blank"
                      href="https://agenciatributaria.madrid.es/portales/contribuyente/es/Tramites/Plusvalia-Autoliquidacion/?vgnextoid=6258ef82e1bed010VgnVCM1000000b205a0aRCRD&vgnextchannel=97d608f9be116810VgnVCM1000001d4a900aRCRD"
                    >
                      {chunks}
                    </Link>
                  ),
                  donaciones: (chunks) => (
                    <Link
                      target="_blank"
                      href="https://www.comunidad.madrid/servicios/atencion-contribuyente/donaciones"
                    >
                      {chunks}
                    </Link>
                  ),
                  actos: (chunks) => (
                    <Link href="https://www.comunidad.madrid/servicios/atencion-contribuyente/actos-juridicos-documentados">
                      {chunks}
                    </Link>
                  ),
                  societarias: (chunks) => (
                    <Link
                      target="_blank"
                      href="https://www.comunidad.madrid/servicios/atencion-contribuyente/operaciones-societarias"
                    >
                      {chunks}
                    </Link>
                  ),
                })}
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
          <Col xs={24} sm={12}>
            <Title level={4}>{t2("documentsNeeded")}</Title>
            {item.hasAdditionalDocs && <Text>{t("mortgageWithProperty")}</Text>}
            <ul>
              {item.documents.map((doc, idx) => (
                <li key={idx}>
                  <span style={{ marginRight: "10px" }}>
                    {getEmoji(t(doc))}
                  </span>
                  <Text>
                    {t.rich(doc, {
                      empadronamiento: (chunks) => (
                        <Link
                          target="_blank"
                          href="https://sede.madrid.es/portal/site/tramites/menuitem.62876cb64654a55e2dbd7003a8a409a0/?vgnextoid=23ccdd9d6baed010VgnVCM2000000c205a0aRCRD&vgnextchannel=5388a38813180210VgnVCM100000c90da8c0RCRD&vgnextfmt=default"
                        >
                          {chunks}
                        </Link>
                      ),
                      defuncion: (chunks) => (
                        <Link
                          target="_blank"
                          href="https://sede.mjusticia.gob.es/es/tramites/certificado-defuncion"
                        >
                          {chunks}
                        </Link>
                      ),
                      matrimonio: (chunks) => (
                        <Link
                          target="_blank"
                          href="https://sede.mjusticia.gob.es/es/tramites/certificado-matrimonio"
                        >
                          {chunks}
                        </Link>
                      ),
                      voluntades: (chunks) => (
                        <Link
                          target="_blank"
                          href="https://sede.mjusticia.gob.es/es/tramites/certificado-actos-ultima"
                        >
                          {chunks}
                        </Link>
                      ),
                      fallecimiento: (chunks) => (
                        <Link
                          target="_blank"
                          href="https://www.mjusticia.gob.es/es/ciudadania/tramite?k=solicitud-certificado-contratos-seguros-cobertura-fallecimiento-online"
                        >
                          {chunks}
                        </Link>
                      ),
                      partidas: (chunks) => (
                        <Link
                          target="_blank"
                          href="https://sede.mjusticia.gob.es/es/tramites/certificado-nacimiento"
                        >
                          {chunks}
                        </Link>
                      ),
                    })}
                  </Text>
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
              alt={selectedService}
            />
          </Col>
          <Col xs={24}>
            <Title className={styles.centerText}>
              {selectedService.charAt(0).toUpperCase() + selectedService.slice(1)}
            </Title>
          </Col>
          <Col xs={24}>
            <Tabs centered type="card" items={tabs} />
          </Col>
          <Col className={styles.centerText} xs={24}>
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

export default Services;
