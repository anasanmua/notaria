import { Typography } from "antd";
import styles from "./icon-text.module.css";
import classNames from "classnames";
import { ReactNode } from "react";

interface IconTextProps {
  icon: React.FC;
  text: string | ReactNode;
  type: "primary" | "secondary";
}

const IconText = ({ icon: Icon, text, type = "primary" }: IconTextProps) => {
  const color = type === "primary" ? "var(--white)" : "var(--primary)";
  const backgroundColor =
    type === "primary" ? "backgroundColorPrimary" : "backgroundColorSecondary";

  return (
    <div className={styles.root}>
      <span className={classNames(styles.icon, styles[backgroundColor])}>
        <Icon color={color} />
      </span>
      <Typography.Text>{text}</Typography.Text>
    </div>
  );
};
export default IconText;
