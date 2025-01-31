import React from 'react'
import NavBar from "./Sections/NavBar.jsx";
import Hero from "./Sections/Hero.jsx";
import About from "./Sections/About.jsx";
import Projects from "./Sections/Projects.jsx";
import Why from "./Sections/Why.jsx";
import Contact from "./Sections/Contact.jsx";
import Footer from "./Sections/Footer.jsx";
import TimeLine from "./Sections/Timeline.jsx";

const App = () => {
    return (
        <main className={"max-w-7xl mx-auto"}>
            <NavBar />
            <Hero/>
            <About/>
            <Projects/>
            <TimeLine/>
            <Why/>
            <Contact/>
            <Footer/>
        </main>
    )
}
export default App
