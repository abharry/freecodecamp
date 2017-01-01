/*
* Challenge desc - replaces the word(second argument) by the word(third argument) in the string(first argument)
* level - Intermediate
* @author : HS<dcotre.1760@outlook.com>
*/
function convert_case(before,after){
  if(before.charCodeAt(0)>=91){
    after = after[0].toLowerCase() + after.substr(1);
  }
  else if(before.charCodeAt(0)>=65){
    after = after[0].toUpperCase() + after.substr(1);
  }
  return after;
}

function myReplace(str, before, after) {
  var tokens = str.split(' ');
  var position = tokens.indexOf(before);
  after = convert_case(before,after);
  tokens[position] = after;
  return tokens.join(' ');
}

//myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


