import {
  OrthographicCamera,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import React from "react";
import AboutExperience from "./about/AboutExperience";
import AboutOverlay from "./about/AboutOverlay";
import ContactExperience from "./contact/ContactExperience";
import ContactOverlay from "./contact/ContactOverlay";
import HomeExperience from "./home/HomeExperience";
import HomeOverlay from "./home/HomeOverlay";

const Experience = () => {
  return (
    <>
      <color args={["#101010"]} attach="background" />
      <ambientLight />

      <ScrollControls pages={4} damping={0.3}>
        <Scroll>
          <HomeExperience />
          <AboutExperience />
          <ContactExperience />
        </Scroll>
        <Scroll html>
          <HomeOverlay />
          <AboutOverlay />
          <ContactOverlay />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Experience;
