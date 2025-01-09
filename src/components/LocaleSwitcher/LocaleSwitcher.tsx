import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import Flag from "react-world-flags";
import { Typography } from "antd";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {routing.locales.map((lang) => {
        const flagCode = lang === "en" ? "gb" : lang;
        return (
          <option key={lang} value={lang}>
            {/*<span>
              <Flag code={flagCode} width={20} />{" "}
            </span>*/}
            <Typography.Text> {t(lang)}</Typography.Text>
          </option>
        );
      })}
    </LocaleSwitcherSelect>
  );
}
