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
            
            <div className="absolute top-5 right-52 flex flex-row items-end justify-between gap-10 text-2xl text-gray-100">
              <h4 className="text-yellow-500">Home</h4>
              <div className="w-16 h-1.5 bg-yellow-500 absolute rounded-lg top-8" />
              <h4>How it works</h4>
              <h4>Contact us</h4>
              <h4>Our Customers</h4>
            </div>

            <div className="flex items-center justify-center">
              <div className="absolute top-48 flex flex-col items-center justify-center gap-7">
                  <h1 className="text-6xl font-bold text-gray-50">Home Platter</h1>
                  <h2 className="text-3xl font-semibold text-gray-200 italic -mt-2" style={{fontfamily: "Cursive"}}>feel the love of home in every bite</h2>
                  <h5 className="text-xl text-gray-300 w-11/12 text-center mt-4">We provide the best Indian authentic home made food from the best home chefs around you</h5>
                  <div className="relative ">
                    <div className="bg-red-200 w-44 h-12 px-42 h-18 bg-yellow-300 z-40" />
                    <button className="bg-yellow-500 w-44 h-18 px-9 py-2 text-gray-50 text-lg font-semibold absolute top-2 left-8 z-0">
                      Download
                    </button>
                  </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between gap-5 absolute top-3/4 w-full px-20">
              <div className="flex flex-row items-center gap-5 text-white text-xl">
                <MdOutlineSanitizer className="w-16 h-16"/>
                <p className="text-gray-300">100% sanitized</p>
              </div>
              <div className="flex flex-row items-center gap-5 text-white text-xl">
                <MdOutlineDeliveryDining className="w-16 h-16" />
                <p className="text-gray-300">Prompt & Lightning Fast deliveries</p>
              </div>
              <div className="flex flex-row items-center gap-5 text-white text-xl">
                <MdOutlineFastfood className="w-16 h-16"/>
                <p className="text-gray-300">Healthy Home Food</p> 
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Hero