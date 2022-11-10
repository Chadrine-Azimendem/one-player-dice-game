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
