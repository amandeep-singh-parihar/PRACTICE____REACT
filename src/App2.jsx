import React, { useState } from "react";
import Card2 from "./Components/Card2";

function App2() {
  const data = [
    {
      Place: "Paris",
      Description: "Lorem ipsum dolor sit amet consectetur wowg",
      image:
        "https://i.pinimg.com/564x/51/a0/34/51a034afa9f201bd4406c3d444673647.jpg",
      explore: false,
    },
    {
      Place: "New York",
      Description: "Lorem ipsum dolor sit amet consectetur wowg",
      image:
        "https://i.pinimg.com/564x/43/9c/71/439c719d3609bc7e3a64eaf51992c903.jpg",
      explore: false,
    },
    {
      Place: "Taj Mahal",
      Description: "Lorem ipsum dolor sit amet consectetur wowg",
      image:
        "https://i.pinimg.com/564x/73/52/8f/73528fdf123443b74a9b19e01451a551.jpg",
      explore: false,
    },
    {
      Place: "Red Fort",
      Description: "Lorem ipsum dolor sit amet consectetur wowg",
      image:
        "https://i.pinimg.com/564x/6d/c9/13/6dc91314d112cb76938763e632c23021.jpg",
      explore: false,
    },
    {
      Place: "Mount. Fuji",
      Description: "Lorem ipsum dolor sit amet consectetur wowg",
      image:
        "https://i.pinimg.com/564x/26/08/db/2608db1cc6c70b093717a01f6e8f2840.jpg",
      explore: false,
    },
    {
      Place: "Munich",
      Description: "Lorem ipsum dolor sit amet consectetur wowg",
      image:
        "https://i.pinimg.com/564x/f6/41/d9/f641d97f36d48b103ee933927ba2479c.jpg",
      explore: false,
    },
    {
      Place: "Kharkiv",
      Description: "Lorem ipsum dolor sit amet consectetur wowg",
      image:
        "https://i.pinimg.com/564x/f8/e6/88/f8e688b94952e50d6936f8a1f605ec7e.jpg",
      explore: false,
    },
    {
      Place: "Amsterdam",
      Description: "Lorem ipsum dolor sit amet consectetur wowg",
      image:
        "https://i.pinimg.com/564x/ab/cc/b1/abccb1d29df02a7e826e707b9bc53254.jpg",
      explore: false,
    },
  ];

  const [realData, setData] = useState(data);

  const ExpFunc = (idx) => {
    setData((prev) => {
      return prev.map((item, index) => {
        if (index === idx) {
          return { ...item, explore: !item.explore };
        }
        return item;
      });
    });
  };

  return (
    <div className="w-full h-screen bg-[#eff0eb] flex items-center justify-center gap-10 gap-y-0.5 flex-wrap">
      {realData.map((item, index) => (
        <Card2 key={index} idx={index} ExpFunc={ExpFunc} values={item} />
      ))}
    </div>
  );
}

export default App2;
