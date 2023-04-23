"use strict";

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high_score = 0;

const display_message = function (message) {
  document.querySelector(".message").textContent = message;
};

//document.querySelector(".number").textContent = secret_number;

document.querySelector(".again").addEventListener("click", function () {
  secret_number = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  display_message("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    display_message("NO NUMBER NIGGA");
  } else if (guess === secret_number) {
    display_message("Correct My G");

    document.querySelector(".number").textContent = secret_number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > high_score) high_score = score;

    document.querySelector(".highscore").textContent = high_score;
  } else if (guess !== secret_number) {
    display_message(
      guess > secret_number
        ? "Too big, thats what she said"
        : "Too small, thats what she said"
    );
    score--;
  }

  if (!score) {
    document.querySelector(".message").textContent = "YOU LOST";
  }
  document.querySelector(".score").textContent = score;
});
