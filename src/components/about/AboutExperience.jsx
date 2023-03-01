import { Float, Mask, TransformControls, useMask } from "@react-three/drei";
import { useControls } from "leva";
import { RoundedPlaneShape } from "../../helpers/RoundPlaneShape";

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

  return (
    <>
      <Float>
        <group position={[3, -10, -1]}>
          <Mask colorWrite position={[0, 0, zFirst]} id={1}>
            <shapeGeometry args={[planeShape]} />
            <meshBasicMaterial color={"green"} />
          </Mask>
          {/* <Mask colorWrite depthWrite position={[2.3, 1, zSecond]} id={1}>
            <boxGeometry args={[smallPlaneShape]} />
            <meshBasicMaterial color={"white"} />
          </Mask> */}
          <Mask colorWrite position={[-2.3, 2.3, zThird]} id={1}>
            <shapeGeometry args={[smallPlaneShape]} />
            <meshBasicMaterial color={"red"} />
          </Mask>
          <Mask colorWrite position={[-2.3, 0, zForth]} id={1}>
            <shapeGeometry args={[smallPlaneShape]} />
            <meshBasicMaterial color={"blue"} />
          </Mask>
        </group>
      </Float>

      {/* Flowers */}
      <Float>
        <mesh position={[3, -8, -1]}>
          <boxGeometry args={[4, 1, 1]} />
          <meshNormalMaterial {...stencil} />
        </mesh>
      </Float>

      <group position={[-1.5, -16, 0]}>
        <mesh position={[-5.5, -1, -1]}>
          <shapeGeometry args={[planeShape]} />
          <meshBasicMaterial color={"red"} />
        </mesh>

        <mesh position={[-3, -2, -1]}>
          <shapeGeometry args={[planeShape]} />
          <meshBasicMaterial color={"green"} />
        </mesh>
        <mesh position={[-0.5, -3, -1]}>
          {/* <planeGeometry args={[2, 5]} /> */}
          <shapeGeometry args={[planeShape]} />
          <meshBasicMaterial color={"blue"} />
        </mesh>
      </group>
    </>
  );
};

export default AboutExperience;
