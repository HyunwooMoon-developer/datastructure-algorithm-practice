function makeUpperCase(array){
    let newArray = [];
    for(let i = 0 ; i < array.length ; i++){
        newArray[i] = array[i].toUpperCase();
    }
    console.log(newArray);
    return;
}

let array = ['apple', 'banana' , 'candy', 'Hyunwoo Moon'];
makeUpperCase(array);

//O(N)

function makeUpperCase2(array){
    for(let i =0  ; i < array.length ; i++){
        array[i] = array[i].toUpperCase();
    }
    console.log(array);
    return;
}

makeUpperCase2(array);

//O(1)