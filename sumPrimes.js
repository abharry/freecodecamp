/*
* Challenge desc - generates the sum of all the prime numbers less than or equal to num(first argument passed to main_function)
* level - Intermediate
* main_function - sumPrimes
* @author : HS<dcotre.1760@outlook.com>
*/

function if_prime(num){//checks if the num is prime or not
  
  var count_complete_divisions = 0;//counts the number of times the num is divided completely from 2 till num-1
  
  for(var i = 2; i<num; i++){
    
    if(num%i===0){
     
      count_complete_divisions += 1;// updating the counter
    
    }
  
  }
  
  if( count_complete_divisions === 0){ // if a number is divided completely by any number less than it upto 2, it can not be prime, because the quotient of this division is an integer, then this quotient is multiplied by the divisor can yield the number, which must not happen for a prime number
    
    return true;
  
  }
  else{
    
    return false;
  
  }

}

function sumPrimes(num) {
  
  var primes = []; // recording the prime numbers upto num
  
  for(var i = 2; i<=num ; i++ ){
    
    if(if_prime(i)){//checking if the i is prime
      
      primes.push(i);//pushing if it is.
    
    }
    
  }
  
  return primes.reduce(function(a,i){return a+i;}); //reducing all the primes found to sum

}

//sumPrimes(10);

