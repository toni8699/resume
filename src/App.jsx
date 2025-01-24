import React from 'react'
import NavBar from "./Sections/NavBar.jsx";
import Hero from "./Sections/Hero.jsx";
import About from "./Sections/About.jsx";
import Projects from "./Sections/Projects.jsx";

const App = () => {
    return (
        <main className={"max-w-7xl mx-auto"}>
            <NavBar />
            <Hero/>
            <About/>
            <Projects/>
        </main>
    )
}
export default App
