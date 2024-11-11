let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameOver = false;

function makeMove(cell, index) {
  if (board[index] === "" && !isGameOver) {
    board[index] = currentPlayer;
    cell.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("status").innerText = isGameOver ? "" : `Player ${currentPlayer}'s turn`;
  }
}

  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      document.getElementById("status").innerText = `Player ${board[a]} wins!`;
      isGameOver = true;
      return;
    }
  }


function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  isGameOver = false;
  document.getElementById("status").innerText = "Player X's turn";
  const cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    cell.innerText = "";
  }
}
