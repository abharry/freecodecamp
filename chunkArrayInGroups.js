/*
* Challenge desc - Break the the passed array(first argument) into number(second argument) of sub-arrays
* level - basic
* @author : HS<dcotre.1760@outlook.com>
*/
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var j = 0;
  var temp_arr = [];
  var final_arr = [];
  for(var i=0; i<arr.length ; i++){
    temp_arr.push(arr[i]);
    j+=1;
    if(j==size || i==arr.length-1){
      final_arr.push(temp_arr);
      j=0;
      temp_arr=[];
    }
  }
  return final_arr;
}

//chunkArrayInGroups(["a", "b", "c", "d"], 2);

