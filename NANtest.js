var all = [5,6,7,true,'sohel',{"mango":25},[10,20,30],NaN,undefined]
console.log(all)

let NaNOnly = []
all.map((x)=>{
    if(isNaN(x) && typeof(x)=="number")
        NaNOnly.push(x)
})
console.log(NaNOnly)
