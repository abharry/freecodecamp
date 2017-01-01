/*
* Challenge desc - removes the values from the array(first argument), which are passed as the next arbitrary number of arguments.
* level - basic
* @author : HS<dcotre.1760@outlook.com>
*/
function destroyer(arr) {
  // Remove all the values
  var temp = [];
  for(var i=1;i<arguments.length;i++){
    for(var j = 0; j<arr.length ; j++){
      if(arr[j]==arguments[i]){
        continue;
      }
      else{
        temp.push(arr[j]);
      }
    }
    arr = [];
    Object.assign(arr,temp);
    temp = [];
  }
  return arr;
}

//destroyer([1, 2, 3, 1, 2, 3], 2, 3);

