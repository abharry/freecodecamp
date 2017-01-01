/*
* Challenge desc - returns the largest number in each of the sub-array of numbers passed as the array of array to the function.
* level - basic
* @author : HS<dcotre.1760@outlook.com>
*/
function largestOfFour(arr) {
  // You can do this!
  arr_f = [];
  for(var i=0; i<arr.length ; i++){
    init_large = arr[i][0];
    for(var j=0; j<arr[i].length; j++){
      if(arr[i][j]>init_large){
        init_large = arr[i][j];
      }
    }
    arr_f.push(init_large);
  }
  return arr_f;
}
//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

