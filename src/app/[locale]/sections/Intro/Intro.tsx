"use client";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import justice from "@/../public/images/justice.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "antd";
import styles from "./intro.module.css";
import { scrollToSection } from "@/utils/scroller";
import CallToActionButton from "@/components/CallToActionButton/CallToActionButton";

const Intro = () => {
  const t = useTranslations("intro");
  const t2 = useTranslations("general");

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={justice}
        alt="Justice"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "top center",
        }}
        priority
      />
      <div className={styles.textOverlay}>
        <div className={styles.textContainer}>
          <Title className={styles.title}>{t("title")}</Title>
          <Text className={styles.description}>{t("description")}</Text>
          <div className={styles.buttonGroup}>
            <Button onClick={() => scrollToSection("services")}>
              {t2("services")}
            </Button>
            <CallToActionButton onClick={() => scrollToSection("contact")}>
              {t2("contact")}
            </CallToActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
