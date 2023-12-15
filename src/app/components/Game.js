"use client";

import { useEffect, useState } from "react";
import OptionButton from "./OptionButton";
import { CPUplay, GetWinner } from "../utils/Game";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";
export default function Game(props) {
  const [options, setOptions] = useState([]);
  const [winner, setWinner] = useState();
  const [wasSelected, setWasSelected] = useState(false);
  const router = useRouter()
  const setPoints = props.setPoints
  const points = props.points
  useEffect(() => {
    if (options.length == 1) {
      const cpu = CPUplay();
      setOptions([...options, cpu]);
      const winner = GetWinner([options[0], cpu])
      setWinner(winner);
      if(winner === "player1"){
        setPoints(points + 1)
      }
    }
  }, [options]);
  const handlePlayAgain = () =>{
    setWinner()
    setWasSelected(false)
    setOptions([]);
  }
  return (
    <>
      {wasSelected ? (
        <div className="flex flex-col w-full items-center">
          <div className="flex justify-between w-full my-20">
            <div className="flex flex-col items-center gap-2 relative">
              <OptionButton
                src={`icon-${options[0]}.svg`}
                color={`bg-${options[0]}Gradient`}
                title={options[0]}
              />
              <p>YOU PICKED</p>
              <div
                className={`${
                  winner === "player1" ? "block" : "hidden"
                } absolute top-[-136px] left[-136px] bg-winner -z-10 w-96 h-96`}
              ></div>
            </div>
            <div className="flex flex-col items-center gap-2 relative">
              <OptionButton
                src={`icon-${options[1]}.svg`}
                color={`bg-${options[1]}Gradient`}
                title={options[1]}
              />
              <p>THE HOUSE PICKED</p>
              <div
                className={`${
                  winner === "player2" ? "block" : "hidden"
                } absolute top-[-136px] left[-136px] bg-winner -z-10 w-96 h-96`}
              ></div>
            </div>
          </div>
          <div className="w-2/3 flex flex-col items-center gap-5">
            <h1 className=" text-6xl font-medium">
            {winner==="player1"&& "YOU WIN"}
            {winner==="player2"&& "YOU LOSE"}
            {winner==="draw"&& "DRAW"}
            </h1>

            <Button title={"PLAY AGAIN"} onClick={handlePlayAgain} />
          </div>
        </div>
      ) : (
        <div className="gap-8 w-80 h-64 flex flex-col items-center bg-[url(/bg-triangle.svg)]  bg-no-repeat bg-[length:50%] bg-center my-10 ">
          <div className="flex gap-20 justify-center">
            <OptionButton
              setWasSelected={setWasSelected}
              setOptions={setOptions}
              options={options}
              src={"icon-paper.svg"}
              color={"bg-paperGradient"}
              title={"paper"}
            />
            <OptionButton
              setWasSelected={setWasSelected}
              setOptions={setOptions}
              options={options}
              src={"icon-scissors.svg"}
              color={"bg-scissorsGradient"}
              title={"scissors"}
            />
          </div>
          <OptionButton
            setWasSelected={setWasSelected}
            setOptions={setOptions}
            options={options}
            src={"icon-rock.svg"}
            color={"bg-rockGradient"}
            title={"rock"}
          />
        </div>
      )}
    </>
  );
}
