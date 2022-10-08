import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
function Sidebar() {
    return (
        <>
            <div className='   h-screen  bg-[#FAFAFA]'>

                <div className='pt-24  flex justify-center'>
                    <img width={200} height={200} src="https://www.home.llc/guide/nikfiles/uploads/2021/07/homellc-Logo.png" alt="logo" />
                </div>
                <div className='px-7 mt-40' >
                    <p className='font-bold text-xs text-center '>Insights on real state</   p>
                    <hr className='my-7' />
                    <p className=' font-bold text-[14px] pb-3 transition duration-600 hover:text-red-400 cursor-pointer'>NATIONAL INSIGHTS</p >
                   
                    <p className=' font-bold text-[14px] transition duration-600 hover:text-red-400 cursor-pointer'>NATIONAL INSIGHTS</p >
                    <hr className='mt-7' />

                    <AiOutlineSearch size={16} className="mx-auto mt-8"/>

                </div>
            </div>
        </>
    )
}

export default Sidebar