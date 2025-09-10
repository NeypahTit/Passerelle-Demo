let game = "A Hat in Time";
let price = "";

switch (game) {
    case "A Hat in Time":
        price = "CHF 33.50";
        break;
    case "Hollow Knight":
        price = "CHF 16.79";
        break;
    case "Hollow Knight: Silksong":
        price = "CHF 21.99";
        break;
    case "No Man's Sky":
        price = "CHF 65.99";
        break;
    default: price = "IDK, that's not a game I recognize";
}

console.log(game, "|", price);