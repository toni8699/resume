import 'react'
import {useState} from "react";
import {navLinks} from "../constants/index.js";

const NavItems = () => {
    return (
        <ul className={"nav-ul"}>
            {navLinks.map((link) => (
                <li key={link.id} className={"nav-li"}>
                    <a href={link.href} className={"nav-li_a"}
                       onClick={ () =>{}}>
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    )
}
const NavBar = () => {
        const [isOpen,setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(prevState => !prevState);
    }

    return (
        <header id={"navbar"} className={"fixed top-0 left-0 right-0 z-50" +
            "bg-black/30 text-white"}>
            <div className={"max-w-7xl mx-auto "}>
                <div className={"flex justify-between items-center" +
                    " py-5 mx-auto  c-space"}>
                    <a href={"./"} >
                        <img src ={"assets/monogram-hq.svg"} alt={"logo"} className={'w-12 h-12 m-0 object-contain hover:scale-150'}/>
                        {/*<h3 className={"font-handwriting gradient-text hover:text-white"}> Khang Le</h3>*/}
                    </a>
                    <button onClick={toggleMenu} className={"sm:hidden flex text-neutral-400 hover:text-white focus:outline-none"} >
                        <img src ={ isOpen? "assets/cancel.svg":"assets/menu-1.svg"} alt="menu icon"
                        className={"w-6 h-6 hover:scale-150 " }/>
                    </button>
                    <nav className ="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>


            </div>
            <div className={`nav-sidebar ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <nav>
                        <NavItems />
                    </nav>
            </div>
        </header>
    )
}
export default NavBar
