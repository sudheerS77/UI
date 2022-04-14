import React from 'react'

const Gallery = () => {
    const images = [
        {
            image:"https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg",
            w: 60,
            h:44,
        },
        {
            image: "https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457__340.jpg",
            w: 96,
            h:44,

        },
        {
            image: "https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034__340.jpg",
            w: 60,
            h:44,
        },
       {
           image: "https://cdn.pixabay.com/photo/2015/12/09/17/12/popcorn-1085072__340.jpg",
           w:46,
           h:44,
       },
       {
           image:"https://cdn.pixabay.com/photo/2016/10/30/09/30/hot-chocolate-1782623__340.jpg",
           w: 96,
           h:44,
       },
       {
           image:"https://cdn.pixabay.com/photo/2017/01/30/13/49/pancakes-2020863__340.jpg",
           w:96,
           h:44,
       },
       {
        image:"https://cdn.pixabay.com/photo/2015/09/01/21/00/coffee-beans-917613__340.jpg",
        w:36,
        h:44,
    },
    {
        image: "https://cdn.pixabay.com/photo/2015/12/09/17/12/popcorn-1085072__340.jpg",
        w:44,
        h:44,
    },
    ]
  return (
    <>
        <div>
            <h1 className="text-4xl text-yellow-500 font-bold text-center mt-20">Our Food <span className="text-black">Gallery</span></h1>
            <div className="flex flex-wrap item-center ml-40 gap-5 mt-16 mb-20 px-20 relative">
                {
                    images.map((data) => (
                        <img src={data.image} alt="food" className={`w-${data.w} h-${data.h}`} />                        
                    ))
                }
                <div style={{background: "rgba( 0, 0, 0, 0.0 )"}} className="absolute w-44 h-44 right-80 bottom-0">
                    <h4  className="text-gray-800 font-bold text-xl text-center mt-12">+20 More</h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallery