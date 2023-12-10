import React from 'react'
import '../Fonts/MontserratAlternates-Medium.otf'
import { useThemeContext } from '../Contexts/ThemeContext'
function AllProducts() {
    const { theme } = useThemeContext()
    return (
        <div className='container mx-auto my-2'>
            <div className='flex items-center justify-center'>
                <button type='button' className={`font-MontserratAlternates punto-17 flex items-center gap-x-2 allProducts px-4 py-2 border  rounded-xl ` + (theme === "Light" ? "border-black" : "border-white")}>
                    <svg width="34" height="34" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.50391 10.3789H10.5039" stroke={theme === "Light" ? "black" : "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.3369 11.3627H18.7349C16.9499 11.3627 15.5039 12.684 15.5039 14.3142C15.5039 15.9444 16.9509 17.2657 18.7339 17.2657H21.3369C21.4209 17.2657 21.4619 17.2657 21.4969 17.2637C22.0369 17.2313 22.4669 16.8387 22.5019 16.3458C22.5039 16.3143 22.5039 16.276 22.5039 16.2002V12.4282C22.5039 12.3524 22.5039 12.314 22.5019 12.2826C22.4659 11.7897 22.0369 11.3971 21.4969 11.3646C21.4619 11.3627 21.4209 11.3627 21.3369 11.3627Z" stroke={theme === "Light" ? "black" : "white"} strokeWidth="1.5" />
                        <path d="M21.4689 11.3627C21.3909 9.52093 21.1409 8.39148 20.3319 7.59654C19.1609 6.44348 17.2749 6.44348 13.5039 6.44348H10.5039C6.73291 6.44348 4.84691 6.44348 3.67591 7.59654C2.50391 8.74862 2.50391 10.6041 2.50391 14.3142C2.50391 18.0243 2.50391 19.8798 3.67591 21.0319C4.84691 22.1849 6.73291 22.1849 10.5039 22.1849H13.5039C17.2749 22.1849 19.1609 22.1849 20.3319 21.0319C21.1409 20.2369 21.3919 19.1075 21.4689 17.2657" stroke={theme === "Light" ? "black" : "white"} strokeWidth="1.5" />
                        <path d="M6.50391 6.44349L10.2389 4.00652C10.7642 3.67038 11.3773 3.49146 12.0039 3.49146C12.6305 3.49146 13.2436 3.67038 13.7689 4.00652L17.5039 6.44349" stroke={theme === "Light" ? "black" : "white"} strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M18.4949 14.3142H18.5049" stroke={theme === "Light" ? "black" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={`uppercase `+(theme==="Light"?"allProducts-dark":"allProducts-light text-white") }>view all products</span>
                </button>
            </div>
        </div>
    )
}

export default AllProducts