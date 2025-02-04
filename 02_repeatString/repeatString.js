const repeatString = function(string, num) {
    let copy = string;
    if (num === 0){
        string = "";
        return string;
    } 
    if(num > 0){
        for(let i = 0; i < num - 1; i++){
            string +=copy;
        }
        return string;
    }else{
        return "ERROR";
    }
        
    
    

};

// let string = "hello"
// console.log(repeatString(string, 3));


// Do not edit below this line
module.exports = repeatString;
