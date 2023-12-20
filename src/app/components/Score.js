"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Score(props) {
  const router = useRouter()
  return (
    <div className="rounded border-2 border-headerOutline flex justify-between items-center w-full">
      <div className="w-1/3 m-1">
        <button onClick={()=>router.push("/")}>
          <Image
            src="/logo.svg"
            width={750}
            height={750}
            alt="rock,paper and scissors game logo"
          />
        </button>
      </div>
      <div className="bg-white rounded flex flex-col text-scoreText items-center h-fit w-fit m-1 px-6 py-2 sm:px-16 sm:py-4 sm:m-4 ">
        <p className=" text-xs sm:text-lg">SCORE</p>
        <p className="text-4xl sm:text-7xl font-extrabold text-darkText">{props.points}</p>
      </div>
    </div>
  );
}
