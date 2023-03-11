import {
  Center,
  Float,
  Mask,
  MeshTransmissionMaterial,
  useMask,
} from "@react-three/drei";
import { useControls } from "leva";
import { RoundedPlaneShape } from "../../helpers/RoundPlaneShape";
import { Bunny } from "../models/Bunny";
import Dragon from "../models/Dragon";

const planeShape = new RoundedPlaneShape(0, 0, 2, 5);
const smallPlaneShape = new RoundedPlaneShape(0, 0, 2, 2);

const AboutExperience = () => {
  const stencil = useMask(1);

  const { zFirst, zSecond, zThird, zForth } = useControls({
    zFirst: { value: 0, min: -5, max: 5, step: 0.1 },
    zSecond: { value: -1, min: -5, max: 5, step: 0.1 },
    zThird: { value: 1, min: -5, max: 5, step: 0.1 },
    zForth: { value: -0.3, min: -5, max: 5, step: 0.1 },
  });

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
      <group position={[3, -10, 0]}>
        <Mask colorWrite position={[0, 0, zFirst]} id={1}>
          <shapeGeometry args={[planeShape]} />
          <meshBasicMaterial color={"#F8F8FF"} />
        </Mask>
        {/* <Mask colorWrite depthWrite position={[2.3, 1, zSecond]} id={1}>
            <boxGeometry args={[smallPlaneShape]} />
            <meshBasicMaterial color={"white"} />
          </Mask> */}
        <Mask colorWrite position={[-2.3, 1, zThird]} id={1}>
          <shapeGeometry args={[smallPlaneShape]} />
          <meshBasicMaterial color={"#F8F8FF"} />
        </Mask>
      </group>

      {/* Flowers */}
      <Float>
        <mesh position={[3, -8, -0.5]}>
          <boxGeometry args={[2.5, 3, 2]} />
          <MeshTransmissionMaterial {...stencil} {...config} />
          <Center>
            <Bunny />
          </Center>
        </mesh>
      </Float>

      <group position={[-3, -15, -1]}>
        <Float>
          <mesh>
            <boxGeometry args={[4, 3, 2]} />
            <MeshTransmissionMaterial {...config} />

            <Center>
              <Dragon />
            </Center>
          </mesh>
        </Float>
      </group>
    </>
  );
};

export default AboutExperience;
