function intersection(arr1, arr2){
    let result = [];

    for(let i = 0 ; i < arr1.length ; i++){
        console.log(arr1);
        for(let j = 0 ; j < arr2.length ; j++){
            if(arr1[i] ===arr2[j]){
                result.push(arr1[i]);
                break;
            }
        }
    }
    console.log(result.sort());
    return;
}

let arr1 = [1,2,5,3];
let arr2 = [3,6,4,5];
intersection(arr1, arr2); //O(N^2)