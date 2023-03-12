import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bunny(props) {
  const { nodes, materials } = useGLTF("/bunny.gtlf");
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.bunny.geometry}>
        <meshStandardMaterial color={props.color || "#101010"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/bunny.gtlf");
