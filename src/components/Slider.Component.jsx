import React from 'react'
import Slider from "react-slick";

const ImageCard =(props) => {
    return (
        <>
            <div className="w-full h-30 px-2 ">
                <img className="w-full h-full" src={props.src} alt="Loading......." />
            </div>     
        </>
    );
};

const SliderComponent = () => {

    const settings = {
        infinity: true,
        slidesToShow: 3,
        slidesToScroll:1,
        InitialSlide: 0,
        dots: true,       
        autoplay:true,
        // speed: 3000,
        // autoplaySpeed: 3000,
        // cssEase: "linear",
        arrows: false,
        responsive: [{
          breakpoints: 1024,
          settings:{
            slidesToShow:3,
            slidesToScroll: 2,
            infinite:true,
          },
        },{
          breakpoints: 600,
          settings:{
            slidesToShow:2,
            slidesToScroll: 1,
            InitialSlide: 1,
            infinite:true,
          },
        },{
          breakpoints: 480,
          settings:{
            slidesToShow:2,
            slidesToScroll: 1,
            infinite:true,
          },
        },
        
        ],
    };
      var images = [
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80",

      ]
    
  return (
    <>
        <div className="bg-white mb-20">
            <h1 className="text-2xl text-yellow-500 font-bold text-center">Our Customers are our critics</h1>
            <div className="w-full mt-14">
                <Slider {...settings}>
                {
                    images.map((image)=>(
                        <ImageCard src={image} />
                    ))
                }
          </Slider>
            </div>
        </div>
    </>
  )
}

export default SliderComponent
            