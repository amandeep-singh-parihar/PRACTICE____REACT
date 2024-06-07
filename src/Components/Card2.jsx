import React from "react";

function Card2({ values , ExpFunc,idx}) {
  const { Place, Description, image ,explore} = values;
  return (
    <div className="h-60 w-72 bg-white rounded-md overflow-hidden shadow-2xl">
      <div className="w-full h-40 bg-white pt-2 pr-2 pl-2">
        <img className="w-full h-full object-cover rounded-md border-solid border border-[#c2c5b7]" src={image} alt="" />
      </div>
      <div className="w-full p-1 px-3">
        <h1 className="text-lg font-semibold">{Place}</h1>
        <p className="text-xs font-semibold leading-none opacity-70">{Description}</p>
        <button onClick={()=>{ExpFunc(idx)}} className={`font-semibold mt-2 px-3 py-1 text-xs ${explore ? "bg-[#fd7b6e]":"bg-[#07c3ff]"} rounded-full`}>{explore===true?"Visited":"Explore"}</button>
      </div>
    </div>
  );
}

export default Card2;
