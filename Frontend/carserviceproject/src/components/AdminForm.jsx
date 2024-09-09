import React, { useState } from "react";

const AdminForm = () => {
  const [formData, setFormData] = useState({
    serviceName: "",
    serviceDetails: "",
    includes: Array(15).fill(""),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("include")) {
      const index = parseInt(name.split("_")[1]);
      const updatedIncludes = formData.includes.map((item, i) =>
        i === index ? value : item
      );
      setFormData({ ...formData, includes: updatedIncludes });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);
  };

  const handleReset = () => {
    setFormData({
      serviceName: "",
      serviceDetails: "",
      includes: Array(15).fill(""),
    });
  };

  return (
    <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold uppercase text-center md:text-3xl mb-5">Noida Car Helping</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">Car Service Name</label>
            <input
              type="text"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Car Service Name"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">Car Service Details</label>
            <textarea
              name="serviceDetails"
              value={formData.serviceDetails}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Car Service Details"
              rows="4"
            />
          </div>
        </div>

        {/* Second Row */}
        <div>
          <h3 className="text-lg font-bold mb-4">Car Service Includes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 15 }, (_, index) => (
              <div key={index} className="flex flex-col">
                <label className="mb-2 text-sm font-medium">
                  Field {index + 1}
                </label>
                <input
                  type="text"
                  name={`include_${index}`}
                  value={formData.includes[index]}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Field ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Submit and Reset Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="reset"
            onClick={handleReset}
            className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
