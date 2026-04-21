import { BrowserRouter as Router, Routes, Route } from "react-router";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import About from "./pages/About";
import Terms from "./pages/Terms";
import NavBar from "./components/NavBar";
import { LanguageProvider } from "./i18n/LanguageProvider";

function App() {
  return (
    <div className="site-root">
      <Router>
        <LanguageProvider>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </LanguageProvider>
      </Router>
    </div>
  );
}

export default App;
