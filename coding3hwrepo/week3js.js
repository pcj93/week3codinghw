let ages = [3,9,23,64,13,2,8,28,93,100]
let firstElement = ages[0]
let lastElement = ages[ages.length - 1]
console.log(lastElement - firstElement)

let num = 0;

for (let i = 0; i < ages.length; i++){
        num += ages[i];
    }
let avg = num/ ages.length;
console.log(avg);


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob',]
let totalLetterNum = 0
for (let i = 0; i < names.length; i++){
    totalLetterNum += names[i].length
}
let average = totalLetterNum / names.length
console.log(average)

 let namesList = "";
 for (let i =0; i<names.length; i++){
    namesList += names[i]+" ";
 }
console.log(namesList)



let nameArray = ["Pedro","Keegan","Apollo","Loki","Miko","Ally"]
let nameLengths = nameArray.map(function(firstName){
    return firstName.length;
})
console.log(nameLengths)
let sum =0 
for(let i = 0; i < nameLengths.length; i++){
    sum = sum + nameLengths[i];
}
console.log(sum)

function fullName(firstName, lastName){
    console.log(firstName + lastName)
}
fullName('Pedro ', 'Cossio');

let repeatWord = (word,n)=>{
    console.log(word.repeat(n));
}
repeatWord("Headache",3)

let arrayNum = [50, 50 , 10, 10]
function totalNums(arrayNum) {
    let sums = 0;
    for (let i = 0; i < arrayNum.length; i++){
        sums += arrayNum[i];
    }
    if(sums > 100){
        return true
    }
    if (sums <= 100){
        return false
    }
}
console.log(totalNums(arrayNum))

let numAvg = [15,25,45,50]
function arrayAvg(numAvg){
    let avg = 0;
    for ( let i = 0; i < numAvg.length; i++){
        avg += numAvg[i];
    }
avg = avg/ numAvg.length;
}
console.log(avg);


function averageArray(array1,array2){
    let sumArray1 = 0;
    for( let i = 0; i < array1.length; i++){
        sumArray1 += array1[i];
    }
    let averageArray1 = sumArray1 / array1.length

    let sumArray2 = 0
    for (let j = 0; j < array2.length; j++){
        sumArray2 += array2[j]; 
    }
    let averageArray2 = sumArray2 / array2.length;

    if ( averageArray1 > averageArray2){
        return true;
    } else {
        return false;
    }
}
    let firstArray = [1,2,3,4,5];
    let secondArray = [1,2,3];
    averageArray(firstArray, secondArray);


function willBuyDrink(isHotOutside,moneyInPocket){
    if (isHotOutside === true && moneyInPocket > 10.50){
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true,10.51));

function greet(name,lastName1){
    console.log("Hello " + name + ' ' + lastName1)
}
greet('Pedro', 'Cossio'); // created this since i have trouble for some reason putting
//something like this together and I feel like i have a better understanding of it; so it solved the
//problem of putting something like this together. 