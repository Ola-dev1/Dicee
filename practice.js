// lets have a function to generate random numbers

// function generateRandomNumbers() {
//   return Math.floor(Math.random() * 6) + 1;
// }
// const a = generateRandomNumbers();
// const b = generateRandomNumbers();
// // lets replace the images randomly
// const imageString = "./images/" + "dice" + 4 + ".png";
// const imageString1 = "./images/" + "dice" + b + ".png";

//  document.querySelector(".img1").setAttribute("src", imageString);
//  document.querySelector(".img2").setAttribute("src", imageString1);

//  if (a > b) {
//    document.querySelector("h1").textContent = "Player 1 wins";
//  }
//  else if (a < b) {
//      document.querySelector("h1").textContent = "Player 2 wins";
//  }
//  else {
//      document.querySelector("h1").textContent = "It's a tie";
//  }

//  $(".img1").attr("src", imageString);
//  $(".img2").attr("src", imageString1);

//  if (a > b) {
//   $("h1").text("Player 1 wins");
//   $("h1").after(
//     "<div class = 'details'><button class = 'btn-one'>Weldone!!! player 1</button></div>"
//   );
//   $(".btn-one").addClass(".btn-one");
//   $(".btn-one").click(function () {
//     $("h1").slideToggle();
//   });
// } else if (a < b) {
//   $("h1").text("Player 2 wins");
// } else {
//   $("h1").text("it's a tie");
// }

// practice
// const changeColor = document.querySelector(".title");
// changeColor.style.color = "red";
// console.log(changeColor);

// const name = "ola"
// const imageSeleted = document.querySelector("img").setAttribute("src", imageString);
// console.log(imageSeleted);

// const changeBody = document.querySelector("body").setAttribute("class", )



// lets write a function to get a random number

function diceRendering() {
  function generateRandomNumbers() {
    let number = Math.floor(Math.random() * 6) + 1;
    return number;
  }
  
  // lets put our code inside the virtual dice
  let firstGeneratedDiceNumber = generateRandomNumbers();
  
  let secondGeneratedDiceNumber = generateRandomNumbers();
  
  
  // lets generate image string
  const firstDice = "./images/dice" + firstGeneratedDiceNumber + ".png";
  
  const secondDice = "./images/dice" + secondGeneratedDiceNumber + ".png";
  
  // lets select the images and replaces them with the dynmically changing dice.
  const firstDiceImage = document.querySelector(".img1").setAttribute("src", firstDice);
  
  const secondDiceImage = document.querySelector(".img2").setAttribute("src", secondDice);
  
  // lets determine the winner
  
  function determineWinner(showText) {
    if (firstGeneratedDiceNumber > secondGeneratedDiceNumber) {
      return showText.innerText = "Player 1 wins"
    }
    else if (firstGeneratedDiceNumber < secondGeneratedDiceNumber) {
      return showText.innerText = "Player 2 wins"
    }
    else {
      return showText.innerText = "It is a draw"
    }
  }
  
  determineWinner(document.querySelector("h1"));
}





