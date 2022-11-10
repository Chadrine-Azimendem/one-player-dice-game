const playersName = document.getElementById("playersName");
const inputContent = document.querySelector("input");
const nameSubmit = document.getElementById("nameSubmit");

console.log("Hi there");

nameSubmit.addEventListener("click", () => {
  let enteredName = inputContent.value;
  playersName.innerText = `Hi ${enteredName}, roll the dice to start the Game!`;
  inputContent.style.display = "none";
  nameSubmit.style.display = "none";
});

const diceImg = document.getElementById("diceImg");
const rollBtn = document.getElementById("rollBtn");

const randomNumber = () => {
  return Math.round(Math.random() * 5) + 1;
};

let diceImages = [
  "./resouces/oneFaceDice.png",
  "./resouces/twoFaceDice.png",
  "./resouces/threeFaceDice.png",
  "./resouces/fourFaceDice.png",
  "./resouces/fiveFaceDice.png",
  "./resouces/sixFaceDice.png",
];

let score = 0;
let rolls = 0;

rollBtn.addEventListener("click", () => {
  diceImg.style.display = "block";
  let randNum = randomNumber();
  diceImg.src = diceImages[randNum - 1];
  rolls++;
  document.getElementById("rollsCount").textContent = rolls;
  score += randNum;
  document.getElementById("scoreCount").textContent = score;
});
