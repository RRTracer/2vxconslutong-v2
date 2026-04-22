import React from "react";
import { useT } from "../i18n/LanguageProvider";

const SERVICES = [
  { key: "s1", icon: "🎯" },
  { key: "s2", icon: "🤝" },
  { key: "s3", icon: "📈" },
  { key: "s4", icon: "🔍" },
  { key: "s5", icon: "🚀" },
  { key: "s6", icon: "⚙️" },
];

const Services = () => {
  const t = useT();

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-label">{t("services.label")}</div>
        <h2 className="section-title">{t("services.title")}</h2>
        <p className="section-sub">{t("services.subtitle")}</p>

        <div className="services-grid">
          {SERVICES.map(({ key, icon }) => (
            <article key={key} className="service-card">
              <div className="service-icon" aria-hidden="true">{icon}</div>
              <h3>{t(`services.${key}.title`)}</h3>
              <p>{t(`services.${key}.body`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
