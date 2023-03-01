import { Float, Mask, TransformControls, useMask } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { RoundedPlaneShape } from "../../helpers/RoundPlaneShape";
import Background from "../Background";

const ContactExperience = () => {
  const stencil = useMask(1);
  const { height, width } = useThree((state) => state.viewport);

  return (
    <>
      <Background position={[0, -height * 3, 0]} />
    </>
  );
};

export default ContactExperience;
