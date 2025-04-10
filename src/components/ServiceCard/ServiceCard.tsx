import {Button, Col, Row, Tooltip, Typography} from "antd";
import styles from "./service-card.module.css";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {LucideIcon} from "lucide-react";

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
    const t2 = useTranslations("General");
    return (
        <Row className={styles.root}>
            <Col className={styles.icon}>
                <Icon color={"white"}/>
            </Col>
            <Col xs={24}>
                <Typography.Title
                    className={styles.titleEllipsis}
                    level={3}
                    ellipsis={{tooltip: t(title)}}
                >
                    {t(title)}
                </Typography.Title>
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
                    <Button>{t2("moreInfo")}</Button>
                </Link>
            </Col>
        </Row>
    );
};

export default ServiceCard;
