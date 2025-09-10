let username = "konov1";                                                                //initializes username as a string type, with value "konov1";

let condition1 = (username == "konov1");                                                //equals true if the username is "konov1", false otherwise - both cases make it of boolean type
let condition2 = (username == "konov2");                                                //equals true if the username is "konov2", false otherwise - both cases make it of boolean type
let condition3 = (username == "Neypah");                                                //equals true if the username is "Neypah", false otherwise - both cases make it of boolean type

if (condition1) {                                                                       //if condition1 from earlier is true, i.e. username == "konov1"
    console.log("Username is konov1");                                                  //prints "Username is konov1" if condition1 is true
} else if (condition2) {                                                                //if condition1 is false, goes forward to check if condition2 is true, i.e. username == "konov2"
    console.log("Username is konov2");                                                  //prints "Username is konov2" if condition2 is true
} else {                                                                                //if no other check resulted in true, execute this
    console.log("Not a known username!");                                               //prints "Not a known username!"
}

console.log((condition3 ? "Username is Neypah" : "Username is not Neypah"));            //ternary if-else statement, a.k.a. made in one line;
                                                                                        //behaves the same as:
                                                                                        //
                                                                                        // if (something) {
                                                                                        //   do_if_true;
                                                                                        // } else {
                                                                                        //   do_if_false;
                                                                                        // }
                                                                                        //