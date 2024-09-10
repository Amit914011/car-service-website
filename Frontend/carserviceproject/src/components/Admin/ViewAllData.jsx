import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ViewAllData() {
       let [viewData,setViewData]=useState([])
       async function getData() {
        let result=await axios.get('http://localhost:5000/api/getData')
        setViewData(result.data)
      }
      // console.log(viewData)
useEffect(()=>{
  getData()
},[viewData])

function deleteData(id){
  axios.delete(`http://localhost:5000/api/deleteData/${id}`)
  getData()
}
  return (
    <div>
      
      <div className="container mx-auto px-4 py-8">
      {/* <h2 className="text-2xl font-bold mb-4">Matrimonial Admin Panel</h2> */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">Car Service Name</th>
              <th className="px-4 py-2">Car Details</th>
              <th className="px-4 py-2">Field 1</th>
              <th className="px-4 py-2">Field 2</th>
              <th className="px-4 py-2">Field 3</th>
              <th className="px-4 py-2">Field 4</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {viewData.map((user, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{user.carServiceName}</td>
                <td className="px-4 py-2">{user.carServiceDetails}</td>
                <td className="px-4 py-2">{user.field1}</td>
                <td className="px-4 py-2">{user.field2}</td>
                <td className="px-4 py-2">{user.field3}</td>
                <td className="px-4 py-2">{user.field4}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <Link to='/admin/viewData' className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md hover:bg-blue-600">
                    View
                  </Link>
                  <Link to={`/admin/updatedata/${user.id}`} className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-md hover:bg-green-600"
                  >
                    Update
                  </Link>
                  <button 
                  className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-md hover:bg-red-600"
                  onClick={()=>deleteData(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    </div>
  )
}
