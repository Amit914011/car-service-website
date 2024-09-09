import React from "react";
import Slider from "react-slick";
import image1 from '../assets/Car brand logo/banner1.png'
import image2 from '../assets/Car brand logo/banner4.png'

function News() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
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
  return (
    <div className="slider-container overflow-hidden bg-blue-100 pt-10 md:px-32 px-3 py-10">
        <div className="">
            <h1 className="text-1xl md:text-3xl text-center uppercase font-bold mb-3">In The News</h1>
            <p className="text-center mb-5">Car service news reports an increase in repair complexity and higher costs due to advanced technology.</p>
        </div>
      <Slider {...settings}>
        <div className="pr-3 mb-5 ">
          <div className="h-72 border rounded-lg">
            <img src={image1} alt="" className="rounded-lg" />
            <h1 className="text-xl font-semibold">Noida Car Helping Repair Costs Continue to Outpace ICE Vehicles, Highlighting Growing Complexity in Car Services</h1>
            <p>Recent news in the car service and repair industry highlights the increasing complexity of vehicle repairs, driven by advancements in materials and technology. In 2024, automakers are using lightweight materials like aluminum and carbon fiber, making repairs more intricate and costly. The rise in electric vehicles NCHS also adds to the challenges, with EV repair costs being about 37% higher than internal combustion engine (ICE) vehicles​</p>
          </div>
        </div>
        <div  className="">
        <div className="h-72 border rounded-lg">
        <img src={image2} alt="" className="rounded-lg" />
        <h1 className="text-xl font-semibold">Complex Repairs and Higher Costs: The Future of Car Servicing Amid EV Rise</h1>
        <p>Recent developments in the car service industry emphasize increasing challenges in repairs due to the use of advanced materials and the growing presence of electric vehicles (EVs). Repair costs for EVs are significantly higher than traditional vehicles, underscoring the importance of specialized maintenance practices.</p>
</div>
        </div>
       
      </Slider>
    </div>
  );
}

export default News;
