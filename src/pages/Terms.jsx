import React from "react";
import MarkdownPage from "./MarkdownPage";
import termsEn from "../content/terms.en.md?raw";
import termsFr from "../content/terms.fr.md?raw";
import { useLang, useT } from "../i18n/LanguageProvider";

const Terms = () => {
  const { lang } = useLang();
  const t = useT();
  const source = lang === "fr" ? termsFr : termsEn;
  return <MarkdownPage source={source} title={t("nav.terms")} />;
};

export default Terms;
