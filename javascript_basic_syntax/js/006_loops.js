let limit = 25;
let count = 0;
let arr = [2,4,1,5,3,7,10,6,8,9];

for (let i = 0; i <= 10; i++) {
    console.log("for loop |", i);
}

for (let i = 0; i <= limit; i += 2) {
    console.log("more custom for loop |", i);
}

/////////

do {
    console.log("do ... while |", count);
    count++;
} while (count <= 25);

while (count > 0) {
    console.log("while ... |", count);
    count--;
}

/////////

do {
    console.log("This do ... while has executed once, despite my condition immediately being false! |", count, "| (do ... while (count > 0))");
    count--;
} while (count > 0);

while (count > 0) {
    console.log("This while ... should never run from this point, as count should be at 0 (while (count > 0))");
    console.log("...if it does, something has changed!")
    count--;
}

/////////

console.log("For loop for an array!");
for (i = 0; i < arr.length; i++) {
    console.log("The array contains", arr[i], "at index", i+"!");
    if (i == arr.length - 1) {
        console.log("Total array length is", arr.length, "indexes!");
    }
}

/////////

while (true) {
    if (count >= 50) {
        console.log("I found it! the \"break;\" command! I can break out yippee!", "(count = " + count + ")");
        break;
    }

    console.log("Ohh noo im in a while true loop!!!!!!!! INFINITE LOOP!!!!!");
    count++;
}

for (i = 0; i < 25; i++) {
    if (i % 2 == 1) continue;
    console.log("Special for loop, uses a \"continue;\" command at each odd number to skip this \"console.log()\" function!", "|", i);
}