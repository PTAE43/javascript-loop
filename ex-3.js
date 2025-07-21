// Exercise #3: Find a Minimum Score
let studentScores = [100, 20, 3, 1000];
let minScore = 0;

// Start coding here
minScore = Math.min(...studentScores);
// or using a loop
// let minScore = studentScores[0];
// for(let score of studentScores) {
//     if(score < minScore){
//         minScore = score;
//     }
// }
console.log(minScore);
