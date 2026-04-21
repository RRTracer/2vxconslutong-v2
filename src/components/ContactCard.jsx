import React from "react";
import { useT } from "../i18n/LanguageProvider";

const ContactCard = () => {
  const t = useT();
  return (
    <section id="contact" className="container" style={{ padding: "2.5rem 0" }}>
      <div>
        <h3 style={{ marginBottom: 8 }}>{t("contact.title")}</h3>
        <p style={{ color: "var(--muted)", marginTop: 0 }}>
          {t("contact.description")}
        </p>

        <div style={{ marginTop: 16 }} className="form-grid">
          <div>
            <div className="contact-card">
              <h4 style={{ marginTop: 0 }}>{t("contact.details_title")}</h4>
              <p style={{ color: "var(--muted)" }}>
                {t("contact.description")}
              </p>
              <ul className="contact-list" style={{ marginTop: 12 }}>
                <li>
                  <strong>{t("contact.email")}:</strong>{" "}
                  contact@2vxconsulting.example
                </li>
                <li>
                  <strong>{t("contact.phone")}:</strong> +33 6 12 34 56 78
                </li>
                <li>
                  <strong>{t("contact.location")}:</strong> Europe (onsite &
                  remote)
                </li>
              </ul>
            </div>
          </div>

          <div>
            <form
              className="contact-card"
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.target);
                console.log(Object.fromEntries(f));
              }}
            >
              <div className="form-row">
                <label htmlFor="name">{t("contact.fullname")}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t("contact.fullname")}
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="company">{t("contact.company")}</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder={t("contact.company")}
                />
              </div>

              <div className="form-row">
                <label htmlFor="email">{t("contact.email")}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="phone">{t("contact.phone")}</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              <div className="form-row">
                <label htmlFor="subject">{t("contact.subject")}</label>
                <select id="subject" name="subject">
                  <option>General inquiry</option>
                  <option>Setup & tuning</option>
                  <option>Telemetry / data</option>
                  <option>Rider coaching</option>
                </select>
              </div>

              <div className="form-row">
                <label htmlFor="message">{t("contact.message")}</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.message")}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 8,
                }}
              >
                <small style={{ color: "var(--muted)" }}>
                  {t("contact.wait")}
                </small>
                <div className="form-actions">
                  <button className="btn" type="submit">
                    {t("contact.send")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
