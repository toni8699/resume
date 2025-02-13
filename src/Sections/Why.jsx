import React from 'react'

import {fadeIn, slideIn, textVariant} from "../utils/motion";
import {SectionWrapper} from "../hoc";
import {motion} from "motion/react";

const Why = () => {
    return (
        <section className={'c-space my-20'}>
            <motion.h3 variants={textVariant()} className={'head-text'}> Why the gap?</motion.h3>
            <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)}  className={'grid-container mt-7'}>
                <motion.p className={'text-white-600'}>
                    In Fall 2020, as the world shifted online, I returned to Vietnam, uncertain of what the future held. When in-person classes resumed in 2021, I stayed behind—travel restrictions made leaving difficult, but more than that, I felt the weight of family, of home, of a life pulling me in a different direction.
                    In the years that followed, I drifted from math and science, searching for meaning elsewhere—restoring pianos, teaching music, journeying to remote villages to share languages. And somewhere in that search, I found clarity. In 2024, with a heart full of purpose, I was given the chance to return, ready to begin again.
                </motion.p>

            </motion.div>


        </section>
    )
}
export default SectionWrapper (Why, "why")
