/*
* Challenge desc - finds whether first argument ends in the second argument
* level - basic
* @author : HS<dcotre.1760@outlook.com>
*/
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if(str.length<target.length){
    return false;
  }
  else{
    return str.substr(-target.length,str.length)==target;  
  }
  
}

//confirmEnding("Bastian", "n");

/*
* <string>.substr(i,j) - i(negative possible, equiv to <string>.length-i) is the starting point,
* j(optional) represents ending position for extraction from the <string>. Similar function <string>.substring(i,j) - 
* i(only positive).
*/

