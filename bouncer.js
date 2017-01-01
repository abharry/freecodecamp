/*
* Challenge desc - Checks to see if the passed argument is true/false
* level - basic
* @author : HS<dcotre.1760@outlook.com>
*/
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(z){if(z){return true;}else{return false;}});
}

//bouncer([7, "ate", "", false, 9]); //empty strings are false 

