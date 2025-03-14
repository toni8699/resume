import React, {Suspense, useState} from 'react'
import {timeline} from "../constants/index.js";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Donkey from "../Components/Donkey.jsx";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import {SectionWrapper} from "../hoc";
import {motion} from "motion/react";
import {fadeIn, slideIn, textVariant} from "../utils/motion";

const Timeline = () => {
    const [animationName, setAnimationName] = useState()
    return (
        <section className={'c-space my-20'} >
            <div className={'w-full text-white-600'}>
                <motion.h3 variants={textVariant()} className={'head-text'}>
                    My Timeline
                </motion.h3>
                <motion.div initial={"hidden"} whileInView={"show"}  className={'work-container'}>
                    <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)} className={'work-canvas md:h-full h-96'}>
                        <Canvas>
                            <Suspense fallback={CanvasLoader} >
                                <Donkey
                                    scale={1.5}
                                    position={[0,-3,0]}
                                    rotation={[0,160,0]}
                                    animationName={animationName}

                                />
                            </Suspense>
                            <ambientLight intensity={1}/>
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 10, 10]}/>
                            <directionalLight position={[10, 10, 10]} intensity={1.5}/>

                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} />

                        </Canvas>
                    </motion.div>
                    <motion.div variants={fadeIn("left", "spring", 0.5, 0.75)} className={'work-content'}>
                        <div className={'sm:py-10 py-5 sm:px-5 px-2.5'}>
                            {timeline.map(({id,name,title,pos,duration,animation,icon}) => (
                                <motion.div

                                     key={id} className={'work-content_container group'} onClick={() => setAnimationName(animation)}
                                     onPointerOver = {() => setAnimationName(animation)} onPointerOut={() => setAnimationName('m_Shrek_idle3_Loop')}   >
                                    <div className={'flex flex-col h-full justify-start items-center py-2'}>
                                        <div className={'work-content_logo'}>
                                            <img className={'w-full h-full rounded-lg'} src={icon} alt={'logo'}/>
                                        </div>
                                        <div className={'work-content_bar'}/>
                                    </div>
                                    <div className={'sm:p-5 px-2.5 py-5'}>
                                        <p className={'font-bold text-white-800'}>
                                            {name}
                                        </p>
                                        <p className={'text-sm mb-5 '}>
                                            {pos} | {duration}
                                        </p>
                                        <p className={'group-hover:text-white transition ease-in-out duration-500'}>
                                            {title}

                                        </p>
                                    </div>

                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>


            </div>


        </section>
    )
}
export default SectionWrapper( Timeline, "timeline")
