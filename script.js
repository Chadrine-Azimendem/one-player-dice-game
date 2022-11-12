// get variables from DOM
const playersName = document.getElementById("playersName");
const inputContent = document.querySelector("input");
const nameSubmit = document.getElementById("nameSubmit");
const diceImg = document.getElementById("diceImg");
const rollBtn = document.getElementById("rollBtn");

// disable roll button
rollBtn.disabled = true;

// submit players name and enable the roll button.
nameSubmit.addEventListener("click", () => {
  let enteredName = inputContent.value;
  playersName.innerText = `Hi ${enteredName}, roll the dice to start the Game!`;
  inputContent.style.display = "none";
  nameSubmit.style.display = "none";
  document.querySelector("label").style.display = "none";
  rollBtn.disabled = false;
  //   rollBtn.style.backgroundColor = "geen";
});

// calculates a random integer between 1 and 6.
const randomNumber = () => {
  return Math.round(Math.random() * 5) + 1;
};

// declare array of dice images.
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

// executes these events when roll button is clicked
rollBtn.addEventListener("click", () => {
  // show the dice only after the first roll.
  diceImg.style.display = "block";

  let randNum = randomNumber();
  diceImg.src = diceImages[randNum - 1];

  // update the roll count
  rolls++;
  document.getElementById("rollsCount").textContent = rolls;

  // update the score count.
  score += randNum;
  document.getElementById("scoreCount").textContent = score;

  // check if player wins or loses
  if (score > 20) {
    playersName.innerText =
      "Congratulations, you win!!! Enter your name to restart.";
    score = 0;
    rolls = 0;

    // play winner sound
    const win = document.getElementById("win");
    win.play();

    document.getElementById("scoreCount").textContent = score;
    document.getElementById("rollsCount").textContent = rolls;
    inputContent.style.display = "block";
    nameSubmit.style.display = "block";
    rollBtn.disabled = true;
  } else if (score < 20 && randNum === 1) {
    playersName.innerText = "Sorry, you lost!!! Enter your name to restart.";
    score = 0;
    rolls = 0;

    const lost = document.getElementById("lost");
    lost.play();

    document.getElementById("scoreCount").textContent = score;
    document.getElementById("rollsCount").textContent = rolls;
    inputContent.style.display = "block";
    nameSubmit.style.display = "block";
    rollBtn.disabled = true;
  }
});
