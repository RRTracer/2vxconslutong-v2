import React from "react";
import { useT } from "../i18n/LanguageProvider";

const STEPS = ["step1", "step2", "step3", "step4"];

const Process = () => {
  const t = useT();

  return (
    <section className="section-alt">
      <div className="container">
        <div className="section-label">{t("process.label")}</div>
        <h2 className="section-title">{t("process.title")}</h2>
        <p className="section-sub">{t("process.subtitle")}</p>

        <div className="process-steps">
          <div className="process-connector" aria-hidden="true" />
          {STEPS.map((step, i) => (
            <div key={step} className="process-step">
              <div className="step-num" aria-hidden="true">{i + 1}</div>
              <h3>{t(`process.${step}.title`)}</h3>
              <p>{t(`process.${step}.body`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
