import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import Flag from "react-world-flags";
import { Typography } from "antd";
import { ReactNode } from "react";

export type Option = {
  value: string;
  label: ReactNode | JSX.Element;
};

export default function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();

  const TypedFlag = Flag as unknown as React.FC<{
    code: string;
    style?: React.CSSProperties;
  }>;

  const options: Option[] = routing.locales.map((lang) => {
    const flagCode = lang === "en" ? "gb" : lang;
    return {
      value: lang,
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <TypedFlag code={flagCode} style={{ width: 20 }} />
          <Typography.Text>{t(lang)}</Typography.Text>
        </span>
      ),
    };
  });

  return <LocaleSwitcherSelect defaultValue={locale} options={options} />;
}
