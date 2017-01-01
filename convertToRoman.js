/*
* Challenge desc - change the numbers in to roman numerals.
* main_function : convertToRoman
* level - intermediate
* @author : HS<dcotre.1760@outlook.com>
*/
function get_basic_form(num){
  //basic form of a number is sum of integers multiplied by proper bases according to thier places.
  var basic_form = []; // array to hold the part of the form
  var power = 0;
  while(num!==0){
    basic_form.push((num%10)*Math.pow(10,power)); //extracting the number at the position along with the position information like thousandth place is 4 means 4000.
    power++;
    num = Math.floor(num/10);//updating the number
  }
  return basic_form.reverse(); //returning the reverse order of the basic form
}

function convertToRoman(num) {
  // main function to convert the num into roman equivalent(1-4999)
  var basic_form = get_basic_form(num); // get the basic form
  var rome = basic_form.map(function(ele){
    return my_rome(ele);
  }).join("");//passing the each element to be converted into roman equivalent and then joining them in series.
  console.log(rome+" : "+num);
  return rome; //returning the roman number so formed
}
function my_rome(num){
  //function to convert the ones, tens, hundreds, thousands into roman equivalent. Only pass the basic forms' part.
  var roman = "";//declaring the roman numeral variable
  if(num===0){
    return roman; //if 0 is the number then return the empty string
  }
  var roman_dic = [[1000,'M'],[500,'D'],[100,'C'],[50,'L'],[10,"X"],[5,"V"],[1,"I"]];// the roman dictionary, showing what letter represents what value.
  var roman_root,quotient,remainder;// roman_root represents the specific member in the roman_dic, where quotient becomes more than 0 for the first time in the following division series.
  for(var i = 0; i<roman_dic.length; i++){
    //the division series to find value of the roman_root
    quotient = Math.floor(num/roman_dic[i][0]);
    remainder = num%roman_dic[i][0];
    if(quotient>0){
      //if the quotient is more than 0 for the first time.
      roman_root = i; //recording the position
      if(num == 9|| num == 90 || num == 900){
        //special case, where the number is closed enough to the next higher roman numeral in series.
        remainder = 0; //remainder is zeroed as needed
      }
      break; //break if found.
    }
  }
  if( (quotient>3 && roman_dic[roman_root][0]!==1000) || num==9 || num==90 || num==900 ){
    // forming the roman numeral such as IV, IX, CM, etc. where either the num is 9 or 90 or 900 or quotient is more than 3.
    var higher_roman_root = roman_dic[roman_root-1]; // the next higher roman numeral number to the currently found roman_root in the series. 
    var diff = higher_roman_root[0] - num; // the difference of the number from the next higher roman numeral
    var left_roman = roman_dic.filter(function(ele){
      if(ele[0]===diff){return true;} else{return false;}
    }); // finding the roman numeral which will written to the left of the higher_roman_root. Roman equivalent to the diff.
    roman = left_roman[0][1]+higher_roman_root[1]; //forming the roman number by writing the left_roman and then higher_roman_root, like IV, IX, CM, etc. 
  }
  else{
    //forming the roman numerals like CC, MMM, XXX, etc.
    for(i = 0 ; i<quotient ; i++){
      roman += roman_dic[roman_root][1]; //repeating the roman number represented by the roman_root for not more than 3 times, if the roman_root does represent any number but 1000
    }
  }
  if(remainder>0){
    //passing the remainder to form the right part of the roman number equivalent of num, if there is any remainder.
    roman += my_rome(remainder);//adding the resultant roman to the roman of num
  }
    return roman; //return the roman number so formed.
}

//convertToRoman(36);
//convertToRoman(4);

