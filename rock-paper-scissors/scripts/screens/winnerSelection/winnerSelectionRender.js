import { maxWins, playerLose, playerWin, setRound, currentRound, lastGames, setLastGames } from "../../../variables.js";
import { winnerSelectionContent } from "../winnerSelection/winnerSelectionContent.js";
import { winnerSelectionListeners } from "./winnerSelectionListeners.js";
import { saveGame } from "../../localStorage/saveGame.js";
import { rounds } from "../../../variables.js";

export const winnerSelectionRender = (winner, player, computer) => {
  winnerSelectionContent(winner, player, computer);
  if (maxWins === playerWin || maxWins === playerLose) {
    setRound(playerWin, playerLose);
    winnerSelectionListeners();
    setLastGames();
    console.log(lastGames)
    saveGame();
    rounds.textContent = `Wins: ${currentRound} / ${maxWins}`;
  };
}