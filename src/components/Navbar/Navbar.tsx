import { Anchor, Typography, Row, Col, Button } from "antd";
import { SquareSquare } from "lucide-react";
import styles from "./navbar.module.css";

const NavBar: React.FC = () => (
  <Row justify="space-around" align="middle" className={styles.root}>
    <Col>
      <Row gutter="8">
        <Col>
          <SquareSquare />
        </Col>
        <Col>
          <Typography>Notaria</Typography>
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
      <Button type="primary">Contacto</Button>
    </Col>
  </Row>
);

export default NavBar;
