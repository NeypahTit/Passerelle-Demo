let username = "konov1";

let condition1 = (username == "konov1");
let condition2 = (username == "konov2");
let condition3 = (username == "Neypah");

if (condition1) {
    console.log("Username is konov1");
} else if (condition2) {
    console.log("Username is konov2");
} else {
    console.log("Not a known username!");
}

console.log((condition3 ? "Username is Neypah" : "Username is not Neypah"));