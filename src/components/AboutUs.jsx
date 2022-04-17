import React from 'react'

const AboutUs = () => {
    return (
        <>
            <div className="bg-white mx-40 mb-20">
                <h1 className="text-3xl font-semibold mb-5 text-yellow-500 text-center">About Us</h1>
                <div className="flex flex-row items-center gap">
                    <div className="w-2/3">
                        <h4 className="text-2xl font-thin w-5/6">On average, homemade meals contain more vegetables, less carbohydrates, and less fat than any other meal. Study researchers also concluded that people who eat homemade food also go less often to fast food chains. So we at our best to serve you the best home made food just for you.</h4>
                        <button className="mt-8 bg-yellow-500 w-42 h-18 px-9 py-2 text-white text-lg font-semibold">
                            Download
                            <div className="bg-red-200 px-42 h-18 absolute top-5" />
                        </button>
                    </div>
                    <div className="bg-white w-80 h-80">
                        <img src="https://thumbs.dreamstime.com/b/delicious-chicken-biryani-white-round-bowl-70771349.jpg" alt="" className="w-full h-full rounded-lg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;


// https://www.seekpng.com/png/detail/296-2968423_shawarma-plate-png-italian-food-plate-png.png