import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import logo from "../../asset/logo-sans-fond.png";
import { useLang, useT } from "../i18n/LanguageProvider";

const NavBar = () => {
  const location = useLocation();
  const { lang, setLang } = useLang();
  const t = useT();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("site-theme") || "light"; } catch { return "light"; }
  });

  /* Sync data-theme attribute — DaisyUI reads this */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("site-theme", theme); } catch { /* ignore */ }
  }, [theme]);

  /* Close mobile menu on route change */
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const toggleLang  = () => setLang((prev) => (prev === "en" ? "fr" : "en"));

  return (
    <header className="site-nav">
      <div className="container nav-inner">

        {/* Brand */}
        <Link to="/" className="nav-brand" aria-label="2VX Consulting — accueil">
          <img src={logo} alt="2VX Consulting" />
          <div className="nav-brand-text">
            <strong>2VX Consulting</strong>
            <small>Motorsport &amp; Brand Strategy</small>
          </div>
        </Link>

        {/* Mobile toggle */}
        <button
          className="nav-toggle"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMobileOpen((s) => !s)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

        {/* Links */}
        <nav aria-label="Navigation principale">
          <div className={`nav-links${mobileOpen ? " open" : ""}`}>
            <Link className="nav-a" to="/services">{t("nav.services")}</Link>
            <Link className="nav-a" to="/about">{t("nav.about")}</Link>
            <Link className="nav-a" to="/contact">{t("nav.contact")}</Link>

            <span className="nav-sep" aria-hidden="true" />

            <Link className="nav-cta" to="/contact">{t("nav.cta")}</Link>

            <button className="nav-pill" onClick={toggleTheme} title="Toggle theme">
              {theme === "light" ? t("nav.theme_dark") : t("nav.theme_light")}
            </button>

            <button
              className="nav-pill"
              onClick={toggleLang}
              aria-label={lang === "en" ? "Passer en français" : "Switch to English"}
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
          </div>
        </nav>

      </div>
    </header>
  );
};

export default NavBar;
