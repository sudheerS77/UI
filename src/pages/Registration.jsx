import React from 'react'
import { SiChatbot } from 'react-icons/si'
import { BiInfoCircle } from 'react-icons/bi'
import { FaChevronCircleUp } from 'react-icons/fa'

//components
import Navbar from '../components/reg/Navbar'
import RegForm from '../components/reg/RegForm'

const Registration = () => {
  return (
    <>
        <div className="relative">
            <Navbar />
            <div style={{color:"#090a1a"}} className="my-5 flex flex-col items-center gap-5">
                <div className="flex items-center gap-3">
                  <FaChevronCircleUp className="text-5xl rotate-45"/>
                  <h1 className="text-4xl font-bold">Tracxn</h1>
                </div>
                <h4 className="text-2xl font-bold">Enter Below details to Request Demo</h4>
            </div>    
            <div className="flex flex-col items-end mr-10 PX-10 gap-2">
              <span className="flex flex-row items-center gap-1 border-b-2 border-blue-400 text-xl font-semibold">
                <BiInfoCircle />About Demo
              </span>
              <RegForm />
            </div>
        </div>
        <div style={{background: "rgba( 8, 2, 51, 0.9 )"}} className="fixed bottom-10 right-8 p-4 rounded-full bg-indigo-900">
          <SiChatbot  className="text-6xl text-gray-50" />
        </div>
    </>
  )
}

export default Registration

// echo "# UI" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/sudheerS77/UI.git
// git push -u origin main