import React from 'react'
import { BackgroundBeams } from './BackgroundBeams'

interface User{
    id : number,
    username : string,
    email :string,
    password:string
}

function Hero({name}:{name:User}) {
  return (
    <section className="relative flex flex-col justify-center items-center h-[90vh] px-4 text-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      
      {/* Top Bar with Logo and Greeting */}
      <div className="absolute top-4 w-full px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/path/to/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="text-white text-lg font-semibold">GPhadDenge</span>
        </div>
        
        {/* Greeting */}
        <div className="text-white text-lg">
          Hey,{name.username}!
        </div>
      </div>

      {/* Heading */}
      <h1 className="mt-12 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
        Unlock Your Potential with AI-Generated Concept Quizzes
      </h1>
      
      {/* Buttons */}
      <div className="z-10 flex space-x-4 mt-6">
        <button className="px-6 py-3 text-lg font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 transition">
          Start Practicing
        </button>
        <button className="px-6 py-3 text-lg font-medium text-gray-200 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
          Learn More
        </button>
      </div>

      {/* Overlay for fading effect near the bottom */}
      <div className=" absolute bottom-0 w-full h-16 bg-gradient-to-t from-gray-900 opacity-90"></div>
    <BackgroundBeams/>
    </section>  )
}

export default Hero