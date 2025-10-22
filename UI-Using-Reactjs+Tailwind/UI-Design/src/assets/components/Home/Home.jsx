import React from "react";
import personImg from "../../../assets/download.jpg"; // Use your own image

const Home = () => (
  <section className="flex flex-col items-center mt-10 text-center">
    <h1 className="text-5xl font-bold mb-4">Empowering Brands<br />Through Creative Solutions</h1>
    <p className="text-gray-600 max-w-xl mb-6">
      From web development to branding, we deliver innovative strategies that elevate your brand and drive growth. Let's create something exceptional together.
    </p>
    <div className="flex gap-4 justify-center mb-10">
      <button className="bg-white border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-100">Innovate Your Brand</button>
      <button className="bg-green-500 px-5 py-2 rounded-full text-white hover:bg-green-600">Start Your Project</button>
      <button className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white">Let's Collaborate</button>
    </div>
    <div className="flex flex-col items-center">
      <img src={personImg} alt="Brand Hero" className="w-60 rounded-2xl object-cover mb-4" />
      <div className="flex flex-col items-center mt-4">
        <div className="text-3xl font-bold text-green-500">★ ★ ★ ★ ★</div>
        <p className="text-lg font-bold mt-1">10 Years</p>
        <span className="text-gray-500">Experience</span>
      </div>
    </div>
  </section>
);

export default Home;
