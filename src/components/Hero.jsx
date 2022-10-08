import React from 'react'
import { AiOutlineLink, AiOutlineTwitter, AiOutlineGooglePlus } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
function Hero() {
    return (
        <>
            <div className='w-full p-8 '>
                <div className='border-2 h-1/2 w-full'>
                    <img className='object-fill max-h-[600px] w-full ' src="https://www.home.llc/guide/nikfiles/uploads/2021/08/pedro-lastra-Nyvq2juw4_o-unsplash-scaled.jpg" alt="" />


                </div>

                <div className='md:w-[65%] w-[50%]  mx-auto  bg-white relative  md:bottom-28 bottom-16 py-4 md:py-10'>
                <div className=''>
                        <h1 className='text-center text-xl md:text-3xl'>US States And Metros, Ranked!</h1>

                    </div>

                </div>

                <div className='md:w-[65%] mx-auto w-full  '>
                   

                    <div class="">
                        <p className=' text-center text-gray-500'>August 25, 2021 LOCAL INSIGHTS</p>

                        <div class="md:px-10 bg-white flex flex-row justify-center items-center rounded ">
                            <div className=''>
                                <p class="first-letter:text-[120px]">H</p>
                            </div>
                            <span className='md:px-8 md:leading-9 md:tracking-wide'>ow good is your state on home ownership and education? How does your metro perform on crime and demographics? Find out all that and more,
                                <br /> below!</span>

                        </div>
                        <div className='md:px-10'>
                            <p>Just follow these steps:</p>

                            <ol class="list-decimal px-10 pt-8">
                                <li>Select Any Tab</li>
                                <li>Filter Your State/Metro</li>
                                <li>Enjoy!</li>

                            </ol>
                            <p className='py-8 '>For suggestions on improvements or to get access to the data, reach out to sid@home.llc.

                            </p>

                            <p className='tracking-wide'>For more free insights into the US housing market, subscribe to Home.LLC‘s free <br /> substack newsletter.</p>

                            <div className='grid md:grid-cols-6 grid-cols-3 justify-between gap-1 my-4  shadow-xl'>
                                <button class="bg-white hover:bg-gray-100 text-gray-600  p-1 border border-gray-400 text-xs  ">
                                    #best cities
                                </button>

                                <button class="bg-white hover:bg-gray-100 text-gray-600 p-1    border border-gray-400 text-xs  ">
                                    #best states
                                </button>

                                <button class="bg-white hover:bg-gray-100 text-gray-600 p-1    border border-gray-400 text-xs  ">
                                    # home prices
                                </button>

                                <button class="bg-white hover:bg-gray-100 text-gray-600 p-1    border border-gray-400 text-xs  ">
                                    #investment
                                </button>



                                <button class="bg-white hover:bg-gray-100 text-gray-600 p-1    border border-gray-400 text-xs  ">
                                    #metros
                                </button>
                                <button class="bg-white hover:bg-gray-100 text-gray-600 p-1    border border-gray-400 text-xs  ">
                                    #real estate
                                </button>
                            </div>

                            
                            <hr className='my-10 ' />
                            <div className='flex flex-row justify-between items-center my-10 bg-gray-300/10 shadow-xl'>
                                <div className='pl-5'>
                                    <img className='w-96 rounded-full   object-cover' src="https://www.home.llc/guide/nikfiles/uploads/2021/10/dev-96x96.png" alt="" />
                                </div>
                                <div className='p-5'>
                                    <h1 className='text-xl text-gray-700'>Dev Seth</h1>
                                    <p className='py-3 text-gray-600'>Dev’s a core member of the housing economics quant team at Home.LLC. Previously, he was a data science consultant while majoring in economics from Symbiosis International University. He is a hard-core Golden State Warriors fan and loves to play basketball and chess.</p>
                                    <a className='flex flex-row justify-start items-center'>
                                        <AiOutlineLink size={25} />  <span className='px-3'><u>http://www.home.llc</u></span>
                                    </a>
                                </div>
                            </div>

                            <div className='py-3 grid grid-cols-3 shadow-xl'>
                                <button class=" flex flex-row justify-center py-2  border  hover:bg-gray-100  border-gray-400  shadow">
                                    <AiOutlineTwitter />
                                </button>

                                <button class=" flex flex-row justify-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400  shadow">
                                    <FaFacebookF />
                                </button>

                                <button class=" flex flex-row justify-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400  shadow">
                                    <AiOutlineGooglePlus />
                                </button>
                            </div>

                            <div className='py-4 flex flex-row justify-between items-center '>
                                <div className='cursor-pointer mr-6'>
                                    <p className='text-sm text-gray-600 py-3'> 	&#60;  PREVIUS</p >
                                    <p className=" hover:text-gray-600">Home Prices Will Keep On Rising In The Roaring 2020s (And Beyond!)</p>


                                </div>
                                <div className='cursor-pointer'>
                                    <p className='text-end text-sm text-gray-600 py-3'> 	   NEXT &#62;</p>
                                    <span className='hover:text-gray-600'  >Will Austin Continue To Be A Real Estate Darling?</span>


                                </div>



                            </div>

                            <div className='py-5 px-2 shadow-xl'>


                                <form >

                                    <label for="message" class="block my-4 text-lg font-medium text-gray-900 dark:text-gray-400">Leave a reply</label>
                                    <textarea id="message" rows="10" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

                                    <div className='my-4 grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-3'>
                                        <input className='border-[1px] p-2' type="text" placeholder='Name *' />

                                        <input className='border-[1px] p-2' type="text" placeholder='Email *' />
                                        <input className='border-[1px] p-2' type="text" placeholder='Website' />

                                    </div>
                                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />

                                    <br />
                                    <span className='text-sm md:text-lg'>
                                        Save my name, email, and website in this browser for the next time I comment.</span>
                                    <br />
                                    <button class="bg-black my-6 text-sm hover:bg-gray-700 text-white  py-2 px-4 border border-blue-700 ">
                                        Post Comment
                                    </button>
                                </form>

                            </div>



                        </div>


                    </div>
                </div>

                     
                   


                           
            </div>

        </>
    )
}

export default Hero