"use client";
import { usePathname } from "next/navigation";
import { Anchor, Typography, Row, Col, Drawer, Grid } from "antd";
import { Menu, SquareSquare, Phone } from "lucide-react";
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
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  const notMainPage =
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
              <Typography>Juan Pérez García</Typography>
            </Col>
          </Row>
        </Link>
      </Col>
      <Col className={classNames(styles.anchorMenu, notMainPage)}>
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
          {isMobile ? <Phone color="var(--primary)" /> : t("contact")}
        </CallToActionButton>
        <span className={styles.languageSelector}>
          <LocaleSwitcher />
        </span>
      </Col>
      <Col className={classNames(styles.burgerIcon, notMainPage)}>
        <Menu onClick={toggleDrawer} />
      </Col>
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        open={isDrawerVisible}
        className={styles.drawer}
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
