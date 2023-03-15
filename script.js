// Sort the array in descending array ( using sort)
var arr = [2, 1, 3, 8, 15];
//var result = arr.sort(function(a,b){return a-b});
//console.log("The desending order of array is", result)

// Calculare Average of array elements ( using reduce)
//var result1 = arr.reduce(function(d,f){return d+f/5},0);
//console.log("The average of array is", result1)

//return a new array containing exponential of each element ( using map )
var result2 = arr.map(function (item) {
  return item ** 2;
});
console.log('The exponential of array is', result2);

//filter the elements who are fully divided by 2 ( using filter )
var result3 = arr.filter(function (item1) {
  return item1 % 2 === 0;
});
console.log('The number that are fully divided by 2 of array is', result3);

//add new element to start and end of array

//remove an element from start and end of array

//for each element of array , print it on the console (using forEach)

//perform 4 types of slice and splice methods ( like slice (5) and slice (5,6) are 2 types )

//find an element with value 1 (using arr.find() method )

var result9 = arr.find();
console.log('The element with value 1 of array is', result9);

//find the highest element of array
var result10 = Math.max(...arr);
console.log('The highest number of array is', result10);
