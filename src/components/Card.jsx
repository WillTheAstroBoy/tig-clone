import { useState } from "react";

export default function WorkCard({ name, bullets, backgroundImg, hoverBackgroundImg }) {

    const [isMouseIn, setIsMouseIn] = useState(false);

    const handleMouseIn = () => {
        setIsMouseIn(true);
    }

    const handleMouseOut = () => {
        setIsMouseIn(false);
    }

    return (
        <div onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} className={`shrink-0 cursor-pointer z-[6] flex md:mr-5 h-[110vw] md:h-[500px] relative flex-col justify-end `} style={{backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}} >
            <div className="relative h-2/5 md:h-3/5 bg-[rgba(0,0,0,0.6)] px-6 z-[9]" >
                <button className="absolute bg-[#5ba1bd] rounded-full w-[96px] h-[39px] flex items-center justify-center text-white -top-5 p-4 border-white border border-solid" >view +</button>
                <p className="text-2xl text-white font-semibold mt-16 mb-8" >{name}</p>
                <ul className={`text-white my-4 mb-0 list-disc ml-4 text-[17px] font-light`} >
                    {bullets.map(bullet => <li>{bullet}</li>)}
                </ul>
            </div>
            <div className="z-[7] absolute top-0 left-0 right-0 bottom-0 transition duration-500" style={{backgroundImage:`url(${hoverBackgroundImg})`, opacity: isMouseIn ? `100` : "0",  backgroundSize: "cover", backgroundRepeat: "no-repeat"}} >

            </div>
        </div>
    );
}