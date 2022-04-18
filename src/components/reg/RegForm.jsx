import './reg.css'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'


const RegForm = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center gap-12">
            <div style={{background: "#213a5a", boxshadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )", backdropfilter: "blur( 20px )" }} className="flex flex-row gap-1 px-10 shadow-lg">
                <div className="text-gray-50 flex flex-col py-5">
                    <div className="flex flex-row items-center gap-10 py-6">
                        <label htmlFor="" className="text-xl w-44">Email Address</label>
                        <input type="text" placeholder='enter your email address' 
                            className="bg-white text-gray-500 text-lg px-2 py-1.5 border rounded-lg w-72 text-center border-none"
                        />
                    </div>
                    <div className="flex flex-row items-center gap-10 py-6">
                        <label htmlFor="" className="text-xl w-44">Full Name</label>
                        <input type="text" placeholder='Enter your full name' 
                            className="bg-white text-gray-500 text-lg px-2 py-1.5 border rounded-lg w-72 text-center border-none"
                        />
                    </div>
                    <div className="flex flex-row items-center gap-10 py-6">
                        <label htmlFor="" className="text-xl w-44">Mobile Number</label>
                        <div className="flex flex-row gap-2">
                            <div className="flex flex-row items-center bg-white text-xl px-2 py-1.5 rounded-lg w-26 text-center">
                                <input type="text" placeholder='Code' 
                                    className="bg-gray-50  w-16 border-none"
                                />
                                <BsChevronDown className="text-black"/>
                            </div>
                            <input type="text" className="w-44 rounded-lg border-none"/>
                        </div>

                    </div>
                    <div className="flex flex-row items-center gap-10 py-6">
                        <label htmlFor="" className="text-xl w-44">Choose Time Slot</label>
                        <div className="flex flex-row items-center gap-4">
                            <button className="w-40 bg-gray-50 text-black text-md font-semibold py-2 rounded-lg">10:00 AM -11:00AM</button>
                            <button className="w-40 bg-gray-50 text-black text-md font-semibold py-2 rounded-lg">10:00 AM -11:00AM</button>
                            <button className="w-40 bg-yellow-400 text-black text-md font-semibold py-2 rounded-lg">10:00 AM -11:00AM</button>                    
                        </div>
                    </div>                
                </div>
                <div className="text-gray-50">
                    <div className="flex flex-row items-center gap-10 py-6">
                        <label htmlFor="" className="text-xl w-70">Primary Geography (Optional)</label>
                        <div className="flex flex-row items-center bg-white px-2 py-1 rounded-lg w-26 text-center">
                            <input type="text" placeholder='Choose Country' 
                                className="bg-white text-gray-500 text-lg px-2 py-1.5 border rounded-lg w-72 text-center border-none"
                            />
                            <BsChevronDown className="text-black"/>
                        </div>
                    </div>
                    <div className="flex flex-row items-start gap-10 py-6">
                        <label htmlFor="" className="text-xl w-70">Reason For Request (Optional)</label>
                        <textarea className="w-80 rounded-lg h-44">                        
                        </textarea>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-10">
                <button style={{background: "rgba( 8, 2, 51, 0.9 )"}} className="text-gray-100 px-5 py-2 rounded-lg drop-shadow-xl text-lg bg-blue-800">
                    Submit
                </button>
                <p className="text-md font-semibold pb-10">
                    <span className="text-blue-900 text-lg" >note :</span>
                    Usually the demos are arranged on the selected time slots and will be communicated over business emails in two working days
                </p>
            </div>
        </div>
    </>
  )
}

export default RegForm

//background: "rgba( 8, 2, 51, 0.85 )11px -12px 23px -12px rgba(2,4,15,0.39)