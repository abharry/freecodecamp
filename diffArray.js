/*
* Challenge desc - returns all the elements from both the arrays(arguments) which are present in one but not in both
* level - Intermediate
* @author : HS<dcotre.1760@outlook.com>
*/
function diffArray(arr1, arr2) {
  var newArr = [];
  //Same, same; but different.
  for(var i=0 ; i<arr1.length; i++){
    if (arr2.indexOf(arr1[i])<0){
      newArr.push(arr1[i]);
    }
  }
  for(i=0 ; i<arr2.length; i++){
    if (arr1.indexOf(arr2[i])<0){
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

