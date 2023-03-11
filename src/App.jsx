import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Experience from "./components/Experience";
import { Loader } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas flat dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
