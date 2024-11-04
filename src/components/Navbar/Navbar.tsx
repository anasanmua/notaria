"use client";
import { usePathname } from "next/navigation";
import { Anchor, Typography, Row, Col, Button } from "antd";
import { SquareSquare } from "lucide-react";
import styles from "./navbar.module.css";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const anchorHidden = pathname === "/" ? "" : styles.anchorHidden;

  const handleAnchorClick = (e) => {
    e.preventDefault();
  };

  return (
    <Row justify="space-around" align="middle" className={styles.root}>
      <Col>
        <Row gutter="8">
          <Col>
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

      <Col className={anchorHidden}>
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
      <Col>
        <ScrollLink to="part-4" smooth={true} duration={500}>
          <Button type="primary">Contacto</Button>
        </ScrollLink>
      </Col>
    </Row>
  );
};

export default NavBar;
