import {
  Center,
  Float,
  MeshTransmissionMaterial,
  useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { damp } from "three/src/math/MathUtils";
import { transmissionConfig } from "../../helpers/TransmissionConfig";

import Background from "../Background";
import { Bunny } from "../models/Bunny";

const HomeExperience = () => {
  const sphereRef = useRef();
  const sphereRef2 = useRef();

  const { scroll } = useScroll();

  useFrame((state, delta) => {
    sphereRef.current.rotation.y = damp(
      sphereRef.current.rotation.y,
      0 + scroll.current * 10,
      3,
      delta
    );
    sphereRef2.current.rotation.y = damp(
      sphereRef2.current.rotation.y,
      0 + scroll.current * 13,
      3,
      delta
    );

    sphereRef.current.position.y = damp(
      sphereRef.current.position.y,
      0 + scroll.current * 2,
      1.5,
      delta
    );

    sphereRef2.current.position.y = damp(
      sphereRef2.current.position.y,
      -2 - scroll.current * 21,
      1.5,
      delta
    );

    sphereRef2.current.scale.x =
      sphereRef2.current.scale.z =
      sphereRef2.current.scale.y =
        damp(sphereRef2.current.scale.x, 1 + scroll.current * 0.85, 1.2, delta);
  });

  return (
    <>
      <Background />

      <Float>
        <mesh
          ref={sphereRef}
          position={[0, 5, 2]}
          rotation={[0, Math.PI * 4, 0]}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <MeshTransmissionMaterial {...transmissionConfig} />
          <Center>
            <Bunny scale={0.5} />
          </Center>
        </mesh>
      </Float>

      <Float rotationIntensity={0.3} floatIntensity={5}>
        <mesh
          ref={sphereRef2}
          position={[2, -4, 1]}
          rotation={[0, -Math.PI * 2, 0]}
        >
          <sphereGeometry args={[0.6, 32, 32]} />
          <MeshTransmissionMaterial {...transmissionConfig} />

          <Center>
            <Bunny scale={0.25} />
          </Center>
        </mesh>
      </Float>
    </>
  );
};

export default HomeExperience;
