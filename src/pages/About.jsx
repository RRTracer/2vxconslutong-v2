import React from "react";
import MarkdownPage from "./MarkdownPage";
import aboutEn from "../content/about.en.md?raw";
import aboutFr from "../content/about.fr.md?raw";
import { useLang, useT } from "../i18n/LanguageProvider";

const About = () => {
  const { lang } = useLang();
  const t = useT();
  const source = lang === "fr" ? aboutFr : aboutEn;
  return <MarkdownPage source={source} title={t("nav.about")} />;
};

export default About;
