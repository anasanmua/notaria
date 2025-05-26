"use client";
import { Col, Row, Typography } from "antd";
import { Clock, Mail, Map, MapPin, Phone, Info } from "lucide-react";
import IconText from "@/components/IconText/IconText";
import { useTranslations } from "next-intl";

const { Title } = Typography;

const ContactInfo = () => {
  const t = useTranslations("general");

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Title level={3} style={{ marginTop: "0px" }}>
            {t("contact")}
          </Title>
        </Col>
        <Col xs={24}>
          <IconText icon={Phone} text="+34 911 23 23 23" type="secondary" />
        </Col>
        <Col xs={24}>
          <IconText icon={Mail} text="notaria@gmail.com" type="secondary" />
        </Col>
        <Col xs={24}>
          <IconText
            icon={Info}
            text="Formulario de contacto"
            type="secondary"
            href="/formulario-contacto"
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Title level={3}>Dónde estamos</Title>
        </Col>
        <Col xs={24}>
          <IconText
            icon={Map}
            text={
              <>
                C. de Valdetorres de Jarama, 31 <br /> 28043 Madrid, España
              </>
            }
            type={"secondary"}
          />
        </Col>
        <Col xs={24}>
          <IconText
            icon={Clock}
            text={
              <>
                Lunes a viernes <br /> 09:00 a 14:30
              </>
            }
            type={"secondary"}
          />
        </Col>
        <Col xs={24}>
          <IconText
            icon={MapPin}
            text="Navegación por google maps"
            href="https://www.google.com/maps/place/Notarial+P%C3%A9rez+Alvarez/@40.4701286,-3.6425056,16z/data=!3m1!4b1!4m6!3m5!1s0xd422ec20f5ab9fd:0x141beb4e5b18453d!8m2!3d40.4701286!4d-3.6425056!16s%2Fg%2F1hcb491m9?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
            type="secondary"
          />
        </Col>
      </Row>
    </>
  );
};

export default ContactInfo;
