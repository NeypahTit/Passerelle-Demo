//will exist globally within the whole script
var nameScript = "vlad script";

//will also exist globally within the whole script
let newNameScript = "new vlad script";

//first tries to execute...
try {
    if (true) {
        //exists only inside this 'if (true) { ... }' block
        let scopedVariable = "I am in scope";

        //exists outside of the aforementioned block
        var globalVariable = "I am global";
        
        //prints "vlad script | new vlad script"
        console.log(nameScript, "|", newNameScript);
        
        //prints "scopedVariable declared inside a block | I am in scope"
        console.log("scopedVariable declared inside a block", "|", scopedVariable);
        
        //prints "globalVariable declared inside a block | I am global"
        console.log("globalVariable declared inside a block", "|", globalVariable);
    }
//catches an error if it happens within the try block
} catch(error) {
    //displays in console the error details
    console.info(error);
    
    //displays an interactable window on the website
    alert("missing variable");
}

//prints "I am global"
console.log(globalVariable);

//would throw an error if uncommented; it targets a variable that only exists within the 'if (true) { ... }' block
//console.log(scopedVariable);