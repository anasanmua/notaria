import { Col, Row } from "antd";
import BasicSection from "@/components/BasicSection/BasicSection";
import ContactMap from "./ContactMap";
import ContactInfo from "@/app/[locale]/sections/Contact/ContactInfo";
import ContactTitle from "@/app/[locale]/sections/Contact/ContactTitle";

const Contact = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <BasicSection id="part-4" backgroundColor="cream1">
      <Row gutter={[{ sm: 64 }, { xs: 32 }]}>
        <Col xs={24} sm={24}>
          <ContactTitle />
        </Col>
        <Col xs={24} sm={12}>
          <ContactMap apiKey={apiKey!} />
        </Col>
        <Col xs={24} sm={12}>
          <ContactInfo />
        </Col>
      </Row>
    </BasicSection>
  );
};

export default Contact;
