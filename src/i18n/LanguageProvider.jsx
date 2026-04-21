import React, { createContext, useContext, useEffect, useState } from "react";

const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.terms": "Mentions",
    "nav.contact": "Contact",
    "nav.get_in_touch": "Contactez-nous",
    "nav.theme_dark": "🌙 Sombre",
    "nav.theme_light": "☀️ Clair",
    "hero.tag": "Motorsport — Marque & Commerce",
    "hero.title": "Conseil marketing & commercial pour les marques motorsport",
    "hero.subtitle":
      "Nous aidons les constructeurs, équipes et marques motorsport à développer leurs partenariats, ventes et engagement fan grâce à une stratégie commerciale ciblée.",
    "hero.cta": "Demander un audit commercial",
    "hero.services": "Nos services",
    "hero.quick_facts": "Faits rapides",
    "hero.fact1": "Stratégie sponsoring & activation",
    "hero.fact2": "Positionnement produit & go-to-market",
    "hero.fact3": "Partenariats commerciaux & croissance des revenus",
    "services.s1.title": "Stratégie de marque & positionnement",
    "services.s1.body":
      "Définition de positionnement, proposition de valeur et narratifs pour renforcer l'attraction commerciale.",
    "services.s2.title": "Recherche marché & sponsoring",
    "services.s2.body":
      "Études de marché, ciblage sponsor et stratégie d'activation pour maximiser le retour sur partenariat.",
    "services.s3.title": "Activation commerciale & partenariats",
    "services.s3.body":
      "Conception et exécution de campagnes commerciales, négociation de partenariats et croissance des revenus.",
    "contact.title": "Contact",
    "contact.description":
      "Envoyez un message ou réservez un appel de découverte.",
    "contact.details_title": "Coordonnées",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.location": "Localisation",
    "contact.fullname": "Nom complet",
    "contact.company": "Société (optionnel)",
    "contact.subject": "Sujet",
    "contact.message": "Message",
    "contact.send": "Envoyer la demande",
    "contact.wait": "Nous vous contacterons sous 48 heures.",
    "footer.copy": "© {year} 2VX Consulting",
    "footer.services": "Services",
    "footer.about": "À propos",
    "footer.contact": "Contact",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.terms": "Terms",
    "nav.contact": "Contact",
    "nav.get_in_touch": "Get in touch",
    "nav.theme_dark": "🌙 Dark",
    "nav.theme_light": "☀️ Light",
    "hero.tag": "Motorsport — Brand & Commerce",
    "hero.title": "Marketing & commercial consulting for motorsport brands",
    "hero.subtitle":
      "We help manufacturers, teams and motorsport brands grow sponsorship, sales and fan engagement through focused commercial strategy.",
    "hero.cta": "Request a commercial review",
    "hero.services": "Our services",
    "hero.quick_facts": "Quick facts",
    "hero.fact1": "Sponsorship strategy & activation",
    "hero.fact2": "Go-to-market & product positioning",
    "hero.fact3": "Commercial partnerships & revenue growth",
    "services.s1.title": "Brand strategy & positioning",
    "services.s1.body":
      "Define positioning, value proposition and narratives to strengthen commercial pull.",
    "services.s2.title": "Market research & sponsorship",
    "services.s2.body":
      "Market studies, sponsor targeting and activation strategy to maximise partnership ROI.",
    "services.s3.title": "Commercial activation & partnerships",
    "services.s3.body":
      "Design and run commercial campaigns, negotiate partnerships and grow revenue.",
    "contact.title": "Contact",
    "contact.description": "Send a message or book a discovery call.",
    "contact.details_title": "Contact details",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.fullname": "Full name",
    "contact.company": "Company (optional)",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send request",
    "contact.wait": "We will contact you within 48 hours.",
    "footer.copy": "© {year} 2VX Consulting",
    "footer.services": "Services",
    "footer.about": "About",
    "footer.contact": "Contact",
  },
};

const LangContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const defaultLang = (() => {
    try {
      const saved = localStorage.getItem("site-lang");
      if (saved) return saved;
    } catch (e) {}
    // default to French if browser prefers
    return navigator.language && navigator.language.startsWith("fr")
      ? "fr"
      : "en";
  })();

  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    try {
      localStorage.setItem("site-lang", lang);
    } catch (e) {}
  }, [lang]);

  const t = (key, vars) => {
    const str =
      (translations[lang] && translations[lang][key]) ||
      (translations.en && translations.en[key]) ||
      key;
    if (!vars) return str;
    return str.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? "");
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};

export const useT = () => {
  const { t } = useLang();
  return t;
};

export default LanguageProvider;
