import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ViewCarData() {

  let [viewData,setViewData]=useState([])

  async function getData() {
    let result=await axios.get('http://localhost:5000/api/getData')
    setViewData(result.data)
  }
  console.log(viewData)
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className='p-10'>
      <h1 className='text-xl md:text-3xl text-center font-bold uppercase underline text-blue-900 mb-3'>View Data</h1>
      <Link to='/admin/viewalldata'>Go to back</Link>
      {
        viewData.map((data,index)=>(
          <div className='w-full h-auto shadow-md border rounded-lg md:flex justify-around items-center mb-5' key={index}>
        <div className='py-3 w-[30%]'>
          <h1 className='text-2xl font-bold'>{data.carServiceName}</h1>
          <p>{data.carServiceDetails}</p>
          <p>{data.field1}</p>
          <p>{data.field2}</p>
          <p>{data.field3}</p>
          <p>{data.field4}</p>
        </div>
        <div className='py-3 w-[30%]'>
          <p>{data.field5}</p>
          <p>{data.field6}</p>
          <p>{data.field7}</p>
          <p>{data.field8}</p>
          <p>{data.field9}</p>
          <p>{data.field10}</p>
        </div>
        <div className='py-3 w-[30%]'>
          <p>{data.field11}</p>
          <p>{data.field12}</p>
          <p>{data.field13}</p>
          <p>{data.field14}</p>
          <p>{data.field15}</p>
        </div>
      </div>
        ))
      }
    </div>
  )
}
