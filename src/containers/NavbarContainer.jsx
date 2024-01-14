import { Link } from "../components";

import closeIcon from '../assets/images/CloseIcon.png';
import logo from '../assets/images/logo.png';

export default function Navbar({isItOpen, handleToggleNavbar}) {
    return (
        <nav className={`z-[999] fixed top-0 left-0 right-0 h-[95vh] px-8 bg-gradient-to-b from-[#18303a] via-[#2f6175] to-[#5ba1bd] transition duration-500 ${isItOpen ? "translate-y-0" : "-translate-y-[95vh]"}`} >
            <div className="mb-24 flex justify-between" >
                <img className="w-[90px] h-[87px]" src={logo} alt="Tig logo" />
                <button onClick={() => handleToggleNavbar(false)} className="cursor-pointer h-28 px-5  flex items-center justify-center bg-[#488098]" >
                    <img className="w-10" src={closeIcon} alt="close" />
                </button>
            </div>
            <div className="flex gap-y-3 flex-col items-start" >
                <Link>home</Link>
                <Link>about us</Link>

                <Link>
                    service
                    <span className="text-[#488098] ml-3 inline-block" >+</span>
                </Link>
                <Link>portfolio</Link>

                <Link>our heritage</Link>
                <Link>blog</Link>

                <Link>get in touch</Link>
            </div>

        </nav>
    );
}