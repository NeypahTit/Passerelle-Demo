//const means that the value is Constant - it will not change no matter what
// * * //
// * * //
const num = 0;                  //defines a const of type number
//num = 1;                      //uncommenting will throw an error --> trying to change a const
//num = "0";                    //uncommenting will throw an error --> trying to change a const
console.log(num);               //prints out the num const

const bool = false;             //defines a const of type boolean
//bool = true;                  //uncommenting will throw an error --> trying to change a const
console.log(bool);              //prints out the bool const

const str = "hello";            //defines a const of type string
//str = "hallo";                //uncommenting will throw an error --> trying to change a const
console.log(str);               //prints out the str const

const arr = [0,1,2,3]           //defines a const of type array, with 4 indexes of 0, 1, 2, and 3
                                //this only fixes in place the variable itself, the contents within this array const CAN be changed, including value(s) and quantity
                                // * * //
//arr = [33,55,77,1233434]      //uncommenting will throw an error --> trying to change the entire array const aka the variable
console.log(arr);               //prints out the arr const
arr[0] = 33;                    //changing 1st index...
arr[1] = 55;                    //changing 2nd index...
arr[2] = 77;                    //changing 3rd index...
arr[3] = 1233434;               //changing 4th index...
console.log(arr);               //prints out the arr const, now with changed contents, but the const variable itself stayed the same

const obj = {                   //defines a const of object type, with attributes of name and age
    name: "Pikachu",            //name is Pikachu, string type
    age: 8                      //age is 8, number type
};                              //end of declaration
                                // * * //
/* obj = {                      //uncommeting will throw an error --> trying to change the entire object aka the variable
    name: "Raichu",             // * * //
    age: 9                      // * * //
}; */                           // * * //
console.log(obj);               //prints out the obj const
obj.name = "Raichu";            //changes the name of obj to Raichu
obj.age = 9;                    //changes the age of obj to 9
console.log(obj);               //prints out the obj const, now with changed contents, but the const variable itself stayed the same