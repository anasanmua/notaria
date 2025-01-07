"use client";
import { usePathname } from "next/navigation";
import { Anchor, Typography, Row, Col, Button, Drawer } from "antd";
import { Menu, SquareSquare } from "lucide-react";
import styles from "./navbar.module.css";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";

const NavBar: React.FC = () => {
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const pathname = usePathname();
  const anchorHidden =
    pathname === "/en" || pathname === "/es" ? "" : styles.anchorHidden;

  const handleAnchorClick = (e) => {
    e.preventDefault();
  };

  const toggleDrawer = () => {
    setDrawerVisible(!isDrawerVisible);
  };

  return (
    <Row justify="space-between" align="middle" className={styles.root}>
      <Col>
        <Link href="/" aria-label="Home">
          <Row gutter="8" align="middle" className={styles.logoButton}>
            <Col>
              <SquareSquare color="var(--primary)" />
            </Col>
            <Col>
              <Typography>Notaria</Typography>
            </Col>
          </Row>
        </Link>
      </Col>
      <Col className={classNames(styles.anchorMenu, anchorHidden)}>
        <Anchor
          onClick={handleAnchorClick}
          bounds={25}
          direction="horizontal"
          items={[
            {
              key: "part-1",
              href: "#sobre",
              title: "About",
            },
            {
              key: "part-2",
              href: "#equipo",
              title: "Team",
            },
            {
              key: "part-3",
              href: "#servicios",
              title: "Services",
            },
          ]}
        />
      </Col>
      <Col className={styles.contactDropdownArea}>
        <ScrollLink to="part-4" smooth={true} duration={500}>
          <Button type="primary" className={styles.contactButton}>
            Contacto
          </Button>
        </ScrollLink>
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
          onClick={handleAnchorClick}
          bounds={25}
          direction="vertical"
          className={styles.marginBottom}
          items={[
            {
              key: "part-1",
              href: "#sobre",
              title: "About",
            },
            {
              key: "part-2",
              href: "#equipo",
              title: "Team",
            },
            {
              key: "part-3",
              href: "#servicios",
              title: "Services",
            },
          ]}
        />
        <LocaleSwitcher />
      </Drawer>
    </Row>
  );
};

export default NavBar;
