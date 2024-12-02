import Intro from "./sections/Intro/Intro";
import About from "./sections/About/About";
import Team from "./sections/Team/Team";
import Services from "./sections/Servicios/Services";
import initTranslations from "../i18n";
import TranslationsProvider from "../../components/TranslationsProvider";
const i18nNamespaces = ["default", "common"];

export default async function Home({ params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <Intro />
      <About />
      <Team />
      <Services />
    </TranslationsProvider>
  );
}
