import styles from "./basic-section.module.css";
import classNames from "classnames";

interface BasicSectionProps {
  children: React.ReactNode;
  id: string;
  backgroundColor?: "cream1" | "cream2";
}

const BasicSection = ({ id, children, backgroundColor }: BasicSectionProps) => {
  const backgroundColorClass =
    backgroundColor === "cream1" ? styles.cream1 : styles.cream2;

  return (
    <div id={id} className={classNames(styles.root, backgroundColorClass)}>
      {children}
    </div>
  );
};

export default BasicSection;
