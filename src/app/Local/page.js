"use client";
import { useState } from "react";
import Button from "../components/Button";
import Game from "../components/Game";
import Score from "../components/Score";
import Image from "next/image";

export default function localPage() {
  const [showRule, setShowRule] = useState(false);
  const [player1Points, setPlayer1Points] = useState(0);
  const [player2Points, setPlayer2Points] = useState(0);
  return (
    <div className="items-center flex flex-col h-full sm:w-1/2">
      <Score player1Points={player1Points} player2Points={player2Points} type={"pvp"} />
      <Game type={"Local"} setPlayer1Points={setPlayer1Points} player1Points={player1Points} setPlayer2Points={setPlayer2Points} player2Points={player2Points} />
      <div className="sm:absolute sm:h-fit sm:bottom-0 sm:right-20 w-fit h-full flex flex-col-reverse mb-20">
        <Button
          title={"RULES"}
          transparent={true}
          onClick={() => {
            setShowRule(true);
          }}
        />
      </div>
      {showRule && (
        <div className="p-5 absolute top-0 bg-white w-full h-full flex flex-col items-center sm:w-1/4 sm:h-1/2 sm:top-1/4 sm:justify-around sm:rounded-md sm:items-start">
          <h1 className="text-darkText font-bold text-3xl my-24 sm:m-0 sm:mb-10">
            RULES
          </h1>
          <Image
            src={"/image-rules.svg"}
            width={500}
            height={500}
            alt="Image of the rules"
          />
          <button
            onClick={() => setShowRule(false)}
            className="mt-24 sm:m-0 sm:absolute sm:top-6 sm:right-6 "
          >
            <Image
              src={"/icon-close.svg"}
              width={24}
              height={24}
              alt="X icon"
            />
          </button>
        </div>
      )}
    </div>
  );
}
