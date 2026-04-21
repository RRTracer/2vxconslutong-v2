import React, { useEffect, useState } from "react";
import logo from "../../asset/logo-sans-fond.png";
import { useLang, useT } from "../i18n/LanguageProvider";

const NavBar = () => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("site-theme") || "light";
    } catch (e) {
      return "light";
    }
  });
  const { lang, setLang } = useLang();
  const t = useT();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("theme-light", "theme-dark");
    document.documentElement.classList.add(`theme-${theme}`);
    try {
      localStorage.setItem("site-theme", theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const toggleLang = () => setLang((l) => (l === "en" ? "fr" : "en"));

  const toggleMobile = () => setMobileOpen((s) => !s);

  return (
    <header className="container navbar" role="banner">
      <div
        className="nav-left"
        style={{ display: "flex", alignItems: "center", gap: 20 }}
      >
        <a className="brand" href="/">
          <img src={logo} alt="2VX Consulting logo" />
        </a>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong style={{ fontSize: 14 }}>2VX Consulting</strong>
          <small style={{ color: "var(--muted)" }}>
            Motorsport & Motorcycle Consulting
          </small>
        </div>
      </div>

      <nav aria-label="Main navigation">
        <button
          className="nav-toggle"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={toggleMobile}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
        <div className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}>
          <a href="/">{t("nav.home")}</a>
          <a href="/about">{t("nav.about")}</a>
          <a href="/terms">{t("nav.terms")}</a>
          <a href="/#contact">{t("nav.contact")}</a>
          <a className="cta" href="/#contact">
            {t("nav.get_in_touch")}
          </a>
          <button
            onClick={toggleTheme}
            aria-pressed={theme === "dark"}
            title="Toggle theme"
            className="pill"
            style={{ marginLeft: 8 }}
          >
            {theme === "light" ? t("nav.theme_dark") : t("nav.theme_light")}
          </button>
          <button
            onClick={toggleLang}
            aria-pressed={lang === "fr"}
            aria-label={
              lang === "en" ? "Switch to French" : "Switch to English"
            }
            title={lang === "en" ? "Français" : "English"}
            className="pill lang-pill"
            style={{ marginLeft: 8, fontSize: 18 }}
          >
            {lang === "en" ? "🇫🇷" : "🇺🇸"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
