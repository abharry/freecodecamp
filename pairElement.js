/*
* Challenge desc - pair elements given by the string(first argument) according the Nuclear-base pairing in DNA.
* level - Intermediate
* @author : HS<dcotre.1760@outlook.com>
*/
function pairElement(str) {
  return str.split("").map(function(element){
    var pair = [element];
    switch(element){
      case 'G':
        pair.push('C');
        break;
      case 'C':
        pair.push('G');
        break;
      case 'A':
        pair.push('T');
        break;
      case 'T':
        pair.push('A');
        break;
    }
    return pair;
  });
}

//pairElement("GCG");

