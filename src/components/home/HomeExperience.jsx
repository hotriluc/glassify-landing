import {
  Float,
  Mask,
  MeshDistortMaterial,
  Text,
  TransformControls,
  useMask,
} from "@react-three/drei";
import Background from "../Background";

const HomeExperience = () => {
  const stencil = useMask(1);

  return (
    <>
      <Background />
      <TransformControls position={[4, 0, 0.2]}>
        <Mask colorWrite depthWrite id={1}>
          <planeGeometry args={[2, 6, 64, 64]} />
          <meshBasicMaterial color={"#101010"} />
        </Mask>
      </TransformControls>

      <Float>
        <mesh position={[0, 0, 1]}>
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
