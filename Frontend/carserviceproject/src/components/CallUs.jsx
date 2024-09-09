import React from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";

export default function CallUs() {
  return (
    <div>
      <div className='p-3 bg-blue-900 rounded-full hover:bg-blue-700 cursor-pointer '>
        <a href="tel:9999422993">

      <BiSolidPhoneCall className='text-3xl text-white'/>
        </a>
      </div>
    </div>
  )
}
