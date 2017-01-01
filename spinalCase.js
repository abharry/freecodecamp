/*
* Challenge desc - Transforms the passed string into spinal-case.
* level - Intermediate
* @author : HS<dcotre.1760@outlook.com>
*/
function spinalCase(str) {
  
  // "It's such a fine line between stupid, and clever."
  
  // --David St. Hubbins
  
  str=str.split(/[ _]/g).join("-"); // replacing space or/and underscore in the string with dash
  
  var pos = []; //positions where the boundary of word is there
  
  for(var i =0 ; i<str.length-1; i++){
    
    if( str.charAt(i).match(/[a-z]/) && str.charAt(i+1).match(/[A-Z]/) ){//matching pattern showing the boudary
    
      pos.push(i);//storing the indexes of boundary of words
    
    }
    
  }
  
  var new_str = ""; // a new string : output of the program
  
  var last_pos = 0; // records the position of the last word's boundary
  
  for(i = 0; i<pos.length; i++){
    
    new_str += str.substr(last_pos,pos[i]+1-last_pos)+"-";//breaking the word and adding the dash
    
    //console.log(new_str);
    
    last_pos = pos[i]+1; //re-storing the new word's boundary
  
  }
  
  new_str += str.substr(last_pos);//joining the remaining string
  
  return new_str.toLowerCase();//converting the whole string in lowercase.
}

//spinalCase('This Is Spinal Tap');

