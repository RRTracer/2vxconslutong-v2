import React from "react";
import { Link } from "react-router";
import logo from "../../asset/logo-sans-fond.png";
import { useT } from "../i18n/LanguageProvider";

const Footer = () => {
  const t    = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">

        <Link to="/" className="footer-brand" aria-label="Accueil">
          <img src={logo} alt="2VX Consulting" />
          <span>2VX Consulting</span>
        </Link>

        <nav className="footer-links" aria-label="Footer">
          <Link className="footer-a" to="/services">{t("nav.services")}</Link>
          <Link className="footer-a" to="/about">{t("nav.about")}</Link>
          <Link className="footer-a" to="/contact">{t("nav.contact")}</Link>
          <Link className="footer-a" to="/terms">{t("footer.terms")}</Link>
        </nav>

        <span className="footer-copy">{t("footer.copy", { year })}</span>
      </div>
    </footer>
  );
};

export default Footer;
