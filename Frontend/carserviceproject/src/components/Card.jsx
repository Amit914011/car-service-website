import React from "react";
import Slider from "react-slick";
import carimage from '../assets/Car brand logo/carcard.png'
import { RiEdit2Fill } from "react-icons/ri";

function Card() {
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  let cardetail=[
    {
        id:1,
        image:carimage,
        carName:"MG",
        carModel:"Hector Plus Diesel"
    },
  ]
  return (
   <>
    <div className="m-2 rounded-xl overflow-hidden h-28">
    <div className="slider-container w-full h-28 overflow-hidden ">
      <Slider {...settings}>
        <div className="bg-color w-full h-28 ">
         {
            cardetail.map((car,index)=>(
                <div className="flex p-2" key={index}>
           <div className="w-40 bg-white h-24 mr-6 rounded-xl overflow-hidden flex justify-center items-center">
            <img src={car.image} alt={car.image} />
           </div>
         <div className="text-xl uppercase flex justify-between w-full items-center pr-10">
            <div>
            <h1 className="font-bold text-2xl text-white">{car.carName}</h1>
            <p className="text-white">{car.carModel}</p>
            </div>
            <div>
            <RiEdit2Fill className="text-white text-2xl cursor-pointer" />
            </div>
         </div>
         </div>
            ))
         }
         
        </div>
       
      </Slider>
    </div>
    </div>
   </>

  );
}

export default Card;
