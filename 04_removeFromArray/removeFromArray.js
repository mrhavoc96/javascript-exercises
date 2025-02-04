

const removeFromArray = function(array, ...args) {
    
    const newArray = [];
    
    // if(!args.includes(items))

    array.forEach((item) => {

        if(!args.includes(item)){
            newArray.push(item);
        }
    });
    
    return newArray; 

};



// Do not edit below this line
module.exports = removeFromArray;
