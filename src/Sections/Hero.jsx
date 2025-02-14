import React, {Suspense, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera,} from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import Typewriter from 'typewriter-effect';
import Office from "../Components/Office.jsx";
import AirPlane from "../Components/AirPlane.jsx";
import {motion} from "motion/react";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";

const Hero = () => {
    const [isRotating, setIsRotating] = useState()
    // const controls = useControls ('',
    //     {
    //         scale: {
    //             value: 2,
    //             min: 0,
    //             max: 5,
    //             step: 0.001
    //         },
    //         positionX: {
    //             value: 0,
    //             min: -20,
    //             max: 20,
    //             step: 0.01
    //         },
    //         positionY: {
    //             value: 0,
    //             min: -20,
    //             max: 5,
    //             step: 0.01
    //         },
    //         positionZ: {
    //             value: 0,
    //             min: -50,
    //             max: 50,
    //             step: 0.01
    //         },
    //         rotationX: {
    //             value: 0,
    //             min: -5,
    //             max: 5,
    //             step: 0.01
    //         },
    //         rotationY: {
    //             value: 0,
    //             min: -5,
    //             max: 5,
    //             step: 0.01
    //         },
    //         rotationZ: {
    //             value: 0,
    //             min: -5,
    //             max: 5,
    //             step: 0.01
    //         }
    //     })
    const isMobile = useMediaQuery({query: '(max-width: 768px)'})
    return (
        <section id={'home'} className={"min-h-screen w-full flex flex-col relative mt-20"}>
            <motion.div variants={textVariant()} className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 mb-14">
                <motion.h1  className={"sm:text-2xl text-4xl font-bold text-center font-generalsans text-white "}>Hi, I'm
                    Khang <span className={"waving-hand"}>👋🏼</span></motion.h1>
                <motion.p className={`text-white text-xl sm:text-2xl text-center font-medium font-generalsans `}>
                    and I am a
                </motion.p>
                <div className={'text-white text-center text-gray_gradient'}>
                    <Typewriter
                        options={{
                            strings: ["Computer Science Student", "Software Developer", "Pianist"],
                            autoStart: true,
                            loop: true,
                            loopCount: Infinity,
                            // changeDelay:5,
                            deleteSpeed: 50,
                            delay:50,
                            pauseFor: 1000,
                        }}
                    />
                </div>

            </motion.div>

            <div className={"w-full h-full absolute inset-0 "}>

                <Leva/>
                <Canvas className={`w-full h-full ${isRotating ? 'cursor-grabbing' : 'cursor-grab'} }`}>
                    <PerspectiveCamera makeDefault position={[0, 0, 25]}/>

                    <Suspense fallback={<CanvasLoader/>}>
                        <group
                            scale={isMobile ? 0.75 : 1}
                        >
                            <Office
                                scale={[1.75, 1.5, 1.5]}
                                position={[0.56, -4, 11.2]}
                                rotation={[0.19, -3.5, 0]}
                                isRotating={isRotating}
                                setIsRotating={setIsRotating}

                            />
                            <AirPlane
                                scale={[0.0008, 0.0008, 0.0008]}
                                position={[-1.6, -1, 19, 9]}
                                rotation={[0.18, -1.6, 0]}
                                isRotating={isRotating}
                            />
                        </group>
                    </Suspense>
                    <ambientLight color={"accent-amber-400"} intensity={1} position={[0, 0, 0]}/>
                    <directionalLight color={"white"} position={[3, 10, 3]} intensity={3}/>
                </Canvas>
            </div>
        </section>
    )
}
export default SectionWrapper(Hero, "home");
