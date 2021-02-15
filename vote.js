var vote = [];

function addVote(candidate){
    vote.push(candidate);
}

let candidate = 'Thomas Jefferson';
let candidate2 = 'John Adams';
let candidate3 = 'Thomas Jefferson';
addVote(candidate);
addVote(candidate2);
addVote(candidate3);

console.log(vote);

function countVotes(vote){
    let total = {};
    for(let i = 0 ; i < vote.length ; i++){
        if(total[vote[i]]){
            total[vote[i]] ++;
        }else{
            total[vote[i]] = 1;
        }
    }
    console.log(total);
    return total;
}

countVotes(vote);

//O(N);

var vote2 = {};

function addVote2(candidate){
    if(vote2[candidate]){
        vote2[candidate]++;
    }else{
        vote2[candidate] = 1;
    }
}

addVote2('a');
addVote2('b');
addVote2('a');
console.log(vote2);

//O(1);