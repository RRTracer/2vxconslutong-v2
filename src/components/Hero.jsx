import React from "react";
import { useT } from "../i18n/LanguageProvider";

const FACTS = [
  { icon: "🎯", key: "hero.fact1" },
  { icon: "🤝", key: "hero.fact2" },
  { icon: "📈", key: "hero.fact3" },
  { icon: "🔍", key: "hero.fact4" },
];

const Hero = () => {
  const t = useT();

  return (
    <section className="hero-section" aria-labelledby="home-heading">
      <div className="hero-glow"   aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="container">
        <div className="hero-inner">
          {/* ── Left ── */}
          <div>
            <div className="hero-badge">{t("hero.tag")}</div>

            <h1 id="home-heading" className="hero-h1">
              {t("hero.title_line1")}{" "}
              <span className="g">{t("hero.title_accent")}</span>
              <br />
              {t("hero.title_line2")}
            </h1>

            <p className="hero-sub">{t("hero.subtitle")}</p>

            <div className="hero-actions">
              <a className="hero-btn-primary" href="#contact">
                {t("hero.cta")} →
              </a>
              <a className="hero-btn-ghost" href="#services">
                {t("hero.cta_secondary")}
              </a>
            </div>
          </div>

          {/* ── Right (glass card) ── */}
          <div className="hero-card" aria-hidden="true">
            <div className="hero-card-label">{t("hero.card_title")}</div>
            {FACTS.map(({ icon, key }) => (
              <div key={key} className="hero-fact">
                <div className="hero-fact-icon">{icon}</div>
                <span>{t(key)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="hero-stats" aria-label="Key figures">
          {[
            { v: t("hero.stat1_value"), l: t("hero.stat1_label") },
            { v: t("hero.stat2_value"), l: t("hero.stat2_label") },
            { v: t("hero.stat3_value"), l: t("hero.stat3_label") },
          ].map(({ v, l }) => (
            <div key={l}>
              <div className="hero-stat-val">{v}</div>
              <div className="hero-stat-lbl">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
