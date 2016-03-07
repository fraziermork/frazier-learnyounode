// console.log(process.argv);

var numbersArray = process.argv;
numbersArray.splice(0,2);
console.log(numbersArray.reduce(function(acc,current){
  acc += Number(current);
  return acc;
}, 0));
