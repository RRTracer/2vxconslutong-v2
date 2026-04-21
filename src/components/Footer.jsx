import React from "react";
import { useT } from "../i18n/LanguageProvider";
import logo from "../../asset/logo-sans-fond.png";

const Footer = () => {
  const t = useT();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src={logo} alt="2vxconsulting" style={{ height: 56 }} />
          <div
            style={{ color: "var(--muted)" }}
            dangerouslySetInnerHTML={{
              __html: t("footer.copy", { year: new Date().getFullYear() }),
            }}
          />
        </div>

        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <nav className="sitemap" aria-label="Footer">
            <a href="/">{t("footer.services")}</a>
            <a href="/about">{t("footer.about")}</a>
            <a href="#contact">{t("footer.contact")}</a>
          </nav>
          <div style={{ color: "var(--muted)" }}>
            contact@2vxconsulting.example
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
