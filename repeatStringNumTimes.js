/*
* Challenge desc - repeat the first argument(string), the number of times given by second argument(number)
* level - basic
* @author : HS<dcotre.1760@outlook.com>
*/
function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num<=0){
    return "";
  }
  else{
   var str_f = "";
   for(var i = 1; i<=num ; i++){
     str_f += str;
   }
    return str_f;
  }
  
}

//repeatStringNumTimes("abc", 3);

