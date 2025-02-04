const sumAll = function(init, end) {
    let small = 0;
    let big = 0;

    if(init < 0)
        return "ERROR";
    if(!Number.isInteger(init) || !Number.isInteger(end)){
        return "ERROR";
    }
    else{
        if(init > end){
            small = end;
            big = init;
        }else{
            small = init;
            big = end;
        }

        let sum = 0;
        for(let i = small; i <= big; i++){
            console.log(i)
            sum = sum + i;
        }
        return sum;
    }      

};

console.log(sumAll(9,4));

// Do not edit below this line
module.exports = sumAll;
