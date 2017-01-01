/*
* Challenge desc - Find the smallest LCM of two numbers such that the LCM divides all the numbers in between the given numbers evenly.
* main_function : smallestCommons
* level - advanced.
* @author : HS<dcotre.1760@outlook.com>
*/

function is_prime(num){
  // tell if the passed argument is a prime number or not.
  if(typeof num !=="number"){
    throw new Error("Passed argument is not a number");
  }
  if(num==1) return true; // if the number is 1, return true. Arguable !!
  for(var i = 2; i<num ; i++){
    if(num%i === 0){
      return false;
    }
  }
  return true;
}
function get_prime_factors(num){
  // returns all the prime factors of the passed number.
  if(typeof num !=="number"){
    throw new Error("Passed argument is not a number");
  }
  if(is_prime(num)){
    return [num]; // a prime number can not have any factors other than 1 and itself.
  }
  var prime_factors = [], factor = 2, LOOP_MAX=30, loop_counter=0;
  //LOOP_MAX as a control to avoid the infinite loop, if any. 
  while(num!==1){
    // num after all the division will remain to be just 1.
    if(is_prime(factor)){
      if(num%factor===0){
        // if the num is divided by the factor completely, than this prime number(factor) is recorded.
        prime_factors.push(factor);
        num /= factor; // num is updated by dividing by the factor
        continue;
      }
    }
    factor += 1; // increasing factor if it is not the prime number.
    loop_counter++; // updating loop_counter
    if(loop_counter>LOOP_MAX) throw new Error("LOOP_MAX crossed."); // again, a control to avoid any infinite loop.
  }
  return prime_factors; // returns the prime factors
}
function get_frequency(arr){
  // accepts the result of get_prime_factors
  // results an object with the keys as the prime factors and the corresponding values to be thier occurence in the arr.
  var freq = {}; // the frequency object
  for(var i=0; i<arr.length; i++){
    if(freq.hasOwnProperty(arr[i])){//check to see if frequency has already been started to count for the prime factor.
      freq[arr[i]]++; // increasing the value by one, if so.
    }
    else{
      freq[arr[i]] = 1 ; // otherwise, making a new property of the frequency object accordingly.
    }
  }
  return freq; // returning the frequency object.
}
function get_common_property(ob1, ob2){
  // returns the common properties/attributes of two objects represented by ob1 and ob2.
  // used here to get the common keys or prime factors using the frequency data.
  var ob1_keys = Object.keys(ob1); // getting the keys of both the objects.
  var ob2_keys = Object.keys(ob2);
  var common_keys = []; // recorder for the common keys
  for(var i = 0 ; i<ob1_keys.length ; i++){
    for(var j = 0; j<ob2_keys.length; j++){
      if(ob1_keys[i]===ob2_keys[j] && common_keys.indexOf(ob1_keys[i])<0){ // check to see if the common key has recorded the founded common key
        common_keys.push(ob1_keys[i]); // and if not, record it.
      }
    }
  }
  
  return common_keys; // return the common keys.
}
function get_least_common_factor(num1,num2){
  // returns the LCM of num1 and num2
  var num1_prime_factors = get_prime_factors(num1); //prime factors of the num1
  var num2_prime_factors = get_prime_factors(num2); // prime factors of num2
  var num1_frequency = get_frequency(num1_prime_factors); // frequency data of prime factors of num1
  var num2_frequency = get_frequency(num2_prime_factors); //like just above step
  var common_keys = get_common_property(num1_frequency, num2_frequency);// common prime factors of num1 and num2 using the frequency data.
  for(var i = 0 ; i<common_keys.length ; i++){ //reducing the common properties to proper values
    if(num1_frequency[common_keys[i]]!==num2_frequency[common_keys[i]]){   num1_frequency[common_keys[i]]=Math.max(num1_frequency[common_keys[i]],num2_frequency[common_keys[i]]); // recording the maximum of two values of frequency of prime factors in common
    }
    delete num2_frequency[common_keys[i]]; // and deleting that particular prime factor property from one of the frequency data.
  }
  var num1_frequency_keys = Object.keys(num1_frequency); 
  var num2_frequency_keys = Object.keys(num2_frequency);
  var num1_reduction = 1; 
  var num2_reduction = 1;
  var j;
  for(i=0; i<num1_frequency_keys.length ; i++){ //reducing the whole frequency data into the multiple
    for(j = 0 ; j<num1_frequency[num1_frequency_keys[i]] ; j++){
    num1_reduction *= num1_frequency_keys[i];}
  }
  for(i=0; i<num2_frequency_keys.length ; i++){
    for(j = 0 ; j<num2_frequency[num2_frequency_keys[i]] ; j++){
    num2_reduction *= num2_frequency_keys[i];}
  }
  var final_reduction = num1_reduction * num2_reduction ; // finally reduction 
  return final_reduction; //returning the final reduction, the lcm.
}
function smallestCommons(arr) {
   arr = arr.sort(function(a,b){return a-b;}); //sorting the arr into ascending order
   var lcm = get_least_common_factor(arr[0],arr[1]); // find the lcm of the two numbers.
   var MAX_MULTIPLIER = 6056820, multiplier_counter=0, answer ;
  // MAX_MULTIPLIER to avoid the infinite loop, if any. A safe control. :)
  for(var i = 1; i<=MAX_MULTIPLIER ; i++){ // finds out the multiple such that the numbers between arr[0] and arr[1] divides multiple evenly.
    
    var counter_even_divisions = 0; // counts the number of even divisions 
    var expected_even_divisions = arr[1]-arr[0]-1; // expected even number of divisions
    var multiple = lcm * i; // multiple 
    for(var j = arr[0]+1 ; j< arr[1]; j++){ // see if all the numbers in between the range provided by the arr, can divide the multiple evenly.
      if(multiple%j===0){
        // j represents the number from the range.
        counter_even_divisions += 1; // counts the even divisions.
      }
    }
    if(counter_even_divisions===expected_even_divisions){
      // if counted even divisions are equal to expected which shows all the numbers in the range starting from sorted arr[0] to arr[1] divides the multiple evenly.
      answer = multiple; // then assigning the multiple to answer
      break;
    }
  }
  if(answer){
    return answer; // returning answer
  }
  else{
    throw new Error("MAX_MULTIPLIER is crossed"); // a safe control.
  }
}

//challenge function - smallestCommons
//smallestCommons([8,9]);
