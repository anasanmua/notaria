"use client";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import justice from "@/../public/images/justice.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button, Col, Row } from "antd";
import { Link as ScrollLink } from "react-scroll";
import { scroller } from "react-scroll";
import styles from "./intro.module.css";
import { scrollToSection } from "@/utils/scroller";

const Intro = () => {
  const t = useTranslations("Intro");
  const t2 = useTranslations("General");

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={justice}
        alt="Justice"
        layout="fill"
        objectFit="cover"
        objectPosition="top center"
        priority
      />
      <div className={styles.textOverlay}>
        <div className={styles.textContainer}>
          <Title className={styles.title}>{t("title")}</Title>
          <Text className={styles.description}>{t("description")}</Text>
          <div className={styles.buttonGroup}>
            <Button onClick={() => scrollToSection("services")} type="primary">
              {t2("services")}
            </Button>
            <Button onClick={() => scrollToSection("contact")}>
              {t2("contact")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
