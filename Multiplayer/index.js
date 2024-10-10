//Create button for playing

function diceRendering() {
    // first we need to create a function to get random number
    function firstRandomNumbers() {
        let firstrandom = Math.floor(Math.random() * 6) + 1;
        return firstrandom;
    };


    // getting the dices

    let firstRandomDice = firstRandomNumbers();
    let secondRandomDice = firstRandomNumbers();
    let thirdRandomDice = firstRandomNumbers();
    let fourthRandomDice = firstRandomNumbers();

    console.log(firstRandomDice);
    console.log(secondRandomDice);
    console.log(thirdRandomDice);
    console.log(fourthRandomDice);
    //  Now get the  four dice cards
    let imageString = "../images/dice";

    const firstDice = imageString + firstRandomDice + ".png";
    const secondDice = imageString + secondRandomDice + ".png";
    const thirdDice = imageString + thirdRandomDice + ".png";
    const fourthDice = imageString + fourthRandomDice + ".png";

    // Now show the dices

    const firstPlayer = document.querySelector(".img1").setAttribute("src", firstDice);
    const secondPlayer = document.querySelector(".img2").setAttribute("src", secondDice);
    const thirdPlayer = document.querySelector(".img3").setAttribute("src", thirdDice);
    const fourthplayer = document.querySelector(".img4").setAttribute("src", fourthDice);

    // determine winner
    console.log(firstPlayer);

    function determineWinner() {
        let houseOne = firstRandomDice + secondRandomDice;
        let houseTwo = thirdRandomDice + fourthRandomDice;
        houseOne > houseTwo ? document.querySelector("h1").textContent = "Ola is the Winner" :
            document.querySelector("h1").textContent = "Sam is the Winner"
    }
    determineWinner();
};
