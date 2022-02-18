import React from "react";

const Grid = () => {
    return ( 

<div class="flex mb-4 py-12 max-w-7xl mx-auto space-x-8">
    <div class="w-1/3 rounded-lg shadow-lg cursor-pointer relative overflow-hidden hover:opacity-80 transition duration-300 ease-in-out">
      <img 
      src ="https://cdn.pixabay.com/photo/2018/01/05/07/05/people-3062246_960_720.jpg" alt = "" className="object-contain mix-blend-overlay" />
      <div className="p-24">
          <h2 className="text-gray-600 font-semibold text-center absolute text-2xl "> Listen, Watch day after day</h2>
      </div>
    </div>

  <div class="w-1/3 rounded-lg shadow-lg cursor-pointer relative overflow-hidden hover:opacity-80 transition duration-300 ease-in-out ">
      <img
      src ="https://cdn.pixabay.com/photo/2016/09/10/11/11/musician-1658887_960_720.jpg" alt ="" className ="object-contain mix-blend-overlay" />
       <div className="p-24">
          <h2 className="text-gray-600 font-semibold text-center absolute text-2xl">Rock and Roll with the best artists</h2>
      </div>
 
  </div>
  <div class="w-1/3 rounded-lg shadow-lg cursor-pointer relative overflow-hidden hover:opacity-80 transition duration-300 ease-in-out">
      <img
      src="https://cdn.pixabay.com/photo/2019/01/20/05/30/guitar-3943201_960_720.jpg" alt = "" className= "object-contain mix-blend-overlay"/>
       <div className="p-24">
          <h2 className="text-gray-600 font-semibold text-center absolute text-2xl">Chill with the Big Boys</h2>
      </div>
  </div>
</div>
     );
}
 
export default Grid;