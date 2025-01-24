import React from 'react'
import Globe from "react-globe.gl";
import MyGlobe from "../Components/MyGlobe.jsx";
// import * as data from '/Users/tony/Desktop/resume/src/datasets/ne_110m_populated_places_simple.geojson'
// import * as data from '/Users/tony/Desktop/resume/src/datasets/ne_110m_admin_0_countries.geojson'
const About = () => {

    return (
       <section className={'c-space my-20'}>
           <div className={'grid md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6 grid-cols-1 gap-5 h-full'}>
               <div className={'col-span-1 xl:row-span-3 '}>
                   <div className={'grid-container'}>
                       <img src={'/MyFace.JPEG'} className={"rounded-full w-full object-contain sm:h=[276px] h-fit"}/>
                       <div>
                           <p className={'grid-headtext'}>Hi, I'm Khang</p>
                           <p className={'grid-subtext'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                               Ab</p>
                       </div>
                   </div>
               </div>
               <div className={'col-span-1 xl:row-span-3 '}>
                   <div className={'grid-container'}>
                       <div
                           className={" sm:h-[276px] xl:h-[329px] object-contain  h-fit flex align-center justify-center flex-col"}>
                           <div className="flex align-center justify-between">

                               <img className={"w-14 h-14"} src="https://techstack-generator.vercel.app/js-icon.svg"
                                    alt="icon"/>
                               <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="icon"
                                    className={"w-14 h-14"}/>
                               <img className={"w-14 h-14"} src="https://techstack-generator.vercel.app/react-icon.svg"
                                    alt="icon"/>

                           </div>
                           <div className={"flex align-center justify-between"}>

                               <img src="https://techstack-generator.vercel.app/csharp-icon.svg" alt="icon"
                                    className={"w-14 h-14"}/>
                               <img className={"w-14 h-14"} src="https://techstack-generator.vercel.app/cpp-icon.svg"
                                    alt="icon"/>
                               <img className={"w-14 h-14"} src="https://techstack-generator.vercel.app/java-icon.svg"
                                    alt="icon"/>

                               {/*<img src="https://techstack-generator.vercel.app/github-icon.svg" alt="icon" width={65}*/}
                               {/*     style={{width: 65, height: 65, marginRight: 50, marginBottom: 0}}/>*/}

                           </div>
                           <div className={" flex align-center justify-between"}>
                               <img className={"w-14 h-14"} src="https://techstack-generator.vercel.app/nginx-icon.svg"
                                    alt="icon"/>
                               <img className={"w-14 h-14"} src="https://techstack-generator.vercel.app/python-icon.svg"
                                    alt="icon"/>
                               <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon"
                                    className={"w-14 h-14"}/>
                           </div>
                       </div>
                       <div>
                           <p className={'grid-headtext'}>Tech Stack</p>
                           <p className={'grid-subtext'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                           </p>
                       </div>
                   </div>
               </div>
               <div className={"col-span-1 xl:row-span-4"}>
                   <div className={'grid-container'}>
                       <div className={'rounded-3xl w-full sm:h-[326px] h-fit flex align-center justify-center'}>
                           <MyGlobe/>
                           <p className={"grid-headtext"}>
                               Lorem ipsum dolor sit amet
                           </p>
                           <p className={'grid-subtext'}>
                               Lorem ipsum dolor sit amet
                           </p>
                       </div>

                   </div>

               </div>
           </div>


       </section>
    )
}
export default About
