import { Typography } from "antd";
import styles from "./icon-text.module.css";
import classNames from "classnames";
import { ReactNode } from "react";
import Link from "next/link";

interface IconTextProps {
  icon: React.FC;
  text: string | ReactNode;
  type: "primary" | "secondary";
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
        <Link
          className={styles.link}
          target="_blank"
          href="https://www.google.com/maps/place/Notarial+P%C3%A9rez+Alvarez/@40.4701286,-3.6425056,16z/data=!3m1!4b1!4m6!3m5!1s0xd422ec20f5ab9fd:0x141beb4e5b18453d!8m2!3d40.4701286!4d-3.6425056!16s%2Fg%2F1hcb491m9?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
        >
          {text}
        </Link>
      ) : (
        <Typography.Text>{text}</Typography.Text>
      )}
    </div>
  );
};
export default IconText;
