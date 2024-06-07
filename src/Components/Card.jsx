import React from "react";

function Card({ values, downloadFunc ,idx}) {
  const { artist, songName, image, download } = values;
  return (
    <>
      <div className="w-52 bg-[#f1ebe2] rounded-md overflow-hidden">
        <div className="w-full h-60 bg-sky-200">
          <img
            className="w-full h-full object-cover object-[0%_10%]"
            src={image}
            alt=""
          />
        </div>
        <div className="w-full p-3">
          <h3 className="font-semibold text-xl">{artist}</h3>
          <h5 className="text-xs">{songName}</h5>
          <button
            onClick={() => {
              downloadFunc(idx);
            }}
            className={`mt-4 px-3 py-1 ${
              download ? "bg-[#403f42]" : "bg-[#827f7c]"
            } text-white text-xs rounded-md`}
          >
            {download===true ? "Download":"Downloaded"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
