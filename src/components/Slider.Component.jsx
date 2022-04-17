import React from 'react'
import Slider from "react-slick";
 
//import { NextArrows, PrevArrows } from './arrows';

const ImageCard =(props) => {
    return (
        <>
            <div className="w-full h-72 px-1">
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
         autoplaySpeed: 3000,
        // cssEase: "linear",
        arrows: true,

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
          "https://www.gannett-cdn.com/presto/2021/03/13/PNDN/04ace378-8405-4c47-9c29-d25e97f45e16-NDN_0312_JA-_RESTONEWS-0317_08.JPG?width=660&height=440&fit=crop&format=pjpg&auto=webp",
          "https://www.eatthis.com/wp-content/uploads/sites/4/2020/06/restaurant-table.jpg?quality=82&strip=1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3QBDQKBrlQa16zH2HI2P0FYaJQW93NMmrhz7LvgJZyNoApva7luK2611gBtqOTkUcFE&usqp=CAU",
          "https://media.istockphoto.com/photos/customers-sitting-in-luxury-restaurant-picture-id1193353232?k=20&m=1193353232&s=170667a&w=0&h=5UNyLog31SXupls51CWjN9rV6KPs2O53aR1oP29XpQo=",

      ]
    
  return (
    <>
        <div className="bg-white mb-20 w-full">
            <h1 className="text-3xl text-yellow-500 font-extrathin text-center">Our Customers are our critics</h1>
            <div className="w-full px-7 mt-14">
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
            