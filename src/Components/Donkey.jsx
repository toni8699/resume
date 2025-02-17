/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Guilherme Navarro (https://sketchfab.com/guinavarro.al)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shrek-pocket-shrek-and-animations-527da89d1ea14e518c6cf16c39442b19
Title: Shrek (Pocket Shrek) and (Animations)
*/

import React, {useEffect, useRef} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Donkey =({animationName = 'm_shrek_idle6' , ...props}) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('models/shrek.glb')
    const { actions } = useAnimations(animations, group)

    // for (const animation in actions) {
    //     // console.log(animation);
    // }
    useEffect(() => {
        if (actions[animationName]) {
            actions[animationName].reset ().fadeIn(0.5).play();
        } else {
            console.error(`Animation not found: ${animationName}`);
        }
        return () => {
            actions[animationName]?.fadeOut(0.5);
        }
    }, [animationName,actions]);
    return (
        <group ref={group} { ...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={118.579}>
                    <group name="ShrekModel_animsfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Object_4">
                                    <primitive object={nodes._rootJoint} />
                                    <skinnedMesh
                                        name="Object_7"
                                        geometry={nodes.Object_7.geometry}
                                        material={materials.t_shrek_c}
                                        skeleton={nodes.Object_7.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_8"
                                        geometry={nodes.Object_8.geometry}
                                        material={materials.t_Shrek_alpha_c}
                                        skeleton={nodes.Object_8.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_9"
                                        geometry={nodes.Object_9.geometry}
                                        material={materials.t_shrek_eye_c}
                                        skeleton={nodes.Object_9.skeleton}
                                    />
                                    <group name="Object_6" rotation={[-Math.PI, 0, -Math.PI]} scale={0.01} />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('models/shrek.glb')

export default Donkey
