/*
* Challenge desc - generates the sum of odd fibonaccis less than or equal to num
* level - Intermediate
* main_function - sumFibs
* @author : HS<dcotre.1760@outlook.com>
*/
function generateFib(num){

    //num specifies the number of fibonacci number in the fibonacci series starting the index from 1.
    // fibonacci number generator. 
  
  if(num==1||num==2){
    return 1;
  }
  else{
    return generateFib(num-1)+generateFib(num-2);
  }
}

function sumFibs(num) {
  
  //generates the sum of odd fibonaccis less than or equal to num
  
  var fibs = [generateFib(1)]; // list of fibonacci less than or equal to num
  
  for(var i = 2 ;; i++){ //A loop intended to end if the generated fib is more than num
    
    var next_fib = generateFib(i);
    
    if(next_fib <= num){ // check if the generated number is less than or equal to num
    
      fibs.push(next_fib); //recording this fibonacci number
    
    }
    
    else{
    
      break; //breaking point
    
    }
  
  }
  
  var fibs_odd_sum = fibs.filter(function(elem){if(elem%2===0){return false;} else {return true;}}).reduce(function(i,a){return i+a;}); //filtering out the odd numbers and than reducing them to sum
  
  return fibs_odd_sum;
}

//sumFibs(4);
