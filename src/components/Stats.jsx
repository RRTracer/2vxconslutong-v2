import React from "react";
import { useT } from "../i18n/LanguageProvider";

const Stats = () => {
  const t = useT();
  const items = [
    { v: t("stats.s1.value"), l: t("stats.s1.label") },
    { v: t("stats.s2.value"), l: t("stats.s2.label") },
    { v: t("stats.s3.value"), l: t("stats.s3.label") },
    { v: t("stats.s4.value"), l: t("stats.s4.label") },
  ];

  return (
    <div className="stats-strip" aria-label="Key figures">
      <div className="container">
        <div className="stats-grid">
          {items.map(({ v, l }) => (
            <div key={l}>
              <div className="stat-value">{v}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
