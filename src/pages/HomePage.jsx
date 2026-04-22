import React from "react";
import { Link } from "react-router";
import logo from "../../asset/logo-sans-fond.png";
import { useT } from "../i18n/LanguageProvider";

const HomePage = () => {
  const t = useT();
  return (
    <div className="home-center">
      <img
        src={logo}
        alt="2VX Consulting"
        className="home-logo"
      />
      <p className="home-name">2VX Consulting</p>
      <p className="home-tagline">{t("home.tagline")}</p>
      <div className="home-actions">
        <Link to="/services" className="btn-primary">
          {t("home.cta_services")}
        </Link>
        <Link to="/contact" className="btn-outline">
          {t("home.cta_contact")}
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
