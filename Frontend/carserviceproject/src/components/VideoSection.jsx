import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const VideoPopup = ({ videoUrl, onClose }) => {
  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="text-red-500 text-2xl absolute top-4 right-4"
        >
          &times;
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={videoUrl}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>,
    document.body
  );
};

const VideoSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center bg-gray-100 p-6">
        {/* Top Section: Heading and Paragraph */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">How Do We Do It?</h1>
          <p className="text-lg text-gray-700 mt-2">At home at your convenience</p>
        </div>

        {/* Video and Text Section */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Column: Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4">
            At Noida Car Helping, we understand that life is busy and finding time to visit a workshop can be challenging. That's why we bring our top-notch car service and repair directly to your doorstep. Here’s how we make it easy for you:
            </p>
            <p className="text-lg text-gray-700">
            1. Convenient Scheduling: Simply book an appointment through our website or call us, and choose a time that fits your schedule. We offer flexible slots to ensure that our services are available when you need them.
              <br/>
            2. Expert Technicians: Our team of skilled and certified technicians arrives fully equipped to handle a wide range of car services, from routine maintenance to complex repairs. With years of experience and the latest tools, we ensure your vehicle gets the care it deserves.
            </p>
          </div>

          {/* Second Column: Video Thumbnail */}
          <div className="flex justify-center items-center">
            <div className="relative cursor-pointer" onClick={handleOpenPopup}>
              <img
                src="https://via.placeholder.com/800x450"
                alt="Video Thumbnail"
                className="rounded-lg shadow-lg w-full"
              />
              <button className="absolute inset-0 flex items-center justify-center text-white text-5xl">
                ▶
              </button>
            </div>
          </div>
        </div>

        {isPopupOpen && (
          <VideoPopup
            videoUrl="https://www.youtube.com/embed/your-video-id"
            onClose={handleClosePopup}
          />
        )}
      </section>
    </>
  );
};

export default VideoSection;
