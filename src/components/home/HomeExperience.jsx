import {
  Center,
  Float,
  MeshTransmissionMaterial,
  useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import { damp } from "three/src/math/MathUtils";

import { RoundedPlaneShape } from "../../helpers/RoundPlaneShape";
import Background from "../Background";
import { Bunny } from "../models/Bunny";

const planeShape = new RoundedPlaneShape();

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

  const config = useControls({
    meshPhysicalMaterial: false,
    transmissionSampler: false,
    backside: false,
    samples: { value: 10, min: 1, max: 32, step: 1 },
    resolution: { value: 2048, min: 256, max: 2048, step: 256 },
    transmission: { value: 1, min: 0, max: 1 },
    roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
    thickness: { value: 0.36, min: 0, max: 10, step: 0.01 },
    ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0.5, min: 0, max: 1 },
    anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 1, min: 0, max: 1 },
    attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
    attenuationColor: "#ffffff",
    color: "#ffffff",
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
          <sphereGeometry />
          <MeshTransmissionMaterial {...config} />
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
          <sphereGeometry args={[0.6, 8, 16]} />
          <MeshTransmissionMaterial {...config} />

          <Center>
            <Bunny scale={0.25} />
          </Center>
        </mesh>
      </Float>
    </>
  );
};

export default HomeExperience;
