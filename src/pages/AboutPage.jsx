import React from "react";
import { Link } from "react-router";
import { useT } from "../i18n/LanguageProvider";

const VALUES  = ["v1", "v2", "v3", "v4"];
const PROCESS = ["step1", "step2", "step3", "step4"];

const AboutPage = () => {
  const t = useT();
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <p className="page-label">{t("about.label")}</p>
          <h1 className="page-h1">{t("about.title")}</h1>
          <p className="page-sub">{t("about.subtitle")}</p>
        </header>

        <div className="about-body">

          {/* Introduction */}
          <section className="about-intro">
            <p>{t("about.intro1")}</p>
            <p>{t("about.intro2")}</p>
          </section>

          {/* Values */}
          <section>
            <h2 className="section-h2">{t("about.values_title")}</h2>
            <div className="values-list">
              {VALUES.map((key) => (
                <div key={key} className="value-item">
                  <h3>{t(`about.${key}.title`)}</h3>
                  <p>{t(`about.${key}.body`)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="section-h2">{t("about.process_title")}</h2>
            <div className="process-list">
              {PROCESS.map((step, i) => (
                <div key={step} className="process-row">
                  <div>
                    <div className="process-num-box">{i + 1}</div>
                  </div>
                  <div>
                    <h3>{t(`about.${step}.title`)}</h3>
                    <p>{t(`about.${step}.body`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="about-cta">
            <p>{t("about.cta_text")}</p>
            <Link to="/contact" className="btn-primary" style={{ whiteSpace: "nowrap" }}>
              {t("about.cta_btn")}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
