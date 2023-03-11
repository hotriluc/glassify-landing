import {
  Center,
  Float,
  Mask,
  MeshRefractionMaterial,
  MeshTransmissionMaterial,
  TransformControls,
  useMask,
} from "@react-three/drei";
import { useControls } from "leva";

import { RoundedPlaneShape } from "../../helpers/RoundPlaneShape";
import Background from "../Background";
import { Bunny } from "./Bunny";

const planeShape = new RoundedPlaneShape();

const HomeExperience = () => {
  const stencil = useMask(1);
  const config = useControls({
    meshPhysicalMaterial: false,
    transmissionSampler: false,
    backside: false,
    samples: { value: 10, min: 1, max: 32, step: 1 },
    resolution: { value: 2048, min: 256, max: 2048, step: 256 },
    transmission: { value: 1, min: 0, max: 1 },
    roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
    thickness: { value: 0.1, min: 0, max: 10, step: 0.01 },
    ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0.06, min: 0, max: 1 },
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
        <mesh position={[0, 0, 2]}>
          <sphereGeometry />
          <MeshTransmissionMaterial {...config} />
          <Center>
            <Bunny scale={0.5} />
          </Center>
        </mesh>
      </Float>
    </>
  );
};

export default HomeExperience;
