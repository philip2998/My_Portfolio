import { OrbitControls, Preload } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import CanvasLoader from "../../Loader";
import Ball from "./Ball";

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
