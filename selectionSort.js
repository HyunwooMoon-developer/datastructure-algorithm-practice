function selectionSort(array){
    for(let i = 0 ; i < array.length ; i++){
        let lowestNumber = i;
        for(let j = i+1 ; j < array.length ; j++){
            if(array[j] < array[lowestNumber]){
                lowestNumber = j;
            }
        }
        if(lowestNumber != i){
            let temp = array[i];
            array[i] = array[lowestNumber];
            array[lowestNumber] = temp;
        }
    }
    console.log(array);
    return array;
}

selectionSort([3,2,5,7, -1, -10, 3.5]); // O(N^2)