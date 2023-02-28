import {
  Float,
  Mask,
  MeshDistortMaterial,
  Text,
  TransformControls,
  useMask,
} from "@react-three/drei";
import {
  RoundedPlaneShape,
  roundedRectShape,
} from "../../helpers/RoundPlaneShape";
import Background from "../Background";

const planeShape = new RoundedPlaneShape();

const HomeExperience = () => {
  const stencil = useMask(1);

  return (
    <>
      <Background />
      <TransformControls position={[3.5, -2.5, 0.2]}>
        <Mask colorWrite depthWrite id={1}>
          <shapeGeometry args={[planeShape]} />
          <meshBasicMaterial color={"#101010"} />
        </Mask>
      </TransformControls>

      <Float>
        <mesh position={[0, 0, 2]}>
          <sphereGeometry />
          <meshNormalMaterial />
        </mesh>
      </Float>

      {/* Flowers */}
      <mesh rotation-y={0.35} position={[4, 0, 0]}>
        <boxGeometry />
        <meshNormalMaterial {...stencil} />
      </mesh>
    </>
  );
};

export default HomeExperience;
