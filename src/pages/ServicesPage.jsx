import React from "react";
import { Link } from "react-router";
import { useT } from "../i18n/LanguageProvider";

const SERVICES = ["s1", "s2", "s3", "s4", "s5", "s6"];

const ServicesPage = () => {
  const t = useT();
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <p className="page-label">{t("services.label")}</p>
          <h1 className="page-h1">{t("services.title")}</h1>
          <p className="page-sub">{t("services.subtitle")}</p>
        </header>

        <div className="services-list">
          {SERVICES.map((key, i) => (
            <div key={key} className="service-row">
              <span className="service-num">0{i + 1}</span>
              <div className="service-content">
                <h3>{t(`services.${key}.title`)}</h3>
                <p>{t(`services.${key}.body`)}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: "1px solid color-mix(in oklch, var(--color-base-content) 8%, transparent)" }}>
          <Link to="/contact" className="btn-primary">{t("home.cta_contact")}</Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
