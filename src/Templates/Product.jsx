import React from 'react'
import { NavLink } from 'react-router-dom'
import { zoomIn, zoomOut } from '../Functions/ProductConfig'
import { useThemeContext } from '../Contexts/ThemeContext'

const handleTooltip = (element) => {
    switch (element.target.classList[0]) {
        case "bg-yellow_gold":
            document.querySelectorAll(".tooltip")[parseInt(String(element.target.parentElement.parentElement.parentElement.parentElement.children[1].children[0].textContent).split(" ")[2]) - 1].textContent = "Yellow Gold";
            break;
        case "bg-white_gold":
            document.querySelectorAll(".tooltip")[parseInt(String(element.target.parentElement.parentElement.parentElement.parentElement.children[1].children[0].textContent).split(" ")[2]) - 1].textContent = "White Gold";
            break;
        case "bg-rose_gold":
            document.querySelectorAll(".tooltip")[parseInt(String(element.target.parentElement.parentElement.parentElement.parentElement.children[1].children[0].textContent).split(" ")[2]) - 1].textContent = "Rose Gold";
            break;
        default:
            break;
    }
}
const handleCloseTooltip = (element) => {
    document.querySelectorAll(".tooltip")[parseInt(String(element.target.parentElement.parentElement.parentElement.parentElement.children[1].children[0].textContent).split(" ")[2]) - 1].textContent = null
}
function Product({ image, ring_name, price, set }) {
    const { theme } = useThemeContext()
    return (
        <div className='image-item'>
            <NavLink to={`/${String(image).split("/")[3].split(".")[0].split("_")[0].split("-")[0]}`}>
                <div className='zoom-container' onMouseMove={(e) => zoomIn(e)} onMouseLeave={(e) => zoomOut(e)}>
                    <img src={image} alt="" className='ring-images zoom-image cursor-zoom-in rounded-lg' />
                </div>
            </NavLink>
            <div className='flex flex-col items-start justify-center'>
                <NavLink to={`/${String(image).split("/")[3].split(".")[0].split("_")[0].split("-")[0]}`}>
                    <h2 className={`font-MontserratAlternates font-medium punto-15 ring-desc ` + (theme === "Light" ? "text-black" : "text-white")}>{ring_name}</h2>
                    <p className={`font-MontserratAlternates font-medium punto-17 ring-desc ` + (theme === "Light" ? "text-black" : "text-white")}>{price}</p>
                </NavLink>
                <div className='flex'>
                    <button className={`font-avenir-book color-types ` + (theme === "Light" ? "color-types-dark" : "color-types-light")} >
                        <div className='bg-yellow_gold rounded-full w-5 h-5' onClick={() => set(2)} onMouseEnter={handleTooltip} onMouseLeave={handleCloseTooltip}></div>
                    </button>
                    <button className={`font-avenir-book color-types ` + (theme === "Light" ? "color-types-dark" : "color-types-light")}>
                        <div className='bg-white_gold rounded-full w-5 h-5' onClick={() => set(1)} onMouseEnter={handleTooltip} onMouseLeave={handleCloseTooltip}></div>
                    </button>
                    <button className={`font-avenir-book color-types ` + (theme === "Light" ? "color-types-dark" : "color-types-light")}>
                        <div className='bg-rose_gold rounded-full w-5 h-5' onClick={() => set(0)} onMouseEnter={handleTooltip} onMouseLeave={handleCloseTooltip}></div>
                    </button>
                </div>
                <div className='mt-2'>
                    <p className={`punto-12 font-avenir-book text-black tooltip ` + (theme === "Light" ? "text-black" : "text-white")}></p>
                </div>
            </div>
        </div>
    )
}

export default Product