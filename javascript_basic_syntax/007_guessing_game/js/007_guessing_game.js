//range is 0 ~ 10
let rngCpuNum = Math.floor(Math.random() * 10);

alert("Hello! I will think of a number between 0 and 10, and you must guess it within 5 attempts!");

for (i = 0; i <= 5; i++) {
    if (i == 5) {
        alert("Sorry, you were not able to guess my number!"
            + "\nMy guess was the number " + rngCpuNum);
        break;
    }

    let userGuess = prompt("Please put in your guess! (Between 0 and 10) | Attempt: " + (i + 1));

    if (userGuess < rngCpuNum) {
        alert("Your guess is smaller than my number!");
    } else if (userGuess > rngCpuNum) {
        alert("Your guess is larger than my number!");
    } else {
        alert("Congratulations! You have guessed the number!"
            + "\nAmount of attempts: " + (i + 1));
        break;
    }
}