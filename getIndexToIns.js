/*
* Challenge desc - Returns the position of insertion of the number(second argument) in the array(first argument), when it would be sorted in ascending order
* level - basic
* @author : HS<dcotre.1760@outlook.com>
*/
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a,b){return a-b;});
  arr.push(num);
  arr.sort(function(a,b){return a-b;});
  return arr.indexOf(num);
  
}

//getIndexToIns([40, 60], 50);
