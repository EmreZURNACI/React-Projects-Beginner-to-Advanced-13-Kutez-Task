import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel';
import AllProducts from './AllProducts';
import { useThemeContext } from '../Contexts/ThemeContext'
import { GiCancel } from "react-icons/gi";
function Home() {
    const { theme } = useThemeContext()
    const [popup, setPopup] = useState(false)
    const showPopup = () => {
        setPopup(true)
    }
    useEffect(() => {
        setTimeout(showPopup, 5000);
    }, [])
    return (
        <div className={"h-screen " + (theme === "Light" ? "bg-white" : "bg-black")}>
            <>
                {
                    popup &&
                    (
                        <div id="popup-container">
                            <div className='relative'>
                                <div id='popup'>
                                    <p className='font-bold text-5xl capitalize text-center'>İndirim kazandınız</p>
                                </div>
                                <div className='absolute p-5 right-0 top-0 text-4xl z-50 '>
                                    <button onClick={() => setPopup(false)}>
                                        <GiCancel className='text-red-400' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </>
            <Navbar />
            <Carousel />
            <AllProducts />
        </div >
    )
}

export default Home