let num = 0;                                                //defines num to have value of 0, assigned to number type
//num = "0";                                                //uncommenting would set num to a string of "0"
//num = false;                                              //uncommenting would set num to a boolean of false
console.info(typeof num);                                   //prints out num's type
let num2 = false;                                           //defines num2 to be a boolean, with value of false
console.log("num == false ::", num == num2);                //prints true at the end if num has same value as num2, false otherwise
                                                            // * * //
console.log("num === false ::", num === num2);              //"===" is a checker for exact value AND type;
                                                            //prints true at the end if num has same value AND type as num2, false otherwise
                                                            // * * //
console.log(num === false);                                 //if 0 or "0", prints false; if false, prints true
console.log(num === true);                                  //if 0 or "0", prints false; if false, prints false
console.log(num);                                           //prints out num
                                                            // * * //
console.log(!num);                                          //prints out the opposite of num in true or false fashion;
                                                            //if 0 or false, prints true;
                                                            //if "0", prints false
                                                            // * * //
console.log(num != true);                                   //if num is 0, "0" or false, prints true;
                                                            //if num is 1, prints false, because 1 can be read as true, and 0 can be read as false
                                                            // * * //
console.log(num !== true);                                  //if num is 0 or "0" or false, prints true;
                                                            //if num is 1, prints true, because despite the fact that 1 can be read as true, it is NOT a boolean,
                                                            //and "!==" checks if num is not a *boolean* true