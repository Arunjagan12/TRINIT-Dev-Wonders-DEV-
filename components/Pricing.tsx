"use client";
import React from 'react'

const Pricing = () => {
  return (
    <main className="max-w-6xl mx-auto pt-10 pb-36 px-8">
  
  <div className="max-w-md mx-auto mb-14 text-center">
    <h1 className="text-4xl font-semibold mb-6 lg:text-5xl"><span className="text-amber-400">Flexible</span> Plans</h1>
    <p className="text-xl text-gray-500 font-medium">Choose a plan that works best for you and your team.</p>
  </div>
  
  <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
    
    <div  data-aos="zoom-in-down" className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
      <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
        <img src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"  alt="" className="rounded-3xl w-20 h-20" />
        <div className="ml-5">
          <span className="block text-2xl font-semibold">Basic</span>
          <span><span className="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold">10 </span></span><span className="text-gray-500 font-medium">/ user</span>
        </div>
      </div>
      <ul className="mb-7 font-medium text-gray-500">
        <li className="flex text-lg mb-2">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3">Our most <span className="text-black">comprehensive experience</span></span>
        </li>
        <li className="flex text-lg mb-2">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3">Have 1:1 live sessions with <span className="text-black">your pereferable tutors</span></span>
        </li>
        <li className="flex text-lg">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3"><span className="text-black">Schedule ahead or </span>on demand</span>
        </li>
      </ul>
      <a href="#/" className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        Choose Plan
        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
      </a>
    </div>
    
    <div  data-aos="zoom-in-down" className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-amber-300 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
      <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
        <img src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"  alt="" className="rounded-3xl w-20 h-20" />
        <div className="ml-5">
          <span className="block text-3xl font-semibold text-gray-800">Startup</span>
          <span><span className="font-medium text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold text-black">24 </span></span><span className="font-medium">/ user</span>
        </div>
      </div>
      <ul className="mb-10 font-medium text-xl">
        <li className="flex mb-6">
          <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
          <span className="ml-3 text-slate-900">For adults <span className="text-black">21+</span></span>
        </li>
        <li className="flex mb-6">
          <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
          <span className="ml-3 text-slate-900">Real-world <span className="text-black">conversation experience</span></span>
        </li>
        <li className="flex">
          <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
          <span className="ml-3 text-slate-900"><span className="text-black">Work with a tutor</span> and 1-2 other students</span>
        </li>
      </ul>
      <a href="#/" className="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        Choose Plan
        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
      </a>
    </div>
    
    <div  data-aos="zoom-in-down" className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
      <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
        <img src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"  alt="" className="rounded-3xl w-20 h-20" />
        <div className="ml-5">
          <span className="block text-2xl font-semibold">Enterprise</span>
          <span><span className="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold">35 </span></span><span className="text-gray-500 font-medium">/ user</span>
        </div>
      </div>
      <ul className="mb-7 font-medium text-gray-500">
        <li className="flex text-lg mb-2">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3">1:1 time with <span className="text-black">specialized tutors</span></span>
        </li>
        <li className="flex text-lg mb-2">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3">Beginner to advanced <span className="text-black">courses available</span></span>
        </li>
        <li className="flex text-lg">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3"><span className="text-black">Fun games and</span> activities</span>
        </li>
      </ul>
      <a href="#/" className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        Choose Plan
        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
      </a>
    </div>
    
  </div>
  
</main>
  )
}

export default Pricing