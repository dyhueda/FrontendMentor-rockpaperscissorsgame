"use client";

import Image from "next/image";

export default function Score(props) {
  
  return (
    <div className="rounded border-2 border-headerOutline flex justify-between items-center">
      <div className="w-1/3 m-1">
      <Image src="/logo.svg" width={250} height={250} alt="rock,paper and scissors game logo" />

      </div>
      <div className="bg-white rounded flex flex-col text-scoreText items-center m-1 px-6 py-2">
        <p className=" text-xs">SCORE</p>
        <p className="text-4xl font-extrabold text-darkText">{props.points}</p>
      </div>
    </div>
  );
}
