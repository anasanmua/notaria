import BasicSection from "@/components/BasicSection/BasicSection";
import { Col, Row, Typography } from "antd";
import Image from "next/image";
import contract from "@/../public/images/contract.jpg";
import { Trophy, BadgeCheck, Archive } from "lucide-react";
import IconText from "@/components/IconText/IconText";

const About = () => {
  return (
    <BasicSection backgroundColor="cream2" id="part-1">
      <Row>
        <Col xs={24}>
          <Image
            src={contract}
            width={600}
            layout="responsive"
            alt="Description of contract"
          />
        </Col>
        <Col>
          <Row>
            <Col xs={12}>
              <Typography.Title>Sobre</Typography.Title>
              <Typography.Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography.Paragraph>
            </Col>
            <Col xs={12}>
              <Row gutter={[0, 16]}>
                <Col xs={24} style={{ paddingTop: "25px" }}>
                  <Typography.Text>
                    Nos dedicamos a ofrecer servicios notariales de alta
                    calidad, respaldados por años de experiencia y un profundo
                    conocimiento del marco legal español.
                  </Typography.Text>
                </Col>
                <Col xs={24}>
                  <IconText icon={Trophy} text={"Atención personalizada"} />
                </Col>

                <Col xs={24}>
                  <IconText icon={Archive} text={"Rapidez y eficencia"} />
                </Col>

                <Col xs={24}>
                  <IconText icon={BadgeCheck} text={"Amplia experiencia"} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </BasicSection>
  );
};

export default About;
