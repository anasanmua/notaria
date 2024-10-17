import { Button, Col, Row, Typography } from "antd";
import styles from "./service-card.module.css";

interface ServiceCardProps {
  icon: React.FC;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Row>
      <Col className={styles.icon}>
        <Icon color={"white"} />
      </Col>
      <Col xs={24}>
        <Typography.Title level={3}>{title}</Typography.Title>
      </Col>
      <Col>
        <Typography.Text className={styles.description}>
          {description}
        </Typography.Text>
      </Col>
      <Col className={styles.button}>
        <Button>Más información</Button>
      </Col>
    </Row>
  );
};

export default ServiceCard;
