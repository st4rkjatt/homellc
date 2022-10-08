import React from 'react'

function RelatedPost() {
  return (
    <>
     <div className='p-8  bottom-96 '>
      <h1 className='text-center py-4 font-bold text-lg'>Related Post</h1>
      <hr className='pb-7' />
        <div className='grid grid-cols-1 md:grid-cols-3  justify-between gap-3'>
        <div class="wg-box-content ">
    <a href="#">
      <div class="wg-box-content-overlay"></div>
      <img class="wg-box-content-image" src="https://www.home.llc/guide/nikfiles/uploads/2021/09/breno-assis-r3WAWU5Fi5Q-unsplash-scaled.jpg"/>
      <div class="wg-box-content-details wg-box-fadeIn-bottom ">
        <h3 class="wg-box-content-title  ">Millennial Homeownership Is Low. Why?</h3>
        
      </div>
    </a>
  </div>


  <div class="wg-box-content">
    <a href="#">
      <div class="wg-box-content-overlay"></div>
      <img class="wg-box-content-image" src="https://www.home.llc/guide/nikfiles/uploads/2021/09/13-Things-You-Didnt-Know-About-Wildfires.jpeg"/>
      <div class="wg-box-content-details wg-box-fadeIn-bottom">
        <h3 class="wg-box-content-title">US Real Estate And The Climate Crisis</h3>
       
      </div>
    </a>
  </div>


  <div class="wg-box-content">
    <a href="#">
      <div class="wg-box-content-overlay"></div>
      <img class="wg-box-content-image" src="https://www.home.llc/guide/nikfiles/uploads/2021/08/Austin.jpg"/>
      <div class="wg-box-content-details wg-box-fadeIn-bottom">
        <h3 class="wg-box-content-title">Will Austin Continue To Be A Real Estate Darling?</h3>
      
      </div>
    </a>
  </div>
        </div>
     </div>


    
    
    </>
  )
}

export default RelatedPost