import { Col, Row, Typography } from "antd";
import IconText from "@/components/IconText/IconText";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import styles from "./worker-card.module.css";

interface WorkerCardProps {
  name: string;
  title: string;
  mail: string;
  phone: string;
}

const WorkerCard = ({ name, title, mail, phone }: WorkerCardProps) => {
  return (
    <Row gutter={[0, 16]}>
      <Row>
        <Col xs={24}>
          <Typography.Title level={3} className={styles.title}>
            {name}
          </Typography.Title>
        </Col>
        <Col xs={24}>{title}</Col>
      </Row>
      <Col xs={24}>
        <IconText icon={Mail} text={mail} type="secondary" />
      </Col>
      <Col xs={24}>
        <IconText icon={Phone} text={phone} type="secondary" />
      </Col>
    </Row>
  );
};

export default WorkerCard;
