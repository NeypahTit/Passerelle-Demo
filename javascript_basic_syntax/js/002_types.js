let num = 99;                                               //defines num as a number type
console.log(num);                                           //prints "99"
console.info(typeof num);                                   //prints "number"

num = false;                                                //defines num as a boolean type
console.log(num);                                           //prints "false"
console.info(typeof num);                                   //prints "boolean"

num = "0";                                                  //defines num as a string type
console.log(num);                                           //prints "0"
console.info(typeof num);                                   //prints "string"

let bool = false;                                           //defines "bool" as a boolean type
console.info("typeof bool-->"+typeof bool);                 //prints "typeof bool-->boolean"
bool = 0;                                                   //defines "bool" as a number type
console.info("typeof bool-->"+typeof bool);                 //prints "typeof bool-->number"

let arr = [99, "1", true, 3];
console.log(arr);                                           //prints ">Array (4) [ 99, "1", true, 3 ]
console.info("typeof arr-->"+typeof arr);                   //prints "typeof arr-->object"
arr[1] = 88;                                                //changes the 2nd position content in the array from "1" to 88
console.log(arr);                                           //prints ">Array (4) [ 99, 88, true, 3 ]

let obj = {                                                 //creates an object with a name attribute and an age attribute
    name: "Pikachu",                                        //defines the name attribute and its value
    age: 8                                                  //defines the age attribute and its value
};                                                          //end of obj declaration

console.info("typeof obj-->"+typeof obj);                   //prints "typeof obj-->object"
console.log("obj.age-->"+obj.age);                          //prints "obj.age-->8"
console.info("typeof obj.age-->"+typeof obj.age);           //prints "typeof obj.age-->number"
console.log("obj.name-->"+obj.name);                        //prints "obj.name-->Pikachu"
console.info("typeof obj.name-->"+typeof obj.name);         //prints "typeof obj.name-->string"

console.log("Hello! I am", obj.name+"!",                    //prints "Hello! I am Pikachu! I am 8 years old, supposedly!"
            "I am", obj.age, "years old, supposedly!");     //you can break up console.log() like this to make it, for example, more readable

console.error("ERROR IN RED");                              //prints "ERROR IN RED", marked as an error
console.warn("WARNING IN YELLOW");                          //prints "WARNING IN YELLOW", marked as a warning