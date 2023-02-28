import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Canvas } from "@react-three/fiber";

import Experience from "./components/Experience";

function App() {
  return (
    <Canvas flat>
      <Experience />
    </Canvas>
  );
}

export default App;
