import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import Flag from "react-world-flags";
import { Typography } from "antd";

export default function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();

  const options = routing.locales.map((lang) => {
    const flagCode = lang === "en" ? "gb" : lang;
    return {
      value: lang,
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Flag code={flagCode} style={{ width: 20 }} />
          <Typography.Text>{t(lang)}</Typography.Text>
        </span>
      ),
    };
  });

  return <LocaleSwitcherSelect defaultValue={locale} options={options} />;
}
