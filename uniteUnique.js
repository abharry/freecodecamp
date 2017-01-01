/*
* Challenge desc - returns a 1-D array which is made by adding all the unique elements from arbitrary number of arrays passed as argument to the function.
* level - Intermediate
* @author : HS<dcotre.1760@outlook.com>
*/
function uniteUnique(arr) {
  var union_arr = arr;
  console.log(arguments);
  for(var i=1 ; i<arguments.length ; i++){
    for(var j=0; j<arguments[i].length; j++){
      if(union_arr.indexOf(arguments[i][j])<0){
        union_arr.push(arguments[i][j]);
        console.log(union_arr);
      }
    }
  }
  return union_arr;
}

//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

