import React from 'react'
import { BsChevronDown } from 'react-icons/bs'


const Ask = (q) => {
    console.log(q);
    return (
        <>
            <div className="flex flex-row items-center justify-between bg-yellow-500 px-5 py-4 w-1/2 rounded-lg">
                <h4 className="text-lg text-black font-bold">{q.question}</h4>
                <BsChevronDown className="text-3xl"/>
            </div>
        </>
    )
}

const Questions = () => {
    const data = [
        { question: "How is Home Platter dierent from other food apps?"},
        {question: "What locations does Home plaer service, at the moment?"},
        {question: "Where is Home Plaer's Registered and Head Oce?"},
        {question: "What modes of payment are acceptable ?"},
        {question: "Can I order from 2 or more restaurants at the same time?"},
        {question: "How is Home Plaer dierent from other food apps ?"},
        {question: "Do you also deliver spoons and plates etc.?"},
    ]   
        
  return (
    <>
        <div className="bg-black pt-14 pb-20">
            <h1 className="text-2xl text-gray-50 font-bold text-center mb-10">Frequently Asked Questions</h1>
            <div className="flex flex-col items-center gap-5">
                {
                    data.map((q) => (
                        <Ask {...q} />
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Questions