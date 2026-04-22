import React, { createContext, useContext, useEffect, useState } from "react";

const translations = {
  fr: {
    /* nav */
    "nav.home":        "Accueil",
    "nav.services":    "Services",
    "nav.about":       "À propos",
    "nav.contact":     "Contact",
    "nav.terms":       "Mentions légales",
    "nav.cta":         "Prendre contact",
    "nav.theme_dark":  "Mode sombre",
    "nav.theme_light": "Mode clair",

    /* home */
    "home.tagline": "Conseil marketing & commercial pour les marques motorsport.",
    "home.cta_services": "Nos services",
    "home.cta_contact":  "Nous contacter",

    /* services page */
    "services.label":    "Expertise",
    "services.title":    "Nos services",
    "services.subtitle": "Un accompagnement global pour développer votre position commerciale dans le secteur motorsport.",
    "services.s1.title": "Stratégie de marque & positionnement",
    "services.s1.body":  "Définition du positionnement, de la proposition de valeur et des narratifs différenciants pour renforcer votre attractivité commerciale.",
    "services.s2.title": "Sponsoring & partenariats",
    "services.s2.body":  "Identification des sponsors, structuration des offres de partenariat et stratégie d'activation pour maximiser le retour sur investissement.",
    "services.s3.title": "Activation commerciale",
    "services.s3.body":  "Conception et déploiement de campagnes commerciales, développement du réseau et croissance des revenus.",
    "services.s4.title": "Études de marché",
    "services.s4.body":  "Analyse concurrentielle, veille sectorielle et identification d'opportunités de croissance dans l'industrie motorsport.",
    "services.s5.title": "Développement business",
    "services.s5.body":  "Prospection de nouveaux marchés, développement commercial qualifié et structuration de la force de vente.",
    "services.s6.title": "Pilotage de projets",
    "services.s6.body":  "Coordination opérationnelle des initiatives commerciales, gestion des parties prenantes et suivi de la performance.",

    /* about page */
    "about.label":           "L'entreprise",
    "about.title":           "À propos de 2VX Consulting",
    "about.subtitle":        "Cabinet de conseil spécialisé dans la stratégie commerciale et marketing pour l'industrie motorsport.",
    "about.intro1":          "2VX Consulting est un cabinet de conseil indépendant fondé pour répondre aux besoins spécifiques des acteurs de l'industrie motorsport. Nous accompagnons constructeurs, équipes, équipementiers et marques partenaires dans le développement de leur stratégie commerciale et de leur positionnement.",
    "about.intro2":          "Notre approche combine une connaissance approfondie du secteur motorsport avec les meilleures pratiques du conseil en stratégie commerciale. Nous intervenons aussi bien en phase de réflexion stratégique qu'en mode opérationnel, aux côtés de vos équipes.",
    "about.values_title":    "Nos valeurs",
    "about.v1.title":        "Rigueur",
    "about.v1.body":         "Chaque mission est abordée avec méthode et précision. Nos recommandations reposent sur une analyse factuelle et sont conçues pour être directement actionnables.",
    "about.v2.title":        "Expertise",
    "about.v2.body":         "Une connaissance pointue du secteur motorsport et des meilleures pratiques du conseil commercial, au service de votre développement.",
    "about.v3.title":        "Engagement",
    "about.v3.body":         "Nous nous impliquons pleinement dans vos projets et mesurons notre succès à l'aune des résultats concrets que nous vous aidons à atteindre.",
    "about.v4.title":        "Confidentialité",
    "about.v4.body":         "Chaque engagement est traité avec la plus grande discrétion. La confiance est le fondement de notre relation avec nos clients.",
    "about.process_title":   "Notre approche",
    "about.step1.title":     "Découverte",
    "about.step1.body":      "Prise de contact et cadrage : compréhension de vos objectifs, de votre environnement concurrentiel et de vos enjeux spécifiques.",
    "about.step2.title":     "Audit stratégique",
    "about.step2.body":      "Analyse approfondie de votre position commerciale, de vos atouts et des opportunités de croissance identifiées sur votre marché.",
    "about.step3.title":     "Plan d'action",
    "about.step3.body":      "Élaboration d'une feuille de route personnalisée avec des actions concrètes, des priorités claires et des indicateurs de succès mesurables.",
    "about.step4.title":     "Accompagnement",
    "about.step4.body":      "Mise en œuvre opérationnelle, suivi des résultats et ajustements continus pour garantir l'atteinte des objectifs fixés.",
    "about.cta_text":        "Vous souhaitez travailler ensemble ?",
    "about.cta_btn":         "Contactez-nous",

    /* contact page */
    "contact.label":          "Prise de contact",
    "contact.title":          "Contact",
    "contact.subtitle":       "Envoyez-nous un message ou réservez un appel de découverte. Nous vous répondons sous 48 heures.",
    "contact.info_title":     "Coordonnées",
    "contact.info_desc":      "N'hésitez pas à nous contacter pour toute demande d'information ou pour discuter de votre projet.",
    "contact.email_label":    "Email",
    "contact.email_value":    "contact@2vxconsulting.com",
    "contact.phone_label":    "Téléphone",
    "contact.phone_value":    "+33 6 12 34 56 78",
    "contact.location_label": "Localisation",
    "contact.location_value": "Europe — sur site & à distance",
    "contact.fullname":       "Nom complet",
    "contact.company":        "Société (optionnel)",
    "contact.email":          "Email",
    "contact.phone":          "Téléphone",
    "contact.subject":        "Sujet",
    "contact.message":        "Message",
    "contact.send":           "Envoyer",
    "contact.sending":        "Envoi en cours…",
    "contact.wait":           "Réponse sous 48 h.",
    "contact.success":        "Message envoyé. Nous vous répondrons sous 48 heures.",
    "contact.error":          "Échec de l'envoi. Veuillez réessayer ou nous écrire directement.",
    "contact.subject_general": "Demande générale",
    "contact.subject_brand":   "Stratégie de marque",
    "contact.subject_sponsor": "Sponsoring & partenariats",
    "contact.subject_market":  "Étude de marché",
    "contact.subject_other":   "Autre",

    /* footer */
    "footer.tagline": "Conseil commercial & marketing — industrie motorsport.",
    "footer.copy":    "© {year} 2VX Consulting",
    "footer.terms":   "Mentions légales",
  },

  en: {
    /* nav */
    "nav.home":        "Home",
    "nav.services":    "Services",
    "nav.about":       "About",
    "nav.contact":     "Contact",
    "nav.terms":       "Legal",
    "nav.cta":         "Get in touch",
    "nav.theme_dark":  "Dark mode",
    "nav.theme_light": "Light mode",

    /* home */
    "home.tagline": "Marketing & commercial consulting for motorsport brands.",
    "home.cta_services": "Our services",
    "home.cta_contact":  "Contact us",

    /* services page */
    "services.label":    "Expertise",
    "services.title":    "Our services",
    "services.subtitle": "End-to-end support to develop your commercial position in the motorsport industry.",
    "services.s1.title": "Brand strategy & positioning",
    "services.s1.body":  "Define positioning, value proposition and differentiating narratives to strengthen commercial appeal.",
    "services.s2.title": "Sponsorship & partnerships",
    "services.s2.body":  "Sponsor identification, partnership offer structuring and activation strategy to maximise ROI.",
    "services.s3.title": "Commercial activation",
    "services.s3.body":  "Design and deploy commercial campaigns, develop your network and grow revenue.",
    "services.s4.title": "Market research",
    "services.s4.body":  "Competitive analysis, sector monitoring and identification of growth opportunities in the motorsport industry.",
    "services.s5.title": "Business development",
    "services.s5.body":  "Prospecting new markets, qualified business development and commercial organisation structuring.",
    "services.s6.title": "Project management",
    "services.s6.body":  "Operational coordination of commercial initiatives, stakeholder management and performance tracking.",

    /* about page */
    "about.label":           "The firm",
    "about.title":           "About 2VX Consulting",
    "about.subtitle":        "An independent consulting firm specialising in commercial and marketing strategy for the motorsport industry.",
    "about.intro1":          "2VX Consulting is an independent consulting firm created to address the specific needs of motorsport industry players. We support manufacturers, teams, suppliers and partner brands in developing their commercial strategy and market positioning.",
    "about.intro2":          "Our approach combines deep expertise in the motorsport sector with best practices in commercial strategy consulting. We engage both at the strategic planning stage and in operational mode, working alongside your teams.",
    "about.values_title":    "Our values",
    "about.v1.title":        "Rigour",
    "about.v1.body":         "Every engagement is approached with method and precision. Our recommendations are grounded in factual analysis and designed to be directly actionable.",
    "about.v2.title":        "Expertise",
    "about.v2.body":         "In-depth knowledge of the motorsport sector and best practices in commercial consulting, applied to your growth challenges.",
    "about.v3.title":        "Commitment",
    "about.v3.body":         "We engage fully in your projects and measure our success by the tangible results we help you achieve.",
    "about.v4.title":        "Confidentiality",
    "about.v4.body":         "Every engagement is handled with the utmost discretion. Trust is the foundation of our client relationships.",
    "about.process_title":   "Our approach",
    "about.step1.title":     "Discovery",
    "about.step1.body":      "Initial contact and scoping: understanding your objectives, competitive environment and specific challenges.",
    "about.step2.title":     "Strategic audit",
    "about.step2.body":      "In-depth analysis of your commercial position, strengths and growth opportunities identified in your market.",
    "about.step3.title":     "Action plan",
    "about.step3.body":      "Development of a personalised roadmap with concrete actions, clear priorities and measurable success indicators.",
    "about.step4.title":     "Support",
    "about.step4.body":      "Operational implementation, results monitoring and ongoing adjustments to ensure the achievement of set objectives.",
    "about.cta_text":        "Ready to work together?",
    "about.cta_btn":         "Contact us",

    /* contact page */
    "contact.label":          "Get in touch",
    "contact.title":          "Contact",
    "contact.subtitle":       "Send us a message or book a discovery call. We reply within 48 hours.",
    "contact.info_title":     "Contact details",
    "contact.info_desc":      "Feel free to reach out for any enquiry or to discuss your project.",
    "contact.email_label":    "Email",
    "contact.email_value":    "contact@2vxconsulting.com",
    "contact.phone_label":    "Phone",
    "contact.phone_value":    "+33 6 12 34 56 78",
    "contact.location_label": "Location",
    "contact.location_value": "Europe — on-site & remote",
    "contact.fullname":       "Full name",
    "contact.company":        "Company (optional)",
    "contact.email":          "Email",
    "contact.phone":          "Phone",
    "contact.subject":        "Subject",
    "contact.message":        "Message",
    "contact.send":           "Send",
    "contact.sending":        "Sending…",
    "contact.wait":           "We reply within 48 h.",
    "contact.success":        "Message sent. We will get back to you within 48 hours.",
    "contact.error":          "Send failed. Please try again or write to us directly.",
    "contact.subject_general": "General enquiry",
    "contact.subject_brand":   "Brand strategy",
    "contact.subject_sponsor": "Sponsorship & partnerships",
    "contact.subject_market":  "Market research",
    "contact.subject_other":   "Other",

    /* footer */
    "footer.tagline": "Commercial & marketing consulting — motorsport industry.",
    "footer.copy":    "© {year} 2VX Consulting",
    "footer.terms":   "Legal notice",
  },
};

const LangContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const defaultLang = (() => {
    try { const s = localStorage.getItem("site-lang"); if (s) return s; } catch (e) {}
    return navigator.language?.startsWith("fr") ? "fr" : "en";
  })();

  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    try { localStorage.setItem("site-lang", lang); } catch (e) {}
  }, [lang]);

  const t = (key, vars) => {
    const str =
      translations[lang]?.[key] ??
      translations.en?.[key] ??
      key;
    if (!vars) return str;
    return str.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
};

export const useT = () => {
  const { t } = useLang();
  return t;
};

export default LanguageProvider;
