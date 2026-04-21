import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ContactCard from "../components/ContactCard";

const HomePage = () => {
  return (
    <div>
      <main>
        <Hero />
        <Services />
        <ContactCard />
      </main>
    </div>
  );
};

export default HomePage;
