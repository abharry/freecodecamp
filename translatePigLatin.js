/*
* Challenge desc - translate the given string into "piglatin" language. A simple string exercise.
* level - Intermediate
* @author : HS<dcotre.1760@outlook.com>
*/
function translatePigLatin(str) {
  
var first_letter = str.charAt(0); if(first_letter=="a"||first_letter=="e"||first_letter=="i"||first_letter=="o"||first_letter=="u"){
  str +="way";
}
  else{
    var cluster_point = 0;
    for(var i = 0 ; i<str.length ; i++){
      var letter = str.charAt(i);
      if(letter=="a"||letter=="e"||letter=="i"||letter=="o"|| letter=="u"){
        cluster_point = i;
        break;
      }
    }
    str = str.substr(cluster_point)+str.substr(0,cluster_point)+'ay';
  }
  
  return str;
}

//translatePigLatin("consonant");

