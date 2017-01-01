/*
* Challenge desc - Check whether the string passed is palindromic or not.
* level - basic
* @author : HS<dcotre.1760@outlook.com>
*/
function palindrome(str) {
  // Good luck!
  //pre-procession - alpha-numerals and string in lowercase.
  filtered_lower_ori = str.split("").filter(function(a){return a.match(/[a-zA-Z0-9]/i);}).join("").toLowerCase().split("");
  var f1 = [];
  Object.assign(f1,filtered_lower_ori);
  filtered_lower_rev = filtered_lower_ori.reverse();
 
  for(var i = 0; i < filtered_lower_ori.length; i++){
    if(f1[i]==filtered_lower_rev[i]){
      continue;
    }
    else{
      return false;
    }
  }
  return true;
  
}
/*
* Object.assign(target,source) - In the above funtion it is used to make a clone of an array.
*/
