import React from "react";
import { Button, ButtonProps } from "antd";
import { color } from "@/styles/colors";

const CallToActionButton: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <Button
      style={{
        background: color.secondary,
        borderColor: "var(--brown-3)",
        color: "var(--brown-10)",
      }}
      {...props}
    />
  );
};

export default CallToActionButton;
