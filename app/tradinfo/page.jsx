"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const about = {
  title: "Trading Teacher",
  description:
    "My name is Saif, and I'm a professional Forex and Binary Trader. I've learned from old trading books and have 5 years of experience in trading. I'm in a profitable state and also provide financial education to my students. I possess the skill to analyze the market and teach my students trading strategies and risk management. I continuously improve my trading skills and follow new trends. My students trust me, and I help them with their financial growth. I'm a responsible trader committed to my profession and help my students become successful traders. I'm dedicated to empowering others with the knowledge and skills needed to succeed in trading.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Saif khan",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 318 0837943",
    },
    {
      fieldName: "Experience",
      fieldValue: "05+ Years",
    },
    {
      fieldName: "TikTok",
      fieldValue: "comming soon",
    },
    {
      fieldName: "Nationaltity",
      fieldValue: "Pakistani",
    },
    {
      fieldName: "Email",
      fieldValue: "safikhan@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Coming Soon",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu",
    },
  ],
};

const TradInfo = () => {
  return (
  <div className="bg-[#1c1c22] min-h-[700px] w-full flex items-center justify-center px-2 py-8 xl:px-0 xl:py-0">
  <div className="flex flex-col xl:flex-row items-center xl:items-start bg-[#23232b] p-6 sm:p-8 xl:p-10 rounded-2xl shadow-2xl w-full max-w-2xl xl:max-w-[1200px] mx-auto gap-6 xl:gap-10 border border-[#00ff99]/10">
      {/* Profile Image with animated border */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 xl:w-64 xl:h-64 mb-6 xl:mb-0 flex-shrink-0">
        <Image
          src="/assets/man img.jpg"
          priority
          quality={100}
          fill
          alt="Teacher Profile Picture"
          className="rounded-full object-cover border-4 border-[#00ff99] shadow-lg"
        />
      </div>
      {/* Profile Info */}
      <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
        <h2 className="text-white text-3xl xl:text-4xl font-bold mb-5 text-outline">{about.title}</h2>
        <p className="text-gray-300 text-justify xl:text-left mb-6 text-base xl:text-lg max-w-[900px]">{about.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 w-full mb-6">
          {about.info.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row justify-between text-white py-1 border-b border-[#00ff99]/20 text-base"
            >
              <span className="font-semibold text-[#00ff99]">{item.fieldName}:</span>
              <span className="text-white/90">{item.fieldValue}</span>
            </div>
          ))}
        </div>
        {/* Socials */}
        <div className="flex gap-3 items-center w-full justify-center xl:justify-start mb-8">
          {/* Example Socials, replace with <Socials /> if you want to use your component */}
          <a href="#" className="text-[#00ff99] hover:text-white text-2xl"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="text-[#00ff99] hover:text-white text-2xl"><i className="fab fa-github"></i></a>
          <a href="#" className="text-[#00ff99] hover:text-white text-2xl"><i className="fab fa-twitter"></i></a>
        </div>
        {/* Back Button */}
        <div className="w-full flex justify-center xl:justify-start">
          <a href="/services" className="inline-block bg-[#00ff99] text-[#23232b] font-semibold rounded-full px-6 py-2 shadow hover:bg-[#00e187] transition-colors duration-200">
            ← More Services
          </a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TradInfo;
