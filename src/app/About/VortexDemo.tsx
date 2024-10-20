


"use client";
import React from "react";
import { Vortex } from "@/app/About/vortex";

export function VortexDemo() {
  return (
    <div className="w-full rounded-md h-[40rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center justify-center flex-col px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-purple-500 text-3xl md:text-6xl font-bold text-center mb-4">
          About Us
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full">
          <div className="bg-transparent border border-purple-600 p-6 rounded-lg shadow-xl backdrop-blur-lg w-full max-w-sm transition duration-500 ease-in-out hover:scale-105 hover:border-purple-500">
            {/* Made the background transparent and added a gradient border */}
            <h3 className="text-white text-2xl font-semibold mb-6 text-center">
              Contact Us
            </h3>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="text-white p-3 rounded-lg border border-gray-400 bg-transparent focus:outline-none focus:ring focus:ring-purple-500 placeholder-gray-300 transition duration-300 ease-in-out"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="text-white p-3 rounded-lg border border-gray-400 bg-transparent focus:outline-none focus:ring focus:ring-purple-500 placeholder-gray-300 transition duration-300 ease-in-out"
                required
              />
              <textarea
                placeholder="Your Message"
                className="text-white p-3 rounded-lg border border-gray-400 bg-transparent focus:outline-none focus:ring focus:ring-purple-500 placeholder-gray-300 transition duration-300 ease-in-out"
                rows={4}
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition duration-300 ease-in-out shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Vortex>
    </div>
  );
}
