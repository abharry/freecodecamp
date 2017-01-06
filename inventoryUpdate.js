/*
* Challenge desc - Update the inventory(first argument, array) according to the new information(second argument, array)
* level - advanced
* @author : HS<dcotre.1760@outlook.com>
*/
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  var new_inv = [];
  for(var i = 0 ; i<arr2.length ; i++ ){
    
    var found = false;
    
    for(var j = 0 ; j<arr1.length ; j++){
      
      if(arr1[j][1] == arr2[i][1]){
        
        arr1[i][0] += arr2[j][0] ;
        found = true;
      }
      
    }
    if(!found){
      
      new_inv.push(arr2[i]);
      
    }
    
  }
  arr1 = arr1.concat(new_inv).sort(
  // sorting the inventory information according to the first letter. Ascending.
    function(a,b){
      return a[1].charCodeAt(0) - b[1].charCodeAt(0);
    }
  );
  console.log(arr1);
  return arr1;
}
/*
// test - case 
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
*/
