import React from "react";
import Slider from "react-slick";
import like from '../assets/Car brand logo/like.png'
import star from '../assets/Car brand logo/5starrating.png'
import why1 from '../assets/Car brand logo/why1.png'
import why2 from '../assets/Car brand logo/why2.png'
import why3 from '../assets/Car brand logo/why3.png'
import why4 from '../assets/Car brand logo/why4.png'
function WhyChoose() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
  let cardDetails=[
    {
        id:1,
        image:why1,
        heading:"At-Home",
        text:"Convenience"
    },
    {
        id:2,
        image:why2,
        heading:"10000+ Hours",
        text:"of experience"
    },
    {
        id:3,
        image:why3,
        heading:"Car Name",
        text:"Content"
    },
    {
        id:4,
        image:why4,
        heading:"Car Name",
        text:"content"
    },
  ]
  return (
    <div className="">
    <div className="mt-12 text-1xl md:text-3xl font-bold text-center">
        Why Choose Noida Car Helpline?
    </div>
    <div className="slider-container overflow-hidden mt-8 p-3 w-full h-52 mb-5 bg-slate-50">
      <Slider {...settings}>
        {cardDetails.map((car,index)=>(
            <div className=" w-full h-52  p-10" kay={index}>
            <div className="border border-black rounded-xl h-32 flex justify-center items-center">
            <div><img src={car.image} width='100px' alt="" /></div>
            <div>
                <h1>{car.heading}</h1>
                <p>{car.text}</p>
            </div>
            </div>
            </div>
        ))
           
        }
        
        
      </Slider>
    </div>
    <section className="flex items-center justify-center px-10 md:p-0 ">
      {/* First Column */}
      <div className=" w-72">
        <img 
          src={star} 
          alt="First Column Image" 
          className="md:w-[200px] w-[100px]"       />
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold text-gray-800 mb-2">5 Star Rating</h2>
         
        </div>
      </div>

      {/* Second Column */}
      <div className="">
        <img 
          src={like} 
          alt="Second Column Image" 
          className="md:w-[200px] w-[100px]"
        />
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold text-gray-800 mb-2">10000+</h2>
         
        </div>
      </div>
    </section>
    </div>
  );
}

export default WhyChoose;
