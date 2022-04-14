import React from 'react'

const Feature = () => {
  return (
    <>
        <div className="bg-white px-20">
            <h1 className="text-4xl font-bold text-center mt-10">Our Features</h1>
            <div className="flex flex-row items-start justify-around mt-12 mb-24">
                <div className="flex flex-col items-center gap-6">
                    <div className="w-80 h-80 bg-white rounded-lg shadow-xl">
                        <img src="https://miro.medium.com/max/1200/0*pk5y5loMjTzP0OB_" alt="" className="w-full h-full rounded-xl"/>
                    </div>
                    <h2 className="text-4xl font-semibold">Look Around!</h2>
                    <h4 className="text-xl font-semibold w-64 mt-4">Set location to find the best from the chefs around</h4>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="w-80 h-80 bg-white rounded-lg shadow-xl">
                        <img src="https://images.hindustantimes.com/img/2021/02/26/1600x900/Mobile_Usage_Trends_HT_1614343684844_1614343688753.jpg" alt="" className="w-full h-full rounded-xl"/>
                    </div>
                    <h2 className="text-4xl font-semibold">Choose from the best</h2>
                    <h4 className="text-xl font-semibold w-64 mt-4">Choose the from the best and set your preferred date and time of delivery.</h4>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="w-80 h-80 bg-white rounded-lg shadow-xl">
                        <img src="https://img.freepik.com/free-photo/healthy-food-home-happy-loving-couple-is-preparing-proper-meal-kitchen_566707-1658.jpg" alt="" className="w-full h-full rounded-xl"/>
                    </div>
                    <h2 className="text-4xl font-semibold">Happy Home meal!</h2>
                    <h4 className="text-xl font-semibold w-64 mt-4">Enjoy the pure love of the home made food straight from kitchen.</h4>
                </div>
                
                
            </div>
        </div>
    </>
  )
}

export default Feature