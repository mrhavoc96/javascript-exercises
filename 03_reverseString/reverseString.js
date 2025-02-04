const reverseString = function(string) {
    string = string.split("");
    let reverse = "";
    for(let i = string.length - 1; i >= 0; i--){
        reverse += string[i]; 
    }
    return reverse
};

console.log(reverseString("Hello"))


// Do not edit below this line
module.exports = reverseString;
