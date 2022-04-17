import React from 'react'

const Feature = () => {
  return (
    <>
        <div className="bg-white mx-40">
            <h1 className="text-4xl font-bold text-center mt-10">Our Features</h1>
            <div className="flex flex-row items-start justify-around mt-12 mb-24">
                <div className="flex flex-col items-center gap-6">
                    <div className="w-72 h-72 bg-white rounded-lg shadow-xl">
                        <img src="https://miro.medium.com/max/1200/0*pk5y5loMjTzP0OB_" alt="" className="w-full h-full rounded-xl border"/>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <h2 className="text-3xl font-bold">Look Around!</h2>
                        <h4 className="text-lg font-semibold w-80 mt-4">Set location to find the best from the chefs around</h4>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="w-72 h-72 bg-white rounded-lg shadow-xl">
                        <img src="https://us.123rf.com/450wm/coffeemate/coffeemate1602/coffeemate160200082/53689674-hand-aranging-wood-block-stacking-as-step-stair-business-concept-for-growth-success-process-.jpg?ver=6" alt="" className="w-full h-full rounded-xl border"/>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <h2 className="text-3xl font-bold">Choose from the best</h2>
                        <h4 className="text-lg font-semibold w-80 mt-4">Choose the from the best and set your preferred date and time of delivery.</h4>
                    </div>
                    
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="w-72 h-72 bg-white rounded-lg shadow-xl">
                        <img src="https://thumbs.dreamstime.com/b/happy-big-family-eating-dinner-together-vector-illustration-dining-mother-father-children-92635807.jpg" alt="" className="w-full h-full rounded-xl border"/>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <h2 className="text-3xl font-bold">Happy Home meal!</h2>
                        <h4 className="text-lg font-semibold w-80 mt-4">Enjoy the pure love of the home made food straight from kitchen.</h4>
                    </div>
                </div>
                
                
            </div>
        </div>
    </>
  )
}

export default Feature