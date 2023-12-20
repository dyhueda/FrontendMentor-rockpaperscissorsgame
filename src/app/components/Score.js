"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Score(props) {
  const router = useRouter();
  const player1Points = props.player1Points;
  const player2Points = props.player2Points;
  const type = props.type;
  return (
    <div className="rounded border-2 border-headerOutline flex justify-between items-center w-full">
      <div className="w-1/3 m-1">
        <button onClick={() => router.push("/")}>
          <Image
            src="/logo.svg"
            width={750}
            height={750}
            alt="rock,paper and scissors game logo"
          />
        </button>
      </div>
      {type === "pve" && (
        <div className="bg-white rounded flex flex-col text-scoreText items-center h-fit w-fit m-1 px-6 py-2 sm:px-16 sm:py-4 sm:m-4 ">
          <p className=" text-xs sm:text-lg">SCORE</p>
          <p className="text-4xl sm:text-7xl font-extrabold text-darkText">
            {props.player1Points}
          </p>
        </div>
      )}
      {type === "pvp" && (
        <div className="flex">
          <div className="bg-white rounded flex flex-col text-scoreText items-center h-fit w-fit m-1 px-6 py-2 sm:px-16 sm:py-4 sm:m-4 ">
            <p className=" text-xs sm:text-lg">PLAYER 1</p>
            <p className="text-4xl sm:text-7xl font-extrabold text-darkText">
              {props.player1Points}
            </p>
          </div>
          <div className="bg-white rounded flex flex-col text-scoreText items-center h-fit w-fit m-1 px-6 py-2 sm:px-16 sm:py-4 sm:m-4 ">
            <p className=" text-xs sm:text-lg">PLAYER 2</p>
            <p className="text-4xl sm:text-7xl font-extrabold text-darkText">
              {props.player2Points}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
