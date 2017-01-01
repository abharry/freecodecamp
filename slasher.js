/*
* Challenge desc - truncate the array from the index zero as specified by the second argument
* level - basic
* @author : HS<dcotre.1760@outlook.com>
*/
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var temp_arr=[];
  for(var i = howMany; i<arr.length; i++){
    temp_arr.push(arr[i]);
  }
  arr = temp_arr;
  return arr;
}

//slasher([1, 2, 3], 2);

