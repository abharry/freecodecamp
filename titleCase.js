/*
* Challenge desc - Change the case of the argument string to TitleCase
* level - basic
* @author : HS<dcotre.1760@outlook.com>
*/
function titleCase(str) {
  return str.split(" ").map(function(a){
    var x="";
    for(var i=1;i<a.length;i++){
      x+=a[i].toLowerCase();
    }
    if(x){
      x = a[0].toUpperCase() +x;
    }
    else{
      x = a[0].toUpperCase();
    }
    return x;}).join(" ");
}
/*
//test case -
titleCase("I'm a little tea pot");
*/

