function countdown(number){
    for(let i = number; i >= 0 ; i--){
        console.log(i);
    }
}

countdown(10);

function countdown2(number){
    console.log(number);
    if(number === 0){
        return;
    }else{
        countdown2(number-1)
    }
}

countdown2(10);