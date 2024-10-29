import { Button, Col, Row, Typography } from "antd";
import styles from "./service-card.module.css";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.FC;
  title: string;
  description: string;
  href: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  href,
}: ServiceCardProps) => {
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
        <Link href={`servicios/${href}`}>Más información</Link>
      </Col>
    </Row>
  );
};

export default ServiceCard;
