import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import test1 from '../assets/Car brand logo/test1.jfif'
import test2 from '../assets/Car brand logo/test2.jpeg'
import test3 from '../assets/Car brand logo/test3.jpg'
import test4 from '../assets/Car brand logo/test4.jpg'
import test5 from '../assets/Car brand logo/test.jpeg'
import test6 from '../assets/Car brand logo/test5.jpg'

const testimonials = [
  {
    name: 'Ravi Sharma',
    image: test2,
    text: "I had an excellent experience with Noida Car Helping. They repaired my car's AC in no time and at a very reasonable price. The service was prompt and the staff was incredibly professional. Highly recommended!"
  },
  {
    name: 'Aarti Gupta',
    image: test4,
    text: "Noida Car Helping did a fantastic job with my car’s engine tune-up. They were transparent about the costs and completed the work ahead of schedule. I’m thoroughly impressed with their service!",
  },
  {
    name: ' Sandeep Kumar',
    image: test3,
    text: "I’ve been using Noida Car Helping for my car wash and grooming needs for over a year now. Their attention to detail is unmatched, and my car always looks brand new after each service. Great job!",
  },
  {
    name: 'Priya Singh',
    image: test1,
    text: "The team at Noida Car Helping is top-notch. They fixed my car’s suspension issues quickly and efficiently. The staff was courteous, and the repair was done with utmost precision. I trust them completely with my car."
  },
  {
    name: 'Manoj Verma',
    image: test5,
    text: "I had a minor accident, and Noida Car Helping took care of the bodywork and painting. The quality of their work is impressive, and they handled everything with professionalism. My car looks as good as new!",
  },
  {
    name: ' Neha Patel',
    image: test6,
    text: "Noida Car Helping provided excellent service when my car's transmission had issues. Their diagnostic skills are excellent, and they communicated every step of the repair process. I’m very satisfied with the outcome and their customer service.",
  },

];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-6xl mx-auto p-6 overflow-hidden">
      <h2 className="text-xl md:text-3xl font-bold text-center text-gray-800 mb-8">What Our Clients Say</h2>
      <Slider {...settings} className="text-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="testimonial-name bg-blue-500 text-white py-2 px-4 rounded-full inline-block">
                {testimonial.name}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
