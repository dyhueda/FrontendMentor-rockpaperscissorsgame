export function GetWinner(array){
  if(array.length == 2){
    const player1 = array[0];
    const player2 = array[1];
    console.log(player1, player2)
    if(player1 == player2){
    return "draw"
    }
    if(player1 === "paper" && player2 === "rock" || player1 === "rock" && player2 === "scissors" || player1 === "scissors" && player2 === "paper"){
      return "player1"
    }else{
      return "player2"
    }

  }

}
export function CPUplay() {
  const options = ["rock", "paper" , "scissors"]
  let aleatoryNumber = Math.floor(Math.random() * 3)
  return options[aleatoryNumber]
}
