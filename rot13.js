/*
* Challenge desc - Simple caesar cipher decryption function.
* level - basic
* @author : HS<dcotre.1760@outlook.com>
*/
function rot13(str) { // LBH QVQ VG!
  return str.split("").map(
  function(a){
    if(a.match(/\s|[!.?]/)){
      return a;
    }
    else{
      t = a.charCodeAt(0)+13;
      if(t>90){
        t = 64 + (t%90);
      }
      return String.fromCharCode(t);
    }
  }
  ).join("");
  
}

// Change the inputs below to test
//rot13("SERR PBQR PNZC");


