import {
  Center,
  Float,
  Mask,
  MeshTransmissionMaterial,
  useMask,
} from "@react-three/drei";
import { RoundedPlaneShape } from "../../helpers/RoundPlaneShape";
import { transmissionConfig } from "../../helpers/TransmissionConfig";
import { Bunny } from "../models/Bunny";
import Dragon from "../models/Dragon";

const planeShape = new RoundedPlaneShape(0, 0, 2, 5);
const smallPlaneShape = new RoundedPlaneShape(0, 0, 2, 2);

const AboutExperience = () => {
  const stencil = useMask(1);

  return (
    <>
      <group position={[3, -10, 0]}>
        <Mask colorWrite position={[0, 0, 0]} id={1}>
          <shapeGeometry args={[planeShape]} />
          <meshBasicMaterial color={"#F8F8FF"} />
        </Mask>
        {/* <Mask colorWrite depthWrite position={[2.3, 1, zSecond]} id={1}>
            <boxGeometry args={[smallPlaneShape]} />
            <meshBasicMaterial color={"white"} />
          </Mask> */}
        <Mask colorWrite position={[-2.3, 1, 1]} id={1}>
          <shapeGeometry args={[smallPlaneShape]} />
          <meshBasicMaterial color={"#F8F8FF"} />
        </Mask>
      </group>

      {/* Flowers */}
      <Float>
        <mesh position={[3, -8, -0.5]}>
          <boxGeometry args={[2.5, 3, 2]} />
          <MeshTransmissionMaterial {...stencil} {...transmissionConfig} />
          <Center>
            <Bunny />
          </Center>
        </mesh>
      </Float>

      <group position={[-3, -15, -1]}>
        <Float>
          <mesh>
            <boxGeometry args={[4, 3, 2]} />
            <MeshTransmissionMaterial {...transmissionConfig} />

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
