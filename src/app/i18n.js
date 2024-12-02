import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";

import i18nConfig from "../../i18nConfig";

export default async function initTranslations(
  locale,
  namespaces,
  i18nInstance,
  resources,
) {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  // Preload resources if not provided
  if (!resources) {
    const loadedResources = {};

    for (const namespace of namespaces) {
      loadedResources[locale] = loadedResources[locale] || {};
      loadedResources[locale][namespace] = (
        await import(`@/../../locales/${locale}/${namespace}.json`)
      ).default;
    }

    resources = loadedResources;
  }

  // Initialize i18next with preloaded or dynamic resources
  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales, // Preload if dynamic
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: (key, options) => i18nInstance.t(key, options) || key, // Fallback to key
  };
}
