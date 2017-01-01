/*
* Challenge desc - returns the sum of all the numbers in range given by the array's(first argument) first and second element.
* level - Intermediate
* @author : HS<dcotre.1760@outlook.com>
*/
function sumAll(arr) {
  sum = 0;
  arr.sort(function(a,b){
    return a-b;
  });
  console.log(arr);
  for(var i=arr[0]; i<=arr[1]; i++){
    sum += i;
  }
  
  return sum;
}

//sumAll([1, 4]);

