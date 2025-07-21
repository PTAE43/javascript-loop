// Exercise #6: Reverse the String
let companyName = "TechUp Thailand"; //15
let reversedCompanyName = "";

// Start coding here
// for (let i = companyName.length - 1; i >= 0; i--) {
//     reversedCompanyName =reversedCompanyName+companyName[i];
// }


for (let char of companyName){
    reversedCompanyName=char + reversedCompanyName
}

console.log(reversedCompanyName);