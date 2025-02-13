import React, {useState} from 'react'
import Globe from "react-globe.gl";
import MyGlobe from "../Components/MyGlobe.jsx";
import {motion} from "motion/react";
import { fadeIn, textVariant } from "../utils/motion";
import {staggerContainer} from "../utils/motion";
import {SectionWrapper} from "../hoc";
import {useScroll} from "motion/react";

const About = () => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('lehoaikhang8699@gmail.com');
        setCopied(true);
        setTimeout( () => {
            setCopied(false);
        }, 5000);
    }
    const { scrollYProgress } = useScroll();
    const delay = Math.pow((scrollYProgress - 100) / 100, 2) * 10;

    return (
       <section  id ={"about"} className={'c-space my-20'}>
           <motion.div variants={textVariant()}>
               <h3 className={'head-text mb-7'}> About Me</h3>
           </motion.div>
           <div  className={'grid md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-4 grid-cols-1 gap-5 h-full'}>
               <motion.div variants={fadeIn("right", "spring", delay, 0.75)} className={'col-span-1 xl:row-span-2 '}>
                   <div className={'grid-container '}>
                       <img src={'/MyFace.JPEG'} className={"rounded-full w-full object-fit sm:h=[276px] h-fit"}/>
                       <div>
                           <p className={'grid-headtext'}>Hi, I'm Khang</p>
                           <p className={'grid-subtext'}>
                               A third-year Computer Science student at
                               <a target={"_blank"} className={"hover:text-white "} href={"https://en.wikipedia.org/wiki/McGill_University"}>
                               McGill University</a> in Canada, with interests ranging from optimizing low-level systems to creating
                               interactive web applications. </p>
                       </div>
                   </div>
               </motion.div>
               <motion.div variants={fadeIn("left", "spring", delay, 0.75)} className={'col-span-1 xl:row-span-2 '}>
                   <div className={'grid-container'}>
                       <div
                           className={" sm:h-[276px] xl:h-[329px] object-contain  h-fit flex align-center justify-center flex-col"}>
                           <div className="flex align-center justify-between">

                               <img className={"w-14 h-14"} src="https://techstack-generator.vercel.app/js-icon.svg"
                                    alt="icon"/>
                               <img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon"
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
                           <p className={'grid-headtext'}>Technologies</p>
                           <p className={'grid-subtext'}>
                               Experienced in multiple programming languages and web development
                                   frameworks.
                               Proficient in
                                   version control, development tools, and working across various platforms.</p>

                       </div>
                   </div>
               </motion.div>
               <motion.div  variants={fadeIn("right", "spring", delay, 0.75)} className={"col-span-1 xl:row-span-2"}>
                   <div className={'grid-container'}>
                       <div className={'rounded-3xl w-full sm:h-[326px] h-fit flex align-center justify-center'}>
                           <MyGlobe/>
                       </div>
                       <div className={''}>
                           <p className={'grid-headtext'}>
                               Location
                           </p>
                           <p className={'grid-subtext'}>
                               I grew up in Vietnam but you can find me in Montreal during most of the year. I also travel
                                  frequently to other cities in Canada and the US to visit friends and family.
                           </p>
                       </div>

                   </div>
               </motion.div>
               <motion.div variants={fadeIn( "left", "spring", delay, 0.75)} className={"xl:col-span-2 xl:row-span-2 sm:col-span-1"}>

                   <div className={'grid-container'}>
                       <p className={'grid-headtext'}>
                           Hobbies
                       </p>
                       <div>
                           <p className={'grid-subtext mb-1'}>
                               <p> When I'm not at a computer, you can find me practicing the piano.
                                   I’ve also dedicated a fair share of time to (clumsily) tuning
                                   the piano.
                                   Here's me playing the piano that I tuned myself, as for the excuse as to why it sounds
                                   like a mess, check out <a className={"font-bold hover:text-white"} target={"_blank"} href={"https://www.sciencealert.com/watch-the-physics-of-music-and-why-it-s-impossible-to-tune-a-piano"}>this</a> video
                                   article on why it is impossible to perfectly tune a piano.
                               </p>
                           </p>
                           <div className={'flex sm:flex-row flex-col justify-between gap-5'}>
                               <div className={'flex flex-row gap-5'}>
                                   <video src={"Video/Piano2.mov"} controls
                                          className={'w-80 object-contain border border-black-200 rounded-lg'}>
                                   </video>

                               </div>
                               <div className={'flex flex-row gap-5'}>
                                   <video src={"Video/Piano3.mov"} controls
                                          className={'w-80 object-contain border border-black-200 rounded-lg'}>
                                   </video>
                               </div>

                           </div>


                       </div>

                   </div>

               </motion.div>
               <motion.div  variants={fadeIn("right", "spring", delay, 0.75)} className={"xl:col-span-1 xl:row-span-1"}>
                   <div className="grid-container">
                       <div className={'space-y-2 mt-5'}>
                           <p className={'grid-subtext font-medium text-center'}>
                               Contact me
                           </p>
                           <p className={"grid-subtext"}>
                           If you want to chat about a project, abstract math, classical music, literature,
                               the meaning of life, or just want to say hi, feel free to reach out!
                           </p>
                           <div className={'copy-container'} onClick={handleCopy}>
                               <img src={copied ? '/assets/tick.svg' : '/assets/copy.svg'}/>
                               <p className={'grid-subtext gradient-text font-medium hover:text-white'}>
                                   lehoaikhang8699@gmail.com
                               </p>
                           </div>
                       </div>
                   </div>

               </motion.div>
               <motion.div  variants={fadeIn("left", "spring", delay, 0.75)} className={"xl:col-span-1 xl:row-span-1"}>
                   <div className="grid-container items-center">
                       <div>
                           <p className={'grid-subtext font-medium text-center'}>Useful Links</p>
                           <div className={'flex flex-row justify-center items-center gap-5 mt-20'}>
                               <a target = {"_blank"} href={"https://github.com/toni8699"}>
                                   <img src={'/assets/github.svg'} className={'h-7 hover:scale-150'}/>
                               </a>
                               <a target ="_blank" href={"https://www.linkedin.com/in/le-khang-455299190/"}>
                                   <img src={'/assets/Linkedin.png'} className={'h-7 hover:scale-150'}/>
                               </a>
                               <a target ="_blank" href={"https://www.instagram.com/hoaikhang_le/"}>
                                   <img src={'/assets/instagram.png'} className={'h-7 hover:scale-150'}/>

                               </a>
                           </div>

                       </div>
                   </div>

               </motion.div>

           </div>


       </section>
    )
}
// export default About
export default SectionWrapper(About, "about");
