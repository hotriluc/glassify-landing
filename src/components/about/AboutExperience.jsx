import { Float, Mask, TransformControls, useMask } from "@react-three/drei";
import { RoundedPlaneShape } from "../../helpers/RoundPlaneShape";

const planeShape = new RoundedPlaneShape();

const AboutExperience = () => {
  const stencil = useMask(1);

  return (
    <>
      <TransformControls position={[5, -10, -1]}>
        <Mask colorWrite id={1}>
          <shapeGeometry args={[planeShape]} position={[0, 0, 0]} />
          <meshBasicMaterial color={"white"} />
        </Mask>
        <Mask colorWrite position={[-2.5, 0, 0]} id={1}>
          <shapeGeometry args={[planeShape]} scale={0.2} />
          <meshBasicMaterial color={"white"} />
        </Mask>
        <Mask colorWrite position={[-5, 0, 0]} id={1}>
          <shapeGeometry args={[planeShape]} />
          <meshBasicMaterial color={"white"} />
        </Mask>
      </TransformControls>

      {/* Flowers */}
      <Float>
        <mesh position={[3, -8, -1]}>
          <boxGeometry args={[4, 1, 1]} />
          <meshNormalMaterial {...stencil} />
        </mesh>
      </Float>

      <mesh position={[-5.5, -15, -1]}>
        <planeGeometry args={[2, 5]} />
        <meshBasicMaterial color={"white"} />
      </mesh>

      <mesh position={[-3, -16, -1]}>
        <planeGeometry args={[2, 5]} />
        <meshBasicMaterial color={"white"} />
      </mesh>
      <mesh position={[-0.5, -17, -1]}>
        {/* <planeGeometry args={[2, 5]} /> */}
        <shapeGeometry args={[planeShape]} />
        <meshBasicMaterial color={"white"} />
      </mesh>
    </>
  );
};

export default AboutExperience;
