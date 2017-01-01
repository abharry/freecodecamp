/*
* Challenge desc - find elements from the array(first argument) which satisfies the func(second argument, a function)
* level - Intermediate
* main_function - findElement
* @author : HS<dcotre.1760@outlook.com>
*/
function findElement(arr, func) {
  var num;
  for(var i = 0 ; i<arr.length; i++){
    if(func(arr[i])){
      num=arr[i];
      break;
    }
  }
  return num;
}

//findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

