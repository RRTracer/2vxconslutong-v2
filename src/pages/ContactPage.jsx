import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useT } from "../i18n/LanguageProvider";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "";

const ContactPage = () => {
  const t    = useT();
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY });
      } else {
        /* dev mode — simulate send */
        console.info("[Contact] EmailJS not configured:", Object.fromEntries(new FormData(form.current)));
        await new Promise((r) => setTimeout(r, 700));
      }
      setStatus("success");
      form.current.reset();
    } catch (err) {
      console.error("[Contact] EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <p className="page-label">{t("contact.label")}</p>
          <h1 className="page-h1">{t("contact.title")}</h1>
          <p className="page-sub">{t("contact.subtitle")}</p>
        </header>

        <div className="contact-grid">
          {/* Info */}
          <aside className="contact-info">
            <h3>{t("contact.info_title")}</h3>
            <p>{t("contact.info_desc")}</p>

            <div className="contact-detail">
              <span className="contact-detail-label">{t("contact.email_label")}</span>
              <span className="contact-detail-val">{t("contact.email_value")}</span>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">{t("contact.phone_label")}</span>
              <span className="contact-detail-val">{t("contact.phone_value")}</span>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">{t("contact.location_label")}</span>
              <span className="contact-detail-val">{t("contact.location_value")}</span>
            </div>
          </aside>

          {/* Form */}
          <div className="contact-form-wrap">
            {status === "success" && (
              <div className="form-alert form-alert-success" role="alert">
                {t("contact.success")}
              </div>
            )}
            {status === "error" && (
              <div className="form-alert form-alert-error" role="alert">
                {t("contact.error")}
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit} noValidate>
              <div className="form-2col">
                <div className="form-row">
                  <label htmlFor="from_name">{t("contact.fullname")} *</label>
                  <input id="from_name" name="from_name" type="text"
                    className="form-input" placeholder="Jean Dupont" required />
                </div>
                <div className="form-row">
                  <label htmlFor="company">{t("contact.company")}</label>
                  <input id="company" name="company" type="text"
                    className="form-input" placeholder="Acme Racing" />
                </div>
              </div>

              <div className="form-row">
                <label htmlFor="reply_to">{t("contact.email")} *</label>
                <input id="reply_to" name="reply_to" type="email"
                  className="form-input" placeholder="you@example.com" required />
              </div>

              <div className="form-2col">
                <div className="form-row">
                  <label htmlFor="phone">{t("contact.phone")}</label>
                  <input id="phone" name="phone" type="tel"
                    className="form-input" placeholder="+33 6 00 00 00 00" />
                </div>
                <div className="form-row">
                  <label htmlFor="subject">{t("contact.subject")}</label>
                  <select id="subject" name="subject" className="form-input">
                    <option>{t("contact.subject_general")}</option>
                    <option>{t("contact.subject_brand")}</option>
                    <option>{t("contact.subject_sponsor")}</option>
                    <option>{t("contact.subject_market")}</option>
                    <option>{t("contact.subject_other")}</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <label htmlFor="message">{t("contact.message")} *</label>
                <textarea id="message" name="message"
                  className="form-input" placeholder="…" required />
              </div>

              <div className="form-footer">
                <span className="form-note">{t("contact.wait")}</span>
                <button type="submit" className="btn-primary" disabled={status === "sending"}>
                  {status === "sending" ? t("contact.sending") : t("contact.send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
