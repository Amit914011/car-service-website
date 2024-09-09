import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../assets/Car brand logo/banner1.png'
import banner2 from '../assets/Car brand logo/banner7.png'
import banner3 from '../assets/Car brand logo/banner3.png'
import banner4 from '../assets/Car brand logo/banner8.png'
// import banner5 from '../assets/Car brand logo/banner5.png'
// import banner6 from '../assets/Car brand logo/banner6.png'
// import banner7 from '../assets/Car brand logo/banner7.png'

import Card from './Card.jsx'
import WhyChoose from './WhyChoose.jsx'
import AtHomeCarService from './AtHomeCarService.jsx'
import CarBrandService from './CarBreandUse.jsx'
import News from './News.jsx'
import Testimonial from './Testimonial.jsx'
import CarBrandUse from './CarBreandUse.jsx'
import VideoSection from './VideoSection.jsx'
import Faqs from "./Faqs.jsx";


function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed:500,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  let carBannerDetails=[
    {id:1,
      image:banner1,
    servecName:'At Home',
    carService:"Car Service",
    carDetail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cum soluta, iusto nulla non provident.",
    button:'Book Now',},
    {id:1,
      image:banner2,
      servecName:'At Home',
      carService:"Car Grooming",
      carDetail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cum soluta, iusto nulla non provident.",
      button:'Book Now',},
      {id:1,
        image:banner3,
        servecName:'At Home',
        carService:"Car Grooming",
        carDetail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cum soluta, iusto nulla non provident.",
        button:'Book Now',},
        {id:1,
          image:banner4,
          servecName:'At Home',
          carService:"Car Grooming",
          carDetail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cum soluta, iusto nulla non provident.",
          button:'Book Now',}

  ]
  return (
    <>
    <div className="slider-container h-[80vh] overflow-hidden px-2 rounded-xl">
     
     <Slider {...settings}>
     { carBannerDetails.map((car,index)=>(
       <div className="h-[80vh] rounded-xl  overflow-hidden" key={index} >
         <div className="p-10 h-[80vh]" style={{backgroundImage:`url(${car.image})`, backgroundRepeat:"no-repeat",backgroundPosition:"center" , backgroundSize:"cover"}}>
           <h1 className="text-2xl text-white font-bold">{car.servecName}</h1>
           <h1 className="text-4xl text-white font-bold">{car.carService}</h1>
           <p className="w-72 text-white text-xl border border-dotted p-2">{car.carDetail}</p>
           <button className="btn w-28 bg-white  text-black font-bold mt-12 py-2 text-xl cursor-pointer rounded box-shadow">{car.button}</button>
         </div>
       </div> ))
       }
     </Slider>

   
   </div>
   <Card/>
   <WhyChoose/>
    <AtHomeCarService/>
    <CarBrandService/>
    <News/>
    <Testimonial/>
    <CarBrandUse/>
    <VideoSection/>
    <Faqs/>
    </>
  );
}

export default CenterMode;
