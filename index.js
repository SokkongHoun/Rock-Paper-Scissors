let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
  draw: 0,
};
function moveGenerator() {
  let mathRandom = Math.random();
  let randomMove;

  if (mathRandom < 1 / 3) {
    randomMove = "rock";
    console.log("Machine pick rock");
  } else if (mathRandom >= 1 / 3 && mathRandom < 2 / 3) {
    randomMove = "paper";
    console.log("Machine pick paper");
  } else {
    randomMove = "scissor";
    console.log("Machine pick scissor");
  }

  return randomMove;
}

function playerMove(move) {
  let randomMove = moveGenerator();
  let result;
  if (randomMove === "rock") {
    if (move === "rock") {
      result = "You Draw";
    } else if (move === "paper") {
      result = "You Win";
    } else if (move === "scissor") {
      result = "You Lose";
    }
  }

  if (randomMove === "scissor") {
    if (move === "scissor") {
      result = "You Draw";
    } else if (move === "paper") {
      result = "You Lose";
    } else if (move === "rock") {
      result = "You Win";
    }
  }

  if (randomMove === "paper") {
    if (move === "paper") {
      result = "You Draw";
    } else if (move === "scissor") {
      result = "You Win";
    } else if (move === "rock") {
      result = "You Lose";
    }
  }

  function scoreBoard() {
    if (result === "You Win") {
      score.win += 1;
    } else if (result === "You Lose") {
      score.lose += 1;
    } else if (result === "You Draw") {
      score.draw += 1;
    }
  }
  scoreBoard();
  saveToStorage();
  document.querySelector(".js-confirmation").innerHTML = result;
  scoreDisplay();
}

function saveToStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

const resetBtn = document.querySelector(".js-reset-score");

resetBtn.addEventListener("click", () => {
  score = {
    win: 0,
    lose: 0,
    draw: 0,
  };
  saveToStorage();
  scoreDisplay();
});

function scoreDisplay() {
  document.querySelector(".js-score-board").innerHTML = `
      <p class="win">Win: ${score.win}</p>
      <p class="lose">Lose: ${score.lose}</p>
      <p class="draw">Draw: ${score.draw}</p>
    `;
}
