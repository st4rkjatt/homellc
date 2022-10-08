import React from 'react'
import { AiOutlineInstagram, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
function Navbar() {
  return (
    <>
      
      <div className='flex md:p-8  p-3 flex-row justify-between items-center w-full'>


        <div class=" md:w-[520px] ">
          <div class="input-group relative flex flex-row items-stretch w-full ">
            <input type="search" class="form-control relative flex-auto  block w-full px-3 py-1 md:py-2 text-base font-normal text-gray-700 bg-[#F5F5F5] bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700  focus:border-[#0f0f0f] focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
            <button class="btn px-4 py-1 md:py-2.5 bg-[#EF5373] text-white font-medium text-xs leading-tight uppercase  shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>



          </div>

        </div>

        <div className='grid grid-cols-4 md:gap-4  gap-2 justify-between items-center '>
          <AiFillFacebook className="text-2xl md:text-[50px]" color='#EF5373' />
          <AiOutlineInstagram  className="text-2xl md:text-[50px]" color='#EF5373' />
          <AiOutlineTwitter className="text-2xl md:text-[50px]" color='#EF5373' />
          <FaLinkedinIn  className="text-2xl md:text-[50px]" color='#EF5373' />
        </div>


      </div>
    <hr className='mt-4' />

    </>
  )
}

export default Navbar