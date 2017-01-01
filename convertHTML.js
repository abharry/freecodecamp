/*
* Challenge desc - transforms the <>'"& into respective html entities.
* level - Intermediate
* @author : HS<dcotre.1760@outlook.com>
*/
function convertHTML(str) {
  // &colon;&rpar;
  
  return str.split(' ').map(function(word){
    return word.split('').map(function(letter){
      if(letter=="&"){
        return "&amp;";
      }
      else if(letter=="<"){
        return "&lt;";
      }
      else if(letter == ">"){
        return "&gt;";
      }
      else if(letter == "'"){
        return "&apos;" ;
      }
      else if(letter == '"'){
        return "&quot;" ;
      }
      else{
        return letter;
      }
    }).join('');
  }).join(' ');
}

//  convertHTML("Dolce & Gabbana");

