var nameScript = "vlad script";
let newNameScript = "new vlad script";

try {
    if (true) {
        let scopedVariable = "I am in scope";
        var globalVariable = "I am global";
        console.log(nameScript, "|", newNameScript);
        console.log("scopedVariable declared inside a block", "|", scopedVariable);
        console.log("globalVariable declared inside a block", "|", globalVariable);
    }
} catch(error) {
    console.info("I caught an error");
    alert("missing variable");
}

console.log(globalVariable);
//console.log(scopedVariable);