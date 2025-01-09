import { Button, Col, Row, Typography } from "antd";
import styles from "./service-card.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
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
  const t = useTranslations("Services");
  return (
    <Row>
      <Col className={styles.icon}>
        <Icon color={"white"} />
      </Col>
      <Col xs={24}>
        <Typography.Title level={3}>{t(title)}</Typography.Title>
      </Col>
      <Col>
        <Typography.Text className={styles.description}>
          {t(description)}
        </Typography.Text>
      </Col>
      <Col className={styles.button}>
        <Link href={`servicios/${href}`}>
          <Button>Más información</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default ServiceCard;
