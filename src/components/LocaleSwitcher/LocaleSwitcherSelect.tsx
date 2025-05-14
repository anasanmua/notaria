"use client";

import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { Select } from "antd";

type Option = {
  label: ReactNode;
  value: string;
};

type Props = {
  defaultValue: string;
  options: Option;
};

export default function LocaleSwitcherSelect({ defaultValue, options }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: string) {
    const nextLocale = event as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <label>
      <Select
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
        options={options}
      />
    </label>
  );
}
