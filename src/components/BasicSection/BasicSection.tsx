import styles from "./basic-section.module.css";
import classNames from "classnames";

interface BasicSectionProps {
  children: React.ReactNode;
  backgroundColor?: "cream1" | "cream2";
}

const BasicSection = ({ children, backgroundColor }: BasicSectionProps) => {
  const backgroundColorClass =
    backgroundColor === "cream1" ? styles.cream1 : styles.cream2;

  return (
    <div id="part-1" className={classNames(styles.root, backgroundColorClass)}>
      {children}
    </div>
  );
};

export default BasicSection;
