import React from "react";
import Slider from "react-slick";
import brand1 from '../assets/Car brand logo/1.png'
import brand2 from '../assets/Car brand logo/2.png'
import brand3 from '../assets/Car brand logo/3.png'
import brand4 from '../assets/Car brand logo/4.png'
import brand5 from '../assets/Car brand logo/5.png'
import brand6 from '../assets/Car brand logo/6.png'
import brand7 from '../assets/Car brand logo/7.png'
import brand8 from '../assets/Car brand logo/8.png'
import brand9 from '../assets/Car brand logo/9.png'
import brand10 from '../assets/Car brand logo/10.png'
import brand11 from '../assets/Car brand logo/11.png'
import brand12 from '../assets/Car brand logo/12.png'
import brand13 from '../assets/Car brand logo/13.png'
import brand14 from '../assets/Car brand logo/14.png'

function CarBrandUse() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  let image = [
    brand1,brand2,brand3,brand4,brand5,brand6,brand7,brand8,brand9,brand10,brand11,brand12,brand13,brand14,
  ]
  return (
   <>
     <div className="slider-container overflow-hidden m-2  my-10 ">
        <h1 className="text-2xl md:text-3xl text-center font-bold uppercase mb-5">Car Brand Use</h1>
        <p className="text-center text-xl mb-10">Popular car brands include Toyota, BMW, Mercedes-Benz, Ford, Honda, Audi, Tesla, Chevrolet, Nissan, Volkswagen, and Hyundai, known globally.</p>
      <Slider {...settings}>
       {image.map((image,index)=>(
        <div key={index} className="flex justify-center items-center">
         <img src={image} alt={image} width='100px' />
       </div> 
       ))
         
       }       
      </Slider>
    </div>
   </>
  );
}

export default CarBrandUse;
