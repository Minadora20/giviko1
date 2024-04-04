const buttons = document.querySelectorAll(".btn");
const resultDiv = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    resultDiv.textContent = result;
  });
});

function computerPlay() {
  const choices = ["ჭა", "ბადე", "მაკრატელი"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "ფრე";
  } else if (
    (playerSelection === "ჭა" && computerSelection === "მაკრატელი") ||
    (playerSelection === "მაკრატელი" && computerSelection === "ბადე") ||
    (playerSelection === "ბადე" && computerSelection === "ჭა")
  ) {
    return `შენ მოიგე ${playerSelection} > ${computerSelection}`;
  } else {
    return `შენ წააგე! ${computerSelection} > ${playerSelection}`;
  }
}
