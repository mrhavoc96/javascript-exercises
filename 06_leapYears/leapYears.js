const leapYears = function(year) {
    let byFour = year%4;
    let byHund = year%100;
    let byFourHund = year%400;

    if(byHund === 0 && byFourHund !== 0){
        return false;
    }

    if(byFour === 0){
        return true;
    }else{
        return false;
    }
    
};

// Do not edit below this line
module.exports = leapYears;
