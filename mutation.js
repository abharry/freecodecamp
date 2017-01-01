/*
* Challenge desc - checks if all the letters(case-insensitive) in the second argument(string) are present in the first argument(string)
* level - basic
* @author : HS<dcotre.1760@outlook.com>
*/
function mutation(arr) {
  arr = arr.map(function(x){ return x.toLowerCase();});
  for(var i =0; i<arr[1].length; i++){
    if(arr[0].indexOf(arr[1][i])<0){ //string.indexOf(element) returns -1 if element is not found else position
      return false;
    }
  }
  return true;
}

//mutation(["hello", "hey"]);
