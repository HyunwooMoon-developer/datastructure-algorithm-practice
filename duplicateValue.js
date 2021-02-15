function hasDuplicateValue(array){
    let step = 0;
    for(let i = 0 ; i< array.length ; i++){
        for(let j = 0 ; j < array.length ; j++){
            step ++ ;
            if(i !== j && array[i] == array[j]){
                return true;
            }
        }
    }
    console.log(step);
    return false;
}

hasDuplicateValue([1,2,3,4]); //16 compare 16 times O(N^2)

function hasDuplicateValue2(array){
    let step = 0;
    let existingNumbers = [];
    for(let i = 0 ; i < array.length ; i++){
        step ++ ;
        //the code checks to see if the value already contains 1 before storing the 1 in the appropriate index.
        if(existingNumbers[array[i]] === undefined){
            existingNumbers[array[i]] = 1;
            //Each time the code finds a new number,
            // it stores the value 1 at the index of the existingNumber array that corresponds to this number.
        }else{
            return true;
        }
    }
    console.log(step);
    return false;
}

hasDuplicateValue2([1,2,3,4]); //4 O(N)