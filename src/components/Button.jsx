import { useState } from "react";

export default function Button({ children, animateText=true, color, hoverTextColor, hoverColor, border, width, textColor, height, margin, ...restProps }) {

    const [isMouseIn, setIsMouseIn] = useState(false);

    const handleMouseIn = () => {
        setIsMouseIn(true);
    }

    const handleMouseOut = () => {
        setIsMouseIn(false);
    }

    return <button
                onMouseEnter={handleMouseIn}
                onMouseLeave={handleMouseOut}
                {...restProps}
                className={`${isMouseIn && animateText ? "text-right bg-inherit" : "text-center"} px-4 transition duration-300 block font-light border border-solid rounded-full`}
                style={{
                    width: width,
                    height: height,
                    color: isMouseIn ? hoverTextColor : textColor,
                    margin,
                    borderColor: border,
                    backgroundColor: isMouseIn ? hoverColor : ""
                }}
            >
                {children}
            </button>
}