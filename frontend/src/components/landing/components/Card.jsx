import React from 'react';
import { Link } from 'react-router-dom';
export default function Card({ heading, tagline, buttonLabel, type }) {
  return (
    <div className="p-[8%] w-[80%] bg-black rounded-2xl shadow-xl flex flex-col justify-between items-center border border-gray-300 transform transition-transform duration-500 hover:scale-105 hover:animate-tilt border-none">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-white mb-4">{heading}</h1>
        <p className="text-md text-gray-300">{tagline}</p>
      </div>
      <Link to={type}>
      <button className="mt-6 px-6 py-2 bg-white text-black text-sm font-medium rounded-lg hover:text-gray-300 focus:ring-2 focus:ring-black  border-none transition-colors duration-300 ease-in-out hover:bg-gray-800">
        {buttonLabel}
      </button>
      </Link>
    </div>
  );
}
