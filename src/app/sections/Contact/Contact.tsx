"use client";
import BasicSection from "@/components/BasicSection/BasicSection";
import { Col, Row, Typography } from "antd";
import { useEffect } from "react";
import IconText from "@/components/IconText/IconText";
import { Mail, Phone, Map, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const initMap = () => {
      const location = { lat: 40.470164, lng: -3.642483 };

      const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 12,
      });

      // Create an Advanced Marker
      new google.maps.Marker({
        position: location,
        map: map,
        title: "We are here!",
      });
    };

    // Load the Google Maps script dynamically
    const loadScript = (url: string) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        initMap();
      };
    };

    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`,
    );
  }, []);

  return (
    <BasicSection id="part-4" backgroundColor="cream1">
      <Row gutter={64}>
        <Col xs={24}>
          <Typography.Title>Contacto</Typography.Title>
        </Col>
        <Col xs={12}>
          <div id="map" style={{ height: "400px", width: "100%" }}></div>
        </Col>
        <Col xs={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <Typography.Title
                level={3}
                style={{
                  marginTop: "0px",
                }}
              >
                Contacto
              </Typography.Title>
            </Col>
            <Col xs={24}>
              <IconText
                icon={Mail}
                text={"+34 911 23 23 23"}
                type={"secondary"}
              ></IconText>
            </Col>
            <Col xs={24}>
              <IconText
                icon={Phone}
                text={"notaria@gmail.com"}
                type={"secondary"}
              ></IconText>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <Typography.Title level={3}>Dónde estamos</Typography.Title>
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
              ></IconText>
            </Col>
            <Col xs={24}>
              <IconText
                icon={Clock}
                text={
                  <>
                    Lunes a viernes <br /> 09:00 a 14:30F
                  </>
                }
                type={"secondary"}
              ></IconText>
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
        </Col>
      </Row>
    </BasicSection>
  );
};

export default Contact;
