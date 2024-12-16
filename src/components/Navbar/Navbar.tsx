"use client";
import { usePathname } from "next/navigation";
import { Anchor, Typography, Row, Col, Button, Drawer } from "antd";
import { Menu, SquareSquare } from "lucide-react";
import styles from "./navbar.module.css";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";

const NavBar: React.FC = () => {
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const pathname = usePathname();
  const anchorHidden = pathname === "/" ? "" : styles.anchorHidden;

  const handleAnchorClick = (e) => {
    e.preventDefault();
  };

  const toggleDrawer = () => {
    setDrawerVisible(!isDrawerVisible);
  };

  return (
    <Row justify="space-between" align="middle" className={styles.root}>
      <Col>
        <Row gutter="8" align="middle">
          <Col className={styles.logoButton}>
            <Link href="/" aria-label="Home">
              <SquareSquare color="var(--primary)" />
            </Link>
          </Col>
          <Col>
            <Link href="/" aria-label="Home">
              <Typography>Notaria</Typography>
            </Link>
          </Col>
        </Row>
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
      </Drawer>
    </Row>
  );
};

export default NavBar;
