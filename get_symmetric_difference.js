/*
* Challenge desc - Get the symmetric difference of arbitrary number of sets passed as arguments.
* main_function : get_symmetric_difference
* level - advanced
* @author : HS<dcotre.1760@outlook.com>
*/
function get_union(arr1,arr2){
	
	var uni = [];
	
	for( var i = 0; i<arr1.length ; i++ ){
	
		if( uni.indexOf(arr1[i]) < 0 ){
		
			uni.push(arr1[i]);

		}	

	}

	for( i = 0; i<arr2.length ; i++ ){
	
		if( uni.indexOf(arr2[i]) < 0 ){
		
			uni.push(arr2[i]);

		}	

	}

	return uni;
}

function get_intersection(arr1,arr2){

	var inter = [];

	for(var i = 0; i<arr1.length ; i++){
	
		if(arr2.indexOf(arr1[i]) >= 0){
			
			inter.push(arr1[i]);
		
		}
	}

	for(i = 0; i<arr2.length ; i++){
	
		if( arr1.indexOf(arr2[i]) >= 0 && inter.indexOf(arr2[i]) < 0 ){
			
			inter.push(arr2[i]);
		
		}
	}

	return inter;
}
function get_difference(arr1,arr2){

	var diff = [] ;
	
	for(var i = 0 ; i<arr1.length ; i++){
	
		if(arr2.indexOf(arr1[i]) < 0 ){
		
			diff.push(arr1[i]);
		}
	}
	
	return diff;
}
function get_symmetric_difference(arr1,arr2){
	
	if(arguments.length < 2 ){
		throw new Error("Arrays must be atleast two");
	}

	var res = arguments[0];

	for( var i = 1 ; i < arguments.length ; i++ ){
		arr2 = arguments[i];
		res  = get_difference( get_union(res,arr2) , get_intersection(res,arr2) );
	}
	return res;
}

/*test
a = [1,2,3,4,5]
b = [4,5,6,7,8]
c = [9,10,11,12]
test1 = get_symmetric_difference(a,b);
console.log(test1);
test2 = get_symmetric_difference(a,b,c);
console.log(test2);
get_symmetric_difference(a);
*/
