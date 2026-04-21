import React from "react";
import { useT } from "../i18n/LanguageProvider";

const items = [
  { titleKey: "services.s1.title", bodyKey: "services.s1.body" },
  { titleKey: "services.s2.title", bodyKey: "services.s2.body" },
  { titleKey: "services.s3.title", bodyKey: "services.s3.body" },
];

const Services = () => {
  const t = useT();
  return (
    <section id="services" className="container services">
      <h2 style={{ margin: "0 0 1rem" }}>{t("hero.services")}</h2>
      <div className="services-grid">
        {items.map((s) => (
          <article key={s.titleKey} className="service">
            <h3>{t(s.titleKey)}</h3>
            <p>{t(s.bodyKey)}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
