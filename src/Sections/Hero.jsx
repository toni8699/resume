import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import GameConsole from "../Components/gameConsole.jsx";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import {Leva, useControls} from "leva";

const Hero = () => {
    const controls = useControls ('GameConsole',
        {
            scale: {
                value: 2,
                min: 0,
                max: 5,
                step: 0.01
            },
            positionX: {
                value: 0,
                min: -5,
                max: 5,
                step: 0.01
            },
            positionY: {
                value: 0,
                min: -5,
                max: 5,
                step: 0.01
            },
            positionZ: {
                value: 0,
                min: -5,
                max: 5,
                step: 0.01
            },
            rotationX: {
                value: 0,
                min: -5,
                max: 5,
                step: 0.01
            },
            rotationY: {
                value: 0,
                min: -5,
                max: 5,
                step: 0.01
            },
            rotationZ: {
                value: 0,
                min: -5,
                max: 5,
                step: 0.01
            }
        })
    return (
    <section className={"min-h-screen w-full flex flex-col relative border-2 border-blue-500 mt-20"}>
            <div className ="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className={"sm:text-2xl text-xl font-medium font-generalsans text-white text-center "}>Hi I'm Khang <span className={"wavening-hand"}>👋🏼</span></p>
                <h2 className={"text-gray_gradient sm:text-6xl text-4xl font-semibold font-generalsans text-center"}>And I love programming</h2>
            </div>
        <div className={"w-full h-full absolute inset-0"}>
            <Leva/>
            <Canvas className={"w-full h-full "}>
                <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0,0,30]}/>
                    <GameConsole
                        // scale={2}
                        scale ={[controls.scale,controls.scale,controls.scale]}
                        position={[controls.positionX,controls.positionY,controls.positionZ]}
                        rotation={[controls.rotationZ, controls.rotationY, controls.rotationX]}                    />
                    <ambientLight intensity={10} />
                    <directionalLight position={[4,2,1]} intensity={10} />
                </Suspense>

            </Canvas>


        </div>
    </section>
    )
}
export default Hero
