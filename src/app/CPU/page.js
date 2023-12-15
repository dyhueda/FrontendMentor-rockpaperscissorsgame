"use client";
import { useState } from "react";
import Button from "../components/Button";
import Game from "../components/Game";
import Score from "../components/Score";
import Image from "next/image";

export default function cpuPage() {
  const [showRule, setShowRule] = useState(false);
  const [points, setPoints] = useState(0)
  return (
    <div className="items-center flex flex-col h-full">
      <Score points={points} />
      <Game type={"CPU"} setPoints={setPoints} points={points}/>
      <div className="w-fit h-full flex flex-col-reverse mb-20">
        <Button
          title={"RULES"}
          transparent={true}
          onClick={() => {
            setShowRule(true);
          }}
        />
      </div>
      {showRule && 
      <div className="p-5 absolute top-0 bg-white w-full h-full flex flex-col items-center">
      <h1 className="text-darkText font-bold text-3xl my-24">RULES</h1>
      <Image
      src={"/image-rules.svg"}
      width={500}
      height={500}
      alt="Image of the rules"
      />
      <button onClick={()=>setShowRule(false)} className="mt-24"><Image
      src={"/icon-close.svg"}
      width={24}
      height={24}
      alt="X icon"
      /></button>
      </div>}
    </div>
  );
}
