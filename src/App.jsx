import React from "react";

import Hero from "./components/Hero";
import DiscoveryCall from "./components/DiscoveryCall";
import ProgramForYou from "./components/ProgramForYou";
import AboutProgram from "./components/AboutProgram";
import Benefits from "./components/Benefits";
import Journey from "./components/Journey";
import Transformation from "./components/Transformation";
import Mentors from "./components/Mentors";
import LimitedSeats from "./components/LimitedSeats";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

const App = () => {
  const registrationLink =
    "https://forms.oorjatheband.co.in/form/event-registration-mtgyy39t";

  return (
    <>
      <main>
             <Hero registrationLink={registrationLink} />

        <DiscoveryCall registrationLink={registrationLink} />

        <ProgramForYou registrationLink={registrationLink} />

        <AboutProgram registrationLink={registrationLink} />

        <Benefits registrationLink={registrationLink} />

        <Journey registrationLink={registrationLink} />

        <Transformation registrationLink={registrationLink} />

        <Mentors registrationLink={registrationLink} />

        <LimitedSeats registrationLink={registrationLink} />

        <FinalCTA registrationLink={registrationLink} />
      </main>

      <Footer registrationLink={registrationLink} />
    </>
  );
};

export default App;