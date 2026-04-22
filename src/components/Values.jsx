import React from "react";
import { useT } from "../i18n/LanguageProvider";

const VALUES = [
  { key: "v1", icon: "⭐" },
  { key: "v2", icon: "💡" },
  { key: "v3", icon: "📊" },
  { key: "v4", icon: "🔒" },
];

const Values = () => {
  const t = useT();

  return (
    <section className="section-dark">
      <div className="container">
        <div className="section-label">{t("values.label")}</div>
        <h2 className="section-title">{t("values.title")}</h2>
        <p className="section-sub">{t("values.subtitle")}</p>

        <div className="values-grid">
          {VALUES.map(({ key, icon }) => (
            <div key={key} className="value-card">
              <div className="value-icon" aria-hidden="true">{icon}</div>
              <div>
                <h3>{t(`values.${key}.title`)}</h3>
                <p>{t(`values.${key}.body`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
