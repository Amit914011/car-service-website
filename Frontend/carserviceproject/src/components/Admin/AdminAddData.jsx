import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AdminAddData = () => {
  const [formData, setFormData] = useState({
    carServiceName: "",
    carServiceDetails: "",
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
    field7: "",
    field8: "",
    field9: "",
    field10: "",
    field11: "",
    field12: "",
    field13: "",
    field14: "",
    field15: "",
  });

  let naviget=useNavigate()
 let {carServiceName,carServiceDetails,field1,field2,field3,field4,field5,field6,field7,field8,field9,field10,field11,field12,field13,field14,field15}=formData

  function handleChange(e){
    setFormData({...formData,[e.target.name]:e.target.value})
  }
async function handleSubmit(e) {
  e.preventDefault()
  await axios.post('http://localhost:5000/api/saveData',formData),
  naviget('/admin/viewalldata')
}

  const handleReset = () => {
    setFormData({
      carServiceName: "",
      carServiceDetails: "",
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
      field6: "",
      field7: "",
      field8: "",
      field9: "",
      field10: "",
      field11: "",
      field12: "",
      field13: "",
      field14: "",
      field15: "",
    });
    setErrors({});
  };

  return (
    <div className="container mx-auto p-4">
      <form method="post"  className="grid grid-cols-1 gap-4">
        {/* Car Service Name Field */}
        <div className="flex flex-col col-span-1 md:col-span-2">
          <label className="mb-2 text-sm font-medium">Car Service Name</label>
          <input
            type="text"
            name="carServiceName"
            value={carServiceName}
            onChange={handleChange}
            className={`p-2 border rounded-md focus:outline-none focus:ring-2`}
            placeholder="Car Service Name"
          />
        </div>

        {/* Car Service Details Field */}
        <div className="flex flex-col col-span-1 md:col-span-3">
          <label className="mb-2 text-sm font-medium">Car Service Details</label>
          <textarea
            name="carServiceDetails"
            value={carServiceDetails}
            onChange={handleChange}
            className={`p-2 border rounded-md focus:outline-none focus:ring-2`}
            placeholder="Car Service Details"
            rows="4"
          />
        </div>
        <div className="container mx-auto p-4 w-full">
  <form className="grid w-full grid-cols-1 md:grid-cols-3 gap-4">
    <div className="flex flex-col w-full">
      <label htmlFor="field1">Field 1</label>
      <input
        type="text"
        name="field1"
        value={field1}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
        placeholder="Field 1"
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="field2">Field 2</label>
      <input
        type="text"
        name="field2"
        value={field2}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
        placeholder="Field 2"
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="field3">Field 3</label>
      <input
        type="text"
        name="field3"
        value={field3}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
        placeholder="Field 3"
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="field4">Field 4</label>
      <input
        type="text"
        name="field4"
        value={field4}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
        placeholder="Field 4"
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="field5">Field 5</label>
      <input
        type="text"
        name="field5"
        value={field5}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
        placeholder="Field 5"
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="field6">Field 6</label>
      <input
        type="text"
        name="field6"
        value={field6}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
        placeholder="Field 6"
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="field7">Field 7</label>
      <input
        type="text"
        name="field7"
        value={field7}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
        placeholder="Field 7"
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="field8">Field 8</label>
      <input
        type="text"
        name="field8"
        value={field8}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
        placeholder="Field 8"
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="field9">Field 9</label>
      <input
        type="text"
        name="field9"
        value={field9}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
        placeholder="Field 9"
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="field10">Field 10</label>
      <input
        type="text"
        name="field10"
        value={field10}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
        placeholder="Field 10"
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="field11">Field 11</label>
      <input
        type="text"
        name="field11"
        value={field11}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
        placeholder="Field 11"
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="field12">Field 12</label>
      <input
        type="text"
        name="field12"
        value={field12}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
        placeholder="Field 12"
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="field13">Field 13</label>
      <input
        type="text"
        name="field13"
        value={field13}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
        placeholder="Field 13"
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="field14">Field 14</label>
      <input
        type="text"
        name="field14"
        value={field14}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
        placeholder="Field 14"
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="field15">Field 15</label>
      <input
        type="text"
        name="field15"
        value={field15}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
        placeholder="Field 15"
      />
    </div>

    <div className="col-span-1 md:col-span-3 flex justify-end space-x-4 mt-4">
      <button
        type="reset"
        onClick={handleReset}
        className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
      >
        Reset
      </button>
      <button
        type="submit"
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  </form>
</div>

       

       
      </form>
    </div>
  );
};

export default AdminAddData;
