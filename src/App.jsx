import React from 'react'
import NavBar from "./Sections/NavBar.jsx";
import Hero from "./Sections/Hero.jsx";
import About from "./Sections/About.jsx";
import Test1 from "./Sections/Test1.jsx";

const App = () => {
    return (
        <main className={"max-w-7xl mx-auto"}>
            <NavBar />
            <Hero/>
            <About/>
        </main>
    )
}
export default App
