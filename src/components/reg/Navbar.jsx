import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
        <div style={{backgroundColor:"#090a1a"}}>
            <ul className="flex flex-row items-center justify-around text-white text-xl py-5">
                <li>Home</li>
                <li className="flex flex-row items-center gap-4">
                    Products
                    <BsChevronDown />
                </li>
                <li className="flex flex-row items-center gap-4">
                    Customers
                    <BsChevronDown />
                </li>
                <li>Our investors</li>
                <li>Pricing</li>
                <li>Contact us</li>
                <li className="flex flex-row items-center gap-4">
                    Guest User
                    <span className="text-gray-50 border-2 p-2 text-center rounded-full">
                        <FaUserAlt className="text-2xl"/>
                    </span>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar