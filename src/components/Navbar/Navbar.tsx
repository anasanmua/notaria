"use client";
import { Anchor, Typography, Row, Col, Button } from "antd";
import { SquareSquare } from "lucide-react";
import styles from "./navbar.module.css";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <Row justify="space-around" align="middle" className={styles.root}>
      <Col>
        <Row gutter="8">
          <Col>
            <Link href="/" aria-label="Home">
              <SquareSquare />
            </Link>
          </Col>
          <Col>
            <Link href="/" aria-label="Home">
              <Typography>Notaria</Typography>
            </Link>
          </Col>
        </Row>
      </Col>
      <Col>
        {/*add some spacing between anchor elements*/}
        <Anchor
          bounds={25}
          direction="horizontal"
          items={[
            {
              key: "part-1",
              href: "#part-1",
              title: "Part 1",
            },
            {
              key: "part-2",
              href: "#part-2",
              title: "Part 2",
            },
            {
              key: "part-3",
              href: "#part-3",
              title: "Part 3",
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
