import React from 'react'
import { MdOutlineSanitizer, MdOutlineDeliveryDining, MdOutlineFastfood } from 'react-icons/md';
const Hero = () => {
  return (
    <>
      <div>
          <div className="relative">
            <div className="w-full h-screen ">
              <img src="https://images.unsplash.com/photo-1573067485648-4cb2618b5e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80" alt="" className="w-full h-full" />
            </div>
            
            <div className="absolute top-5 right-24 flex flex-row items-end justify-between gap-10 text-lg text-gray-100">
              <h4 className="text-yellow-500 ml-1">Home</h4>
              <div className="w-14 h-1 -mt-1 bg-yellow-500 absolute rounded-lg top-8 text-center" />
              <h4>How it works</h4>
              <h4>Contact us</h4>
              <h4>Our Customers</h4>
            </div>

            <div className="flex items-center justify-center">
              <div className="absolute top-24 flex flex-col items-center justify-center gap-7">
                  <h1 className="text-8xl font-bold text-gray-50">Home Platter</h1>
                  <h2 className="text-2xl font-semibold text-gray-200 italic -mt-3" style={{fontfamily: "Cursive"}}>feel the love of home in every bite</h2>
                  <h5 className="text-base text-gray-300 w-4/5 text-center">We provide the best Indian authentic home made food from the best home chefs around you</h5>
                  <div className="relative ">
                    {/* <div className="bg-red-200 w-44 h-12 px-42 h-18 bg-yellow-300 z-40" /> */}
                    <button className="bg-yellow-500 w-36 h-9 px-6 py-1 text-gray-50 text-base font-semibold">
                      Download
                    </button>
                  </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between gap-5 absolute top-3/4 mt-9 w-full px-20">
              <div className="flex flex-row items-center gap-3 text-white text-lg font-thin">
                <MdOutlineSanitizer className="w-10 h-10"/>
                <p className="text-gray-300">100% sanitized</p>
              </div>
              <div className="flex flex-row items-center gap-3 text-white text-lg font-thin">
                <MdOutlineDeliveryDining className="w-10 h-10" />
                <p className="text-gray-300">Prompt & Lightning Fast deliveries</p>
              </div>
              <div className="flex flex-row items-center gap-3 text-white text-lg font-thin">
                <MdOutlineFastfood className="w-10 h-10"/>
                <p className="text-gray-300">Healthy Home Food</p> 
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Hero