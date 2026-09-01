import React, { useState } from "react";

import Hero from "./components/Hero";
import DiscoveryCall from "./components/DiscoveryCall";
import ProgramForYou from "./components/ProgramForYou";
import AboutProgram from "./components/AboutProgram";
import ApplicationForm from "./components/ApplicationForm";
import Benefits from "./components/Benefits";
import Journey from "./components/Journey";
import Transformation from "./components/Transformation";
import Mentors from "./components/Mentors";
import LimitedSeats from "./components/LimitedSeats";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <main>
        <Hero onApply={openForm} />

        <DiscoveryCall onApply={openForm} />

        <ProgramForYou onApply={openForm} />

        <AboutProgram onApply={openForm} />
        <Benefits onApply={openForm} />
        <Journey onApply={openForm} />
        <Transformation onApply={openForm} />
        <Mentors onApply={openForm} />
        <LimitedSeats onApply={openForm} />
        <FinalCTA onApply={openForm} />

      </main>

      <ApplicationForm
        isOpen={isFormOpen}
        onClose={closeForm}
      />
      <Footer />
    </>
  );
};

export default App;