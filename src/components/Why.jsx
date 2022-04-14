import React from 'react'

const Why = () => {
  return (
    <>
        <div>
            <h1 className="text-2xl text-yellow-500 font-bold text-center">Why Home Platter?</h1>
            <h3 className="text-xl font-semibold text-center mt-8">That's because we are best at satisfying most essential requirements because we care for our customers.</h3>
            
            <div className="flex flex-col items-start">
                <div className="flex flex-row-reverse items-center gap-10 px-40 mt-10">
                    <div className="w-1/2">
                        <h4 className="text-2xl text-yellow-400 font-semibold">Sanitized Kitchens</h4>  
                        <h6 className="text-md mt-5 pr-20">Kitchens are well sanitized and regular checks
                            are done in regular intervals to be 100% clean
                            and safe. The chefs are requested to clean
                            their kitchen stations regularly.
                        </h6>                      
                    </div>
                    <div className="bg-white w-1/2 h-80">
                        <img src="https://www.seekpng.com/png/detail/296-2968423_shawarma-plate-png-italian-food-plate-png.png" alt="" className="w-full h-full rounded-lg" />
                    </div>
                </div>

                <div className="flex flex-row items-center gap-10 px-40 mt-10">
                    <div className="w-1/2">
                        <h4 className="text-2xl text-yellow-400 font-semibold">Fresh Vegetables and Meat</h4>  
                        <h6 className="text-md mt-5 pr-20">The Vegies and the meat are taken extra care
                            where these are super fresh and there are no
                            preservatives added to it. This is because our
                            customer's health is our top priority
                        </h6>                      
                    </div>
                    <div className="bg-white w-1/2 h-80">
                        <img src="https://www.seekpng.com/png/detail/296-2968423_shawarma-plate-png-italian-food-plate-png.png" alt="" className="w-full h-full rounded-lg" />
                    </div>
                </div>

                <div className="flex flex-row-reverse items-center gap-10 px-40 mt-10">
                    <div className="w-1/2">
                        <h4 className="text-2xl text-yellow-400 font-semibold">Balanced Spices</h4>  
                        <h6 className="text-md mt-5 pr-20">The Spices added to the dishes are very balanced and
                            as gentle as the love of home food and the one's
                            which are used are of high graded.
                        </h6>                      
                    </div>
                    <div className="bg-white w-1/2 h-80">
                        <img src="https://www.seekpng.com/png/detail/296-2968423_shawarma-plate-png-italian-food-plate-png.png" alt="" className="w-full h-full rounded-lg" />
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Why