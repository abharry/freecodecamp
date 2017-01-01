/*
* Challenge desc - Truncating the first argument(string), after the (second argument) number of characters. And appending '...' appropriately.
* level - basic
* @author : HS<dcotre.1760@outlook.com>
*/
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length>num){
    if(num<=3){
      str = str.slice(0,num)+"...";
    }
    else{
      str = str.slice(0,num-3)+'...';
    }
  }
  return str;
}

//truncateString("A-tisket a-tasket A green and yellow basket", 11);

