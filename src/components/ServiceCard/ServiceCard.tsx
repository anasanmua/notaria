import { Button, Col, Row, Tooltip, Typography } from "antd";
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
    <Row className={styles.root}>
      <Col className={styles.icon}>
        <Icon color={"white"} />
      </Col>
      <Col xs={24}>
        <Tooltip title={t(title)}>
          <Typography.Title className={styles.titleEllipsis} level={3}>
            {t(title)}
          </Typography.Title>
        </Tooltip>
      </Col>
      <Col>
        <Tooltip title={t(description)}>
          <Typography.Text className={styles.descriptionEllipsis}>
            {t(description)}
          </Typography.Text>
        </Tooltip>
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
