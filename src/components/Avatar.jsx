import React, { useEffect, useRef, useState } from "react";
import {
  useGLTF,
  useAnimations,
  PerspectiveCamera,
} from "@react-three/drei";

function Avatar() {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/maxxx.glb");
  const { actions } = useAnimations(animations, group);
  
  useEffect(() => {
      actions.multipleAnimation.play()
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[-7, 3, 20]} />
      <ambientLight intensity={1.5} />
      <spotLight
        args={["#fff", 200, 70, 1.5]}
        position={[-1, 7, 7]}
        castShadow
      />
      <group
        position={[-7.7, -4.8, 0]}
        rotation={[0, -6.2, 0]}
        scale={8.1}
        castShadow
        ref={group}
        dispose={null}
      >
        <group name="Scene">
          <group name="multipleAnimation">
            <skinnedMesh
              name="EyeLeft001"
              geometry={nodes.EyeLeft001.geometry}
              material={materials.Wolf3D_Eye}
              skeleton={nodes.EyeLeft001.skeleton}
              morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary}
              morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences}
            />
            <skinnedMesh
              name="EyeRight001"
              geometry={nodes.EyeRight001.geometry}
              material={materials.Wolf3D_Eye}
              skeleton={nodes.EyeRight001.skeleton}
              morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary}
              morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences}
            />
            <skinnedMesh
              name="Wolf3D_Body001"
              geometry={nodes.Wolf3D_Body001.geometry}
              material={materials.Wolf3D_Body}
              skeleton={nodes.Wolf3D_Body001.skeleton}
              morphTargetDictionary={nodes.Wolf3D_Body001.morphTargetDictionary}
              morphTargetInfluences={nodes.Wolf3D_Body001.morphTargetInfluences}
            />
            <skinnedMesh
              name="Wolf3D_Head001"
              geometry={nodes.Wolf3D_Head001.geometry}
              material={materials.Wolf3D_Skin}
              skeleton={nodes.Wolf3D_Head001.skeleton}
              morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary}
              morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences}
            />
            <skinnedMesh
              name="Wolf3D_Outfit_Bottom001"
              geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
              material={materials.Wolf3D_Outfit_Bottom}
              skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
              morphTargetDictionary={
                nodes.Wolf3D_Outfit_Bottom001.morphTargetDictionary
              }
              morphTargetInfluences={
                nodes.Wolf3D_Outfit_Bottom001.morphTargetInfluences
              }
            />
            <skinnedMesh
              name="Wolf3D_Outfit_Footwear001"
              geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
              material={materials.Wolf3D_Outfit_Footwear}
              skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
              morphTargetDictionary={
                nodes.Wolf3D_Outfit_Footwear001.morphTargetDictionary
              }
              morphTargetInfluences={
                nodes.Wolf3D_Outfit_Footwear001.morphTargetInfluences
              }
            />
            <skinnedMesh
              name="Wolf3D_Outfit_Top001"
              geometry={nodes.Wolf3D_Outfit_Top001.geometry}
              material={materials.Wolf3D_Outfit_Top}
              skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
              morphTargetDictionary={
                nodes.Wolf3D_Outfit_Top001.morphTargetDictionary
              }
              morphTargetInfluences={
                nodes.Wolf3D_Outfit_Top001.morphTargetInfluences
              }
            />
            <skinnedMesh
              name="Wolf3D_Teeth001"
              geometry={nodes.Wolf3D_Teeth001.geometry}
              material={materials["Wolf3D_Teeth.003"]}
              skeleton={nodes.Wolf3D_Teeth001.skeleton}
              morphTargetDictionary={
                nodes.Wolf3D_Teeth001.morphTargetDictionary
              }
              morphTargetInfluences={
                nodes.Wolf3D_Teeth001.morphTargetInfluences
              }
            />
            <primitive object={nodes.Hips} />
          </group>
        </group>
      </group>
    </>
  );
}

export default Avatar;

useGLTF.preload("/maxxx.glb");
