import { Scroll, ScrollControls } from "@react-three/drei";
import React from "react";
import HomeExperience from "./home/HomeExperience";
import HomeOverlay from "./home/HomeOverlay";

const Experience = () => {
  return (
    <>
      <color args={["#101010"]} attach="background" />
      <ambientLight />

      <ScrollControls pages={3}>
        <Scroll>
          <HomeExperience />
        </Scroll>
        <Scroll html>
          <HomeOverlay />
          <section style={{ color: "white" }}>about</section>
          <section style={{ color: "white" }}>contact</section>
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Experience;
