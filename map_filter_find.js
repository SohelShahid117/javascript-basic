//javascript map method
var number = [1,2,3,4,5,6,7,8,9,10]

var result = number.map((n,index,array)=>{
    console.log(n+10,index,array)
    return n>5;
})
console.log(result)
// [false, false, false,false, false, true, true,  true,  true, true]

var result2 = number.map((n)=>{
    // return n=n*5;
    return n*5;
})
console.log(result2)
// [5, 10, 15, 20, 25,30, 35, 40, 45, 50]

var result4 = number.map((n)=>{
    return n%2==0;
})
console.log(result4)
// [false, true,  false,true,  false, true,false, true,  false,true]

let odd = []
var result5 = number.map((n)=>{
    if(n%2==0){
        odd.push(n)
    }
})
console.log(result5)
// [undefined, undefined,undefined, undefined,undefined, undefined,undefined, undefined,undefined, undefined ]
console.log(odd)
// [ 2, 4, 6, 8, 10 ]

let greaterFive = []
number.map((n)=>{
    if(n>5){
        greaterFive.push(n)
    }
})
console.log(greaterFive)
// [ 6, 7, 8, 9, 10 ]

var all = [5,6,7,true,'sohel',{"mango":25},[10,20,30],NaN,undefined]
console.log(all)

var num = []
var nmbr = all.map((x)=>{
    if(typeof(x)=='number'){
        num.push(x)
    }
    // console.log(typeof(x))
})
console.log(num)

var num2 = []
var nmbr2 = all.map((x)=>{
    if(typeof(x)=='number' && !isNaN(x)){
        num2.push(x)
    }
    console.log(typeof(x))
})
console.log(num2)

const n = 5
console.log(typeof(n))
console.log(isNaN(n))

const y = NaN
console.log(isNaN(y))

//javascript filter method
let numbersOnly = all.filter(item => typeof item === 'number' && !isNaN(item));
console.log(numbersOnly)

let numbersOnly2 = all.filter(item => typeof item !== 'number' && isNaN(item));
console.log(numbersOnly2)

let stringOnly = all.filter(item => typeof item === 'string');
console.log(stringOnly)

let booleanOnly = all.filter(item => typeof item === 'boolean');
console.log(booleanOnly)

let WithOutNumber = all.filter(item => isNaN(item));
console.log(WithOutNumber)

let NaNOnly = []
all.map((x)=>{
    if(isNaN(x) && typeof(x)=="number")
        NaNOnly.push(x)
})
console.log(NaNOnly)
//[ NaN ]

let arraysOnly = all.filter(item => Array.isArray(item));
console.log(arraysOnly); // Output: [[10, 20, 30]]

let objectsOnly = all.filter(item => typeof item === 'object' && item !== null && !Array.isArray(item));
console.log(objectsOnly); // Output: [{"mango":25}]

let undefinedOnly = all.filter(item => typeof item === 'undefined');
console.log(undefinedOnly);


let numbersss = [1,2,3,4,5,6,7,8,9,10]
let oddNumber = numbersss.filter((n)=>{
    return n%2 !==0
})
console.log(oddNumber)

//javascript find method
let FirstOddNumber = numbersss.find((n)=>{
    return n%2 !==0
})
console.log(FirstOddNumber)