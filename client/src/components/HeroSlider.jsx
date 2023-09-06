import {React, useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
import slider1 from "../assets/Images/Hero Slider/slider-1.jpg"
import slider2 from "../assets/Images/Hero Slider/slider-2.jpg"
import slider3 from "../assets/Images/Hero Slider/slider-3.jpg"

const HeroSlider = () => {
    const SliderImages = [
        {
            slider:slider1
        },
        {
            slider:slider2
        },
        {
            slider:slider3
        },
    ];
    const [activeSlide, setActiveSlide] = useState(0);
    const prevSlide = ()=>{
        const isFirstSlide = activeSlide === 0;
        const newSlider = isFirstSlide ? SliderImages.length - 1 : activeSlide - 1;
        setActiveSlide(newSlider);
    }
    const nextSlide = ()=>{
        const isLastSlide = activeSlide === SliderImages.length - 1;
        const newSlider = isLastSlide ? 0 : activeSlide + 1;
        setActiveSlide(newSlider); 
    }
    const goToSlide = (slideIndex)=>{
        setActiveSlide(slideIndex)
    }
  return (
    <div className="max-w-[1800px] h-[550px] w-full relative group">
        <div style={{backgroundImage: `url(${SliderImages[activeSlide].slider})`}} className="w-full h-full bg-center bg-cover duration-500">
            {/* left arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>
            {/* right arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>

        </div>
        <div className="flex top-4 justify-center py-2">
            {SliderImages.map((slide, slideIndex) =>(
                <div key={slideIndex} onClick={()=> goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                    <RxDotFilled/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HeroSlider