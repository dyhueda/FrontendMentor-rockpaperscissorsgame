"use client";

import { useEffect, useState } from "react";
import OptionButton from "./OptionButton";
import { CPUplay, GetWinner } from "../utils/Game";
import Button from "./Button";
export default function Game(props) {
  const [options, setOptions] = useState([]);
  const [winner, setWinner] = useState();
  const [wasSelected, setWasSelected] = useState(false);
  const [player, setPlayer] = useState("Player 1");
  const setPlayer1Points = props.setPlayer1Points;
  const player1Points = props.player1Points;
  const setPlayer2Points = props.setPlayer2Points;
  const player2Points = props.player2Points;
  const type = props.type;

  useEffect(() => {
    if (type === "CPU") {
      if (options.length == 1) {
        const cpu = CPUplay();
        setOptions([...options, cpu]);
        const winner = GetWinner([options[0], cpu]);
        setWinner(winner);
        setWasSelected(true);
        if (winner === "player1") {
          setPlayer1Points(player1Points + 1);
        }
      }
    }
    if (type === "Local") {
      if (options.length === 1) {
        setPlayer("Player 2");
      }
      if (options.length === 2) {
        const winner = GetWinner(options);
        setWinner(winner);
        setWasSelected(true)
        if(winner === "player1"){
          setPlayer1Points(player1Points + 1)
        }
        if(winner === "player2"){
          setPlayer2Points(player2Points + 1)
        }
      }
    }
  }, [options]);

  const handlePlayAgain = () => {
    setWinner();
    setWasSelected(false);
    setOptions([]);
    setPlayer("Player 1")
  };

  return (
    <>
      {wasSelected ? (
        <div className="flex flex-col w-full items-center text-2xl">
          <div className="flex justify-between w-full my-20">
            <div className="flex flex-col items-center gap-2 relative">
              <OptionButton
                src={`icon-${options[0]}.svg`}
                color={`bg-${options[0]}Gradient`}
                title={options[0]}
              />
              <p>{type === "CPU" && "YOU PICKED"}{type === "Local" && "PLAYER 1 PICKED"}</p>
              <div
                className={`${
                  winner === "player1" ? "block" : "hidden"
                } absolute top-[-136px] left[-136px] bg-winner -z-10 w-96 h-96 sm:w-[600px] sm:h-[600px] sm:top-[-204px] sm:left[-204px]`}
              ></div>
            </div>
            <div className="flex flex-col items-center gap-2 relative">
              <OptionButton
                src={`icon-${options[1]}.svg`}
                color={`bg-${options[1]}Gradient`}
                title={options[1]}
              />
              <p>{type === "CPU" && "THE HOUSE PICKED"}{type === "Local" && "PLAYER 2 PICKED"}</p>
              <div
                className={`${
                  winner === "player2" ? "block" : "hidden"
                } absolute top-[-136px] left[-136px] bg-winner -z-10 w-96 h-96 sm:w-[600px] sm:h-[600px] sm:top-[-204px] sm:left[-204px]`}
              ></div>
            </div>
          </div>
          <div className="w-2/3 flex flex-col items-center gap-5">
            <h1 className=" text-6xl font-medium">
              {winner === "player1" && type === "CPU" && "YOU WIN"}
              {winner === "player2" && type === "CPU" && "YOU LOSE"}
              {winner === "player1" && type === "Local" && "PLAYER 1 WIN"}
              {winner === "player2" && type === "Local" && "PLAYER 2 WIN"}
              {winner === "draw" && "DRAW"}
            </h1>

            <Button title={"PLAY AGAIN"} onClick={handlePlayAgain} />
          </div>
        </div>
      ) : (
        <div className="items-center flex flex-col">
          {type === "Local" && (
            <h1 className="text-3xl font-bold pt-4 sm:text-5xl">{player}</h1>
          )}
          <div className="gap-8 sm:gap-24 w-80 h-64 flex flex-col items-center bg-[url(/bg-triangle.svg)]  bg-no-repeat bg-[length:50%] bg-center my-10 sm:pt-9 sm:bg-[length:70%] sm:w-[600px] sm:h-[600px]">
            <div className="flex gap-20 sm:gap-32 justify-center">
              <OptionButton
                setOptions={setOptions}
                options={options}
                src={"icon-paper.svg"}
                color={"bg-paperGradient"}
                title={"paper"}
              />
              <OptionButton
                setOptions={setOptions}
                options={options}
                src={"icon-scissors.svg"}
                color={"bg-scissorsGradient"}
                title={"scissors"}
              />
            </div>
            <OptionButton
              setOptions={setOptions}
              options={options}
              src={"icon-rock.svg"}
              color={"bg-rockGradient"}
              title={"rock"}
            />
          </div>
        </div>
      )}
    </>
  );
}
