import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Mask,
  MeshDistortMaterial,
  Scroll,
  ScrollControls,
  Text,
  TransformControls,
  useMask,
  useScroll,
} from "@react-three/drei";

import * as THREE from "three";
import { damp, lerp } from "three/src/math/MathUtils";

function App() {
  const stencil = useMask(1);
  return (
    <>
      <Canvas flat>
        <color args={["#101010"]} attach="background" />
        <ambientLight />

        <ScrollControls pages={3}>
          <Scroll>
            <Background />

            <TransformControls position={[4, 0, 0.2]}>
              <Mask colorWrite depthWrite id={1}>
                <planeGeometry args={[2, 6, 64, 64]} />
                <MeshDistortMaterial color={"#101010"}></MeshDistortMaterial>
              </Mask>
            </TransformControls>

            <Text
              maxWidth={10}
              fontSize={0.5}
              color="black"
              position={[-3, 2, 0]}
            >{`The eternity is our craft.\nGlassify.`}</Text>

            <mesh position={[0, 0, 1]}>
              <sphereGeometry />
              <meshNormalMaterial />
            </mesh>

            {/* Flowers */}
            <mesh rotation-y={0.35} position={[4, 0, 0]}>
              <boxGeometry />
              <meshNormalMaterial {...stencil} />
            </mesh>
          </Scroll>
          <Scroll html>
            <section>home</section>
            <section style={{ color: "white" }}>about</section>
            <section style={{ color: "white" }}>contact</section>
          </Scroll>
        </ScrollControls>
      </Canvas>
      {/* <main>ahah</main> */}
    </>
  );
}

const Background = () => {
  const viewport = useThree((state) => state.viewport);
  const material = useRef();
  const scroll = useScroll();

  useFrame((state) => {
    const colorBlack = new THREE.Color("#101010");
    const colorWhite = new THREE.Color("white ");

    material.current.color.lerp(
      scroll.offset > 0.3 ? colorBlack : colorWhite,
      0.1
    );

    // material.current.color.lerpColors(
    //   colorWhite,
    //   colorBlack,
    //   scroll.offset * 2
    // );
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry />
      <meshBasicMaterial ref={material} />
    </mesh>
  );
};

export default App;
