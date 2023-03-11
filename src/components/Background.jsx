import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

import * as THREE from "three";

const Background = (props) => {
  const viewport = useThree((state) => state.viewport);
  const material = useRef();
  const scroll = useScroll();

  useFrame((state) => {
    const colorBlack = new THREE.Color("#101010");
    const colorWhite = new THREE.Color("#F8F8FF");

    // material.current.color.lerp(
    //   scroll.offset > 0.3 ? colorBlack : colorWhite,
    //   0.1
    // );

    // material.current.color.lerpColors(
    //   colorWhite,
    //   colorBlack,
    //   scroll.offset * 2
    // );
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]} {...props}>
      <planeGeometry />
      <meshBasicMaterial ref={material} color={"#F8F8FF"} />
    </mesh>
  );
};

export default Background;
