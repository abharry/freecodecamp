/*
* Challenge desc - Returns the missing letter in the string given by the first argument.
* level - Intermediate
* @author : HS<dcotre.1760@outlook.com>
*/
function range_sum(s,e){
  var sum = 0;
  for(var i = s; i<=e; i++){
    sum += i;
  }
  return sum;
}

function fearNotLetter(str) {
  var range_start = str.charCodeAt(0);
  var range_stop = str.charCodeAt(str.length-1);
  var sum = str.split('').map(function(elem){return elem.charCodeAt(0);}).reduce(function(i,a){return i+a;});
  var sum_supposed = range_sum(range_start,range_stop);
  if(sum==sum_supposed){
    return undefined;
  }
  else{
    return String.fromCharCode(sum_supposed-sum);
  }
}

//fearNotLetter("abce");
