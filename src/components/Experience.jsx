import React from 'react'
import Slider from "react-slick";


const Card = (data) => {
    return (
        <>
            <div className=" h-54 flex flex-col items-center px-20">
                <div className="w-full h-56">
                    <img src={data.image} alt="" className="w-full h-full rounded-t-3xl"/>
                </div>
                    <h4 className="text-center bg-yellow-200 text-xl w-full px-4 py-4 rounded-t-3xl -mt-6 z-0">{data.name}</h4>
            </div>
        </>
    )
}
const Experience = () => {

    const settings = {
        infinity: true,
        slidesToShow: 3,
        slidesToScroll:2,
        InitialSlide: 0,
        dots: true,       
        arrows: false,
        autoplay:true,
    }
    const images = [
       {
           image:"https://image.shutterstock.com/image-photo/smiling-calm-woman-chef-standing-600w-1650215821.jpg",
           name:"Chef Namita",
       },
       {
           image:"https://image.shutterstock.com/image-photo/happy-young-woman-apron-on-600w-174500477.jpg",
           name:"Chef Rahul",
       },
       {
           image:"https://media.istockphoto.com/photos/kitchen-chef-picture-id1192003808?s=612x612",
           name:"Chef Ritesh",
       },
       {
           image:"https://image.shutterstock.com/image-photo/smiling-calm-woman-chef-standing-600w-1650215821.jpg",
           name:"Chef Namita",
       },
       {
           image:"https://image.shutterstock.com/image-photo/happy-young-woman-apron-on-600w-174500477.jpg",
           name:"Chef Rahul",
       },
       {
           image:"https://media.istockphoto.com/photos/kitchen-chef-picture-id1192003808?s=612x612",
           name:"Chef Ritesh",
       }
    ]

    return (
    <>
        <div className="flex flex-col mt-40">
            <h1 className="text-3xl text-yellow-500 font-semibold text-center">Some of our experienced Home Chefs</h1>
            <h4 className="text-xl text-center mt-14">The dishes are prepared by the best home chefs in the town and every chef is directly given credit.</h4>
            <h4 className="text-xl text-center">the transparency is maintained so that it gives ease for the users to order the dish or opt any plans</h4>
            <div className="px-20 mt-24">
                <Slider {...settings}>
                    {images.map((data) => (
                        <Card {...data}/>
                    ))

                    }
                </Slider>
            </div>
        </div>
    </>
  )
}

export default Experience