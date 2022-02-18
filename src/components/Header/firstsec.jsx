import React from "react";

    
   
    
   const Content = () =>  {
    return (
        <div className="w-full h-96 relative">
            <img
                src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg" alt="" className="h-180 w-240 w-full h-full object-cover absolute mix-blend-overlay" />
            <div className='p-24'>
                <h1 className="uppercase text-white text-6xl font-semibold text-center ">
                    Just vibes...no remorse
                </h1>
                <h2 className="text-4xl text-slate-100 font-light text-center ">
                    Your Ultimate Sound Decision
                </h2>
                <h2 className="text-2xl text-slate-100 font-light text-center">
                    Upload Music
                </h2>
                <div className="items-center">
                <button className="bg-blue-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Upload Music
                </button>
                </div>
                            </div>
        </div>

    );
}
 
export default Content;