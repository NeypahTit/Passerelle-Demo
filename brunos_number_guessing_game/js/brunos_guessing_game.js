////////////////////////////////
/**
 * TODO:
 * - Add distance for better messaging/gaming experience.
 * - Add try again proposal.
 * - Get the number limits and tries from the URL.
 * - Replace alert and prompts with html and slick looking css.
 */
////////////////////////////////
const debug = false;
const trysNbr = 3;
const limitHigh = 10;
const limitlow = 1;
let tried = 0;
let goodByeString = `😢 ${random} was the correct answer ...`;

// Get a random number, multiply by the desired range, get the absolute value (removing floating point value), re-arrange from the lower limit.
let random = Math.floor(Math.random() * (limitHigh - limitlow)) + limitlow;

console.log("loading...");

this.onload = () => {
    const instruct1 = `Number between ${limitlow} and ${limitHigh} guessing game ${(debug?`(${random})`:'')}`;
    const instructParagraph = document.querySelector("#instructions");
    const userGuessInput = document.querySelector("#userGuess");
    const submitButton = document.querySelector("#submit");

    console.log("loaded!");
    console.log(instructParagraph);
    instructParagraph.textContent = instruct1;

    console.log(submitButton);
    submitButton.addEventListener("click",
        (e) => myGame(e)
    );

    function myGame(e) {
        const userGuess = userGuessInput.value;
        console.log(userGuessInput.value);

        if (tried < trysNbr) {
            if (userGuess == null) {
                const chicken = confirm(`Are you chickening out? ("Ok" if YES "Cancel" if NO)`);
                if (chicken) {
                    alert(`Glad you are being honest, I give you one more trial`);
                    tried--;
                }
            } else if (userGuess == random) {
                goodByeString = `🎉 Well done you found ${random} in ${tried} tries`;
                handleGameEnd();
            } else { //Correct number not found.
                if (userGuess > limitHigh || userGuess < limitlow) { // Out of the limits.
                    alert(`${userGuess} is not in the limit, stupid !!! I asked between ${limitlow} and ${limitHigh}`);
                } else if( userGuess < random ) {
                    alert(`${userGuess} is too low`);
                } else {
                    alert(`too high`);
                }
            }

            tried++;
        } else {
            handleGameEnd();
        }
    }

    function handleGameEnd() {
        tried = trysNbr;
        userGuessInput.remove();
        submitButton.remove();
        instructParagraph.textContent = goodByeString;
    }
}

/* // Display instruction.
//alert(`Number between ${limitlow} and ${limitHigh} guessing game ${(debug?`(${random})`:'')}`);

// Start the Loop.
do {
    // Get user input.
    let userGuess = prompt(`What is the magic number ? ${trysNbr - tried} tries left`);
    console.log(userGuess, tried); //
    
    if (userGuess == null) {
        const chicken = confirm(`Are you chickening out? ("Ok" if YES "Cancel" if NO)`);
        if (chicken) {
            alert(`Glad you are being honest, I give you one more trial`);
            tried--;
        }
    } else if (userGuess == random) {
        goodByeString = `🎉 Well done you found ${random} in ${tried} tries`;
        break;
    } else { //Correct number not found.
        if (userGuess > limitHigh || userGuess < limitlow) { // Out of the limits.
            alert(`${userGuess} is not in the limit, stupid !!! I asked between ${limitlow} and ${limitHigh}`);
        } else if( userGuess < random ) {
            alert(`${userGuess} is too low`);
        } else {
            alert(`too high`);
        }
    }

    tried++;
} while (tried < trysNbr); // Kill the Loop when the number of tries is reached.

alert(goodByeString); */