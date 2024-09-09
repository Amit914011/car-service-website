import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          {/* First Column: Company Name */}
          <div>
            <h3 className="text-lg font-semibold">Company Name</h3>
            <p className="text-gray-400">Noida Car Helpline</p>
          </div>

          {/* Second Column: Email ID */}
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-400">info@company.com</p>
          </div>

          {/* Third Column: Phone Number */}
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-400">+91 9999422993</p>
          </div>
        </div>
          <div className='flex justify-between pt-10'>
            <p>copywrite©2024. Noida Car Helping All Rights Reserved. Developed by <a href="https://techxpert.in/" className='hover:underline text-blue-600'>Techxpert</a> </p>
            <p><a href="">Pravicy Policy</a> &nbsp; | &nbsp;&nbsp; <a href="">Term & Condition</a></p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
