import { Typography } from "antd";
import styles from "./icon-text.module.css";
import classNames from "classnames";
import { ReactNode } from "react";
import Link from "next/link";

interface IconTextProps {
  icon: React.FC | React.FC<{ color: string }>;
  text: string | ReactNode;
  type?: "primary" | "secondary";
  href?: string;
}

const IconText = ({
  icon: Icon,
  text,
  type = "primary",
  href,
}: IconTextProps) => {
  const color = type === "primary" ? "var(--white)" : "var(--primary)";
  const backgroundColor =
    type === "primary" ? "backgroundColorPrimary" : "backgroundColorSecondary";

  return (
    <div className={styles.root}>
      <span className={classNames(styles.icon, styles[backgroundColor])}>
        <Icon color={color} />
      </span>
      {href ? (
        <Link className={styles.link} target="_blank" href={href}>
          {text}
        </Link>
      ) : (
        <Typography.Text>{text}</Typography.Text>
      )}
    </div>
  );
};
export default IconText;
