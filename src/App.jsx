import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const data = [
    {
      artist: "Eminam",
      songName: "Mocking Bird",
      image:
        "https://i.pinimg.com/564x/d3/f7/67/d3f767602661cf3358724b90ac1fe9cb.jpg",
      download: false,
    },
    {
      artist: "Snoop Dog",
      songName: "Gangsta Paradise",
      image:
        "https://i.pinimg.com/564x/21/b7/73/21b773164cdc9cac89da8fa394fed136.jpg",
      download: false,
    },
    {
      artist: "Travis Scott",
      songName: "Goosebumps",
      image:
        "https://i.pinimg.com/736x/90/8f/d7/908fd753dc41eec837b8149d2b3df084.jpg",
      download: false,
    },
    {
      artist: "Dua Lipa",
      songName: "Levitating",
      image:
        "https://i.pinimg.com/564x/07/95/76/07957691ff2d49c790c0261d55ac1673.jpg",
      download: false,
    },
    {
      artist: "Dominic Fike",
      songName: "Three Nights",
      image:
        "https://i.pinimg.com/564x/32/b1/cd/32b1cd0064318f77f02c3a400cf0aaf8.jpg",
      download: false,
    },
  ];

  const [realData, setRealData] = useState(data);

  const downloadFunc = (idx) => {
    setRealData((prev) => {
      return prev.map((item, index) => {
        if (index === idx) {
          return { ...item, download: !item.download };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-[#1f262a] flex gap-4 items-center justify-center">
        {realData.map((item, index) => (
          <Card
            key={index}
            idx={index}
            downloadFunc={downloadFunc}
            values={item}
          />
        ))}
      </div>
    </>
  );
}

export default App;
