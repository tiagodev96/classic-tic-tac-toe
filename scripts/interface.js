document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");
  let restartButton = document.querySelector(".restartButton");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });

  restartButton.addEventListener("click", restartGame);
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      /* alert("Game Over!"); */
      let modal = document.querySelector(".modal-overlay");
      modal.classList.toggle("active");

      let span = document.querySelector(".winnerIcon");
      if (playerTime === 0) {
        span.classList.add("circleWin");
      } else {
        span.classList.add("crossWin");
      }
    }, 10);
  }

  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}

function restartGame() {
  closeModal();
  removeSquares();

  defaultVariables();
}

function removeSquares() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    if (square.firstChild) {
      square.removeChild(square.firstElementChild);
    }
  });
}

function closeModal() {
  let span = document.querySelector(".winnerIcon");

  let modal = document.querySelector(".modal-overlay");

  modal.classList.remove("active");

  if (span.classList.contains("circleWin")) {
    span.classList.remove("circleWin");
  } else {
    span.classList.remove("crossWin");
  }
}

function defaultVariables() {
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;
}
