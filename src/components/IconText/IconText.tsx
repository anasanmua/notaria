import { Typography } from "antd";
import styles from "./icon-text.module.css";

interface IconTextProps {
  icon: React.FC;
  text: string;
}

const IconText = ({ icon: Icon, text }: IconTextProps) => {
  return (
    <div className={styles.root}>
      <span className={styles.icon}>
        <Icon color={"var(--white)"} />
      </span>
      <Typography.Text>{text}</Typography.Text>
    </div>
  );
};
export default IconText;
