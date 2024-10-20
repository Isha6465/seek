// "use client";
// import React, { use } from "react";
// import { Vortex } from "@/components/ui/vortex";

// export function VortexDemo() {
//   return (
//     <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
//       <Vortex
//         backgroundColor="black"
//         className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
//       >
//         <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
//           About Us
//         </h2>
//         <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          
//         </div>
//       </Vortex>
//     </div>
//   );
// }


"use client";
import React, { use } from "react";
import { Vortex } from "@/components/ui/vortex";

export function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          About Us
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full">
          <div className="bg-gray-800 p-4 rounded-md shadow-lg w-full max-w-sm">
            <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Your Message"
                className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                rows={4}
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
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
