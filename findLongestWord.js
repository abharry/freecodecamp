/*
* Challenge desc - Returns the length of the longest word in the passed string argument.
* level - basic
* @author : HS<dcotre.1760@outlook.com>
*/
function findLongestWord(str) {
  str=str.split(" ");
  longest_length = str[0].length;
  for(var i = 0; i<str.length ; i++){
    if(longest_length<str[i].length){
      longest_length = str[i].length;
    }
  }
  
  return longest_length;
}

