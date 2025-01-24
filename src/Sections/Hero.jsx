import React, {Suspense, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera,} from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";

import Office from "../Components/Office.jsx";
import AirPlane from "../Components/AirPlane.jsx";


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
        <section className={"min-h-screen w-full flex flex-col relative mt-20"}>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 mb-14">
                <p className={"sm:text-2xl text-xl font-medium font-generalsans text-white text-center "}>Hi I'm
                    Khang <span className={"waving-hand"}>👋🏼</span></p>
                <h2 className={"text-gray_gradient sm:text-6xl text-4xl font-semibold font-generalsans text-center"}>And
                    I love programming</h2>
            </div>

            <div className={"w-full h-full absolute inset-0 "}>

                <Leva/>
                <Canvas className={`w-full h-full ${isRotating ? 'cursor-grabbing' : 'cursor-grab'} }`}>
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 25]}/>=
                        {/*<Butterfly*/}
                        {/*    scale={[0.0075, 0.0075, 0.0075]}*/}
                        {/*    // position={[-6.7,-5.5,10]}*/}
                        {/*    position={isMobile ? [-4, -5.5, 12] : [-6.7, -5.5, 10]}*/}
                        {/*    // rotation={[-4.9,3.8,3.2]}*/}
                        {/*    rotation={[1.11, 2.87, -3.3]}*/}
                        {/*/>*/}
                        <Office
                            scale={[1.75, 1.5, 1.5]}
                            position={[0.56, -4, 11.2]}
                            rotation={[0.19, -3.5, 0]}
                            isRotating={isRotating}
                            setIsRotating={setIsRotating}

                        />
                        <AirPlane
                            scale={[0.00075, 0.00075, 0.00075]}
                            position={[-1.6, -1, 16, 7]}
                            rotation={[0.18, -1.6, 0]}
                            isRotating={isRotating}


                        />
                        <ambientLight color={"accent-amber-400"} intensity={1} position={[0, 0, 0]}/>
                        <directionalLight color={"white"} position={[3, 10, 3]} intensity={3}/>

                    </Suspense>

                </Canvas>xx


            </div>
        </section>
    )
}
export default Hero
