/*
* Challenge desc - returns all the objects(given by the array passed as the first argument), which has the property and value specified by the second argument(object)
* level - Intermediate
* @author : HS<dcotre.1760@outlook.com>
*/
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  arr = collection.filter(function(ob){
    
    var searched_keys = Object.keys(source);
    var to_be_searched = Object.keys(ob);
    var matched_keys = to_be_searched.filter(function(key){if(searched_keys.indexOf(key)>=0){return true;} else{return false;}});
    if(matched_keys.length == searched_keys.length){
      //searching for values match
      var matched_values_counter = 0;
      for(var i = 0 ; i<matched_keys.length; i++){
        if(ob[matched_keys[i]]===source[matched_keys[i]]){
          matched_values_counter += 1;
        }
      }
      if(matched_values_counter==matched_keys.length){
        return true;
      }
    }
    return false;
    
  });
  // Only change code above this line
  return arr;
}

//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


