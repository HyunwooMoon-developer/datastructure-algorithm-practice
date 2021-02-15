let set = {};
set["apple"] = 1;
set["banana"] = 1;
set["cucumber"] = 1;

console.log(set);

function hasDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] == array[j]) {
        console.log(true);
        return true;
      }
    }
  }
  console.log(false);
  return false;
}
console.log('hasDuplicateValue');
hasDuplicateValue(["a", "b", "c"]); //false;
hasDuplicateValue(["a", "a"]);  //true;

//O(N^2);

function hasDuplicateValue2(array){
    let existingValue = {};
    for(let i = 0 ; i < array.length ; i++){
        if(existingValue[array[i]]=== undefined){
            existingValue[array[i]] = 1;
        }
        else{
            console.log(true);
            return;
        }
    }
    console.log(false);
    return;
}
console.log('hasDuplicateValue2');
hasDuplicateValue2(['a','b','c']); //false
hasDuplicateValue2(['a','a']); //true

//O(N)