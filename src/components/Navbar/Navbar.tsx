"use client";
import { usePathname } from "next/navigation";
import { Anchor, Typography, Row, Col, Button, Drawer } from "antd";
import { Menu, SquareSquare } from "lucide-react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";
import { useTranslations } from "next-intl";
import { scrollToSection } from "@/utils/scroller";
import CallToActionButton from "@/components/CallToActionButton/CallToActionButton";

const NavBar: React.FC = () => {
  const t = useTranslations("general");
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const pathname = usePathname();
  const anchorHidden =
    pathname === "/en" || pathname === "/es" ? "" : styles.anchorHidden;

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  const toggleDrawer = () => {
    setDrawerVisible(!isDrawerVisible);
  };

  return (
    <Row justify="space-between" align="middle" className={styles.root}>
      <Col>
        <Link href="/" aria-label="Home">
          <Row gutter={8} align="middle" className={styles.logoButton}>
            <Col>
              <SquareSquare color="var(--primary)" />
            </Col>
            <Col>
              <Typography>CARLOS RODRÍGUEZ-VIÑA CANCIO</Typography>
            </Col>
          </Row>
        </Link>
      </Col>
      <Col className={classNames(styles.anchorMenu, anchorHidden)}>
        <Anchor
          // @ts-ignore
          onClick={handleAnchorClick}
          bounds={25}
          direction="horizontal"
          items={[
            {
              key: "part-1",
              href: "#about",
              title: t("about"),
            },
            {
              key: "part-2",
              href: "#team",
              title: t("team"),
            },
            {
              key: "part-3",
              href: "#services",
              title: t("services"),
            },
          ]}
        />
      </Col>

      <Col className={styles.contactDropdownArea}>
        <CallToActionButton onClick={() => scrollToSection("contact")}>
          {t("contact")}
        </CallToActionButton>
        <span className={styles.languageSelector}>
          <LocaleSwitcher />
        </span>
      </Col>
      <Col className={styles.burgerIcon}>
        <Menu
          onClick={toggleDrawer}
          style={{ fontSize: "24px", cursor: "pointer" }}
          color="var(--primary)"
        />
      </Col>
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        open={isDrawerVisible}
      >
        <Anchor
          // @ts-ignore
          onClick={handleAnchorClick}
          bounds={25}
          direction="vertical"
          className={styles.marginBottom}
          items={[
            {
              key: "part-1",
              href: "#about",
              title: t("about"),
            },
            {
              key: "part-2",
              href: "#team",
              title: t("team"),
            },
            {
              key: "services",
              href: "#services",
              title: t("services"),
            },
          ]}
        />
        <LocaleSwitcher />
      </Drawer>
    </Row>
  );
};

export default NavBar;
