import React from "react";
import { useT } from "../i18n/LanguageProvider";

const Hero = () => {
  const t = useT();
  return (
    <section className="container hero" aria-labelledby="home-heading">
      <div className="hero-left">
        <span className="tag">{t("hero.tag")}</span>
        <h1 id="home-heading">{t("hero.title")}</h1>
        <p>{t("hero.subtitle")}</p>
        <div className="hero-actions">
          <a className="cta" href="#contact">
            {t("hero.cta")}
          </a>
          <a className="pill" href="#services">
            {t("hero.services")}
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card" aria-hidden>
          <strong>{t("hero.quick_facts")}</strong>
          <ul style={{ marginTop: 8, color: "var(--muted)" }}>
            <li>{t("hero.fact1")}</li>
            <li>{t("hero.fact2")}</li>
            <li>{t("hero.fact3")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
