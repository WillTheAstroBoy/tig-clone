import { useState } from "react";

export default function ServiceCard({ name, color, bullets, backgroundImg }) {

    const [ isMouseIn, setIsMouseIn ] = useState(false);

    const handleMouseIn = () => {
        setIsMouseIn(true);
    }

    const handleMouseOut = () => {
        setIsMouseIn(false);
    }
    
    return (
        <div onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} style={{ backgroundColor: color }} className="relative px-10 mb-5 pb-12 overflow-hidden">
            <p className="text-4xl z-[9] text-white font-semibold mt-44 mb-8" >{name}</p>
            <p className={`text-white mt-14 z-[9] text-3xl font-semibold transition duration-300 ${isMouseIn ? "-translate-y-8" : "translate-y-0"}`} >service</p>
            <ul className={`text-white transition duration-300 ${isMouseIn ? "-translate-y-8" : "translate-y-0"} my-4 list-disc ml-4 text-[17px] font-light`} >
                {bullets.map(bullet => <li>{bullet}</li>)}
            </ul>
            <img className="z-[1] absolute -top-20 -right-24 -rotate-[5deg] object-contain w-3/4 h-3/4" src={backgroundImg} />
        </div>
    );
}