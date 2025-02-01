import React, {Suspense, useState} from 'react'
import {projects} from "../constants/index.js";
import {Canvas} from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import ProjectDemo from "../Components/ProjectDemo.jsx";
import Tooltip from '@mui/material/Tooltip';

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
   const count = projects.length;
   const currentProject = projects[selectedProjectIndex];

    const handleNextProject = (direction) => {
        if (direction === 'prev') {
            setSelectedProjectIndex((prevIndex) => (prevIndex + count - 1) % count);
        } else {
            setSelectedProjectIndex((prevIndex) => (prevIndex + 1) % count);
        }
    }

    return (
        <section id={'projects'} className={"c-space my-20"}>
            <p className="head-text">
                Projects
            </p>
            <div className={"grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full"}>
                <div className={'flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl' +
                    'shadow-black-200'}>
                    <div className={"absolute top-0 right-0"}>
                        <img className={'h-96 w-full object-cover' +
                            'rounded-xl'} src={currentProject.spotlight} alt={"spotlight"}/>
                    </div>
                    <div style={currentProject.logoStyle}
                         className={'flex justify-center w-14 rounded-lg items-center p-2 '}>
                        <img className="w-10 h-10 object- shadow-sm rounded-lg"
                             src={currentProject.logo} alt={"logo"}/>
                    </div>
                    <div className={'flex flex-col text-white-600 my-600 gap-5 min-h-52'}>
                        <p className={'text-white text-2xl font-semibold'}>
                            {currentProject.title}
                        </p>
                        <p className={'animatedText'}>
                            {currentProject.desc}
                        </p>
                        <p className={'animatedText'}>
                            {currentProject.subdesc}
                        </p>

                    </div>
                    <div className={'flex flex-col gap-5'}>
                        <div className={'flex flex-col gap-5'}>
                            <p className={'text-white text-2xl font-semibold'}>
                                Technologies
                            </p>

                            <div className={'flex items-center justify-between flex-wrap gap-5'}>
                                <div className='flex items-center gap-3'>
                                    {currentProject.tags.map((tag, index) => (
                                        <Tooltip  key = {index} title={tag.name}>
                                            <div key={index} className={'tech-logo'}>
                                                <img src={tag.path} alt={tag.name}/>
                                            </div>
                                        </Tooltip>

                                    ))}
                                </div>
                                <a href={currentProject.href} target={'_blank'}
                                       className={' flex items-center gap-2 '}>
                                        <p className={' cursor-pointer text-white-600 hover:text-white'}> Link to
                                            project</p>
                                        <img src='assets/arrow-up.png' className={'h-3 w-3'}/>
                                    </a>
                            </div>
                            <div className={"flex items-center mt-7 "}>
                                <button className={'arrow-btn'} onClick={() => handleNextProject("prev")}>
                                    <img src='/assets/left-arrow.png'/>
                                </button>
                                <button className={'arrow-btn'} onClick={() => handleNextProject("next")}>
                                    <img src='/assets/right-arrow.png'/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"border border-black-200 bg-black-200 rounded-lg h-96 md:h-full"}>
                    <Canvas>
                        <ambientLight intensity={Math.PI}/>
                        <directionalLight position={[0,0,0]} intensity={5}/>
                        <Suspense fallback={<CanvasLoader/>}>
                                    <group
                                        position={[0, -3, 0]}
                                        scale={2}
                                    >
                                        <ProjectDemo
                                            texture={currentProject.texture}
                                        />

                                    </group>
                            </Suspense>

                        <OrbitControls enableZoom={false}  minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2}/>

                    </Canvas>
                </div>

            </div>


        </section>
    )
}
export default Projects
