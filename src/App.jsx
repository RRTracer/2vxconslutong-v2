import { BrowserRouter as Router, Routes, Route } from "react-router";
import { LanguageProvider } from "./i18n/LanguageProvider";
import NavBar       from "./components/NavBar";
import Footer       from "./components/Footer";
import HomePage     from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage    from "./pages/AboutPage";
import ContactPage  from "./pages/ContactPage";
import Terms        from "./pages/Terms";
import NotFound     from "./pages/NotFound";

function App() {
  return (
    <div className="site-root">
      <Router>
        <LanguageProvider>
          <NavBar />
          <main>
            <Routes>
              <Route path="/"         element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about"    element={<AboutPage />} />
              <Route path="/contact"  element={<ContactPage />} />
              <Route path="/terms"    element={<Terms />} />
              <Route path="*"         element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </LanguageProvider>
      </Router>
    </div>
  );
}

export default App;
