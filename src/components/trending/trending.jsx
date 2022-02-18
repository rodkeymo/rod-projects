import React from "react";

const Trend = () => {
    return ( 
      
      <div class="grid grid-cols-3 gap-4 p-5">
      <div className="item-center">
      <h1 className="text-center text-6xl font-semibold text-gray-500">
        Trending Sounds
      </h1>
      </div>
      <div class="bg-gradient-to-b from-purple-300 to-gray-700 shadow-lg bg-green-100 text-green-500 font-bold text-center p-10 rounded-lg row-span-2 text-2xl">R&B MUSIC</div>
      <div class="bg-gradient-to-b from-blue-300 to-gray-700 shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">ROCK MUSIC</div>
      <div class="bg-gradient-to-b from-orange-300 to-gray-700 shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-2">HOUSE MUSIC</div>
      <div class="bg-gradient-to-b from-indigo-300 to-gray-700 shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">HIPHOP MUSIC</div>
     
  </div>

     );
}
 
export default Trend;