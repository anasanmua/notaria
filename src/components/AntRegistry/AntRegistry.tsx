"use client";

import { StyleProvider } from "@ant-design/cssinjs";
import { useState, useEffect } from "react";
import { Skeleton } from "antd";

export default function AntdRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <StyleProvider hashPriority="high">
      {!mounted ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Skeleton />
        </div>
      ) : (
        children
      )}
    </StyleProvider>
  );
}
