/*
* Challenge desc - check to see if the number is in US-telephone-number format.
* main_function : telephoneCheck
* level - advanced.
* @author : HS<dcotre.1760@outlook.com>
*/
function telephoneCheck(str) {
  // Good luck!
  var patt = [
    /^([1]{0,1}[ ])?[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
    /^([1]{0,1}[ ]?)?\([0-9]{3}\)[ ]?[0-9]{3}-[0-9]{4}$/,
    /^([1]{0,1}[ ])?[0-9]{3} [0-9]{3} [0-9]{4}$/,
    /^[0-9]{10}$/
  ];
  
  for(var i = 0; i<patt.length ; i++){
    if(str.match(patt[i])){
      return true;
    }
  }
  return false;
   
}

//telephoneCheck("555-555-5555");
