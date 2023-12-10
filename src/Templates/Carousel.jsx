import React from 'react'
import Product from './Product'
import '../Functions/CarouselConfig'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { useRingCon } from '../Contexts/RingContext'
import { useImageCon } from '../Contexts/ImagesContext'


function Carousel() {
  const { EG009, EG012, EG115, EG094, EG074, EG075, EG020, EG022 } = useImageCon()
  const { Eg009, Eg012, Eg115, Eg094, Eg074, Eg075, Eg020, Eg022, setEg009, setEg012, setEg115, setEg094, setEg074, setEg075, setEg020, setEg022 } = useRingCon()
  return (
    <div className='container mx-auto  relative slider-container my-2'>
      <div className="slider-wrapper">
        <button id="prev-slide" className="slide-button material-symbols-rounded z-20">
          <MdOutlineArrowBackIos className='text-gray-500 font-semibold' />
        </button>
        <ul className="image-list">
          <Product image={EG115[Eg115]} ring_name={"Engagement Ring 1"} price={"$101.00 USD"} set={setEg115} />
          <Product image={EG094[Eg094]} ring_name={"Engagement Ring 2"} price={"$101.00 USD"} set={setEg094} />
          <Product image={EG074[Eg074]} ring_name={"Engagement Ring 3"} price={"$101.00 USD"} set={setEg074} />
          <Product image={EG020[Eg020]} ring_name={"Engagement Ring 4"} price={"$101.00 USD"} set={setEg020} />
          <Product image={EG009[Eg009]} ring_name={"Engagement Ring 5"} price={"$101.00 USD"} set={setEg009} />
          <Product image={EG012[Eg012]} ring_name={"Engagement Ring 6"} price={"$101.00 USD"} set={setEg012} />
          <Product image={EG022[Eg022]} ring_name={"Engagement Ring 7"} price={"$101.00 USD"} set={setEg022} />
          <Product image={EG075[Eg075]} ring_name={"Engagement Ring 8"} price={"$101.00 USD"} set={setEg075} />
        </ul>
        <button id="next-slide" className="slide-button material-symbols-rounded z-20">
          <MdOutlineArrowForwardIos className='text-gray-500 font-semibold' />
        </button>
      </div>
      <div className="slider-scrollbar">
        <div className="scrollbar-track">
          <div className="scrollbar-thumb"></div>
        </div>
      </div>
    </div>
  )
}

export default Carousel