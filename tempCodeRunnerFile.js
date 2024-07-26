let numbersOnly = all.filter(item => typeof item === 'number' && !isNaN(item));
console.log(numbersOnly)