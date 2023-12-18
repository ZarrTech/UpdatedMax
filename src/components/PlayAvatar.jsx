import {
  useGLTF,
  useAnimations,
  PerspectiveCamera,
  OrbitControls,
  Html,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import MyLoader from "./MyLoader";

const MaxAvatar = () => {
  const [index, setIndex] = useState(1);
  const [isClicked, setIsclicked] = useState(false);
  const avatar = useGLTF("/proddMax.glb");
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);

  useEffect(() => {
    actions[names[index]]?.reset().fadeIn(0.5).play();
    return () => {
      actions[names[index]].fadeOut(0.5);
    };
  }, [index, names, actions]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 3.1]} />
      <ambientLight intensity={0.7} />
      <spotLight
        args={["#fff", 200, 70, 1.5]}
        position={[-1, 7, 7]}
        castShadow
      />
      <group>
        <primitive object={avatar.scene} />

        <Html position={[-0.5, 2.1, 0]}>
          <button
            className=" bg-blue-800 px-3 py-1 rounded-full"
            onClick={() => {
              setIndex((index + 1) % names.length);
              setIsclicked(!isClicked);
            }}
          >
            moves
          </button>
          <div className=" mt-7 md:hidden">use on desktop for beter experience</div>
        </Html>
      </group>
    </>
  );
};

const PlayAvatar = () => {
  return (
    <Canvas shadows>
      <ambientLight intensity={1.5} />
      <Suspense fallback={<MyLoader />}>
        <MaxAvatar />
      </Suspense>
    </Canvas>
  );
};
export default PlayAvatar;
