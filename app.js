function findSum(){
	 sum=0;
	for(var i=0;i<arguments.length;i++){
		sum+=parseInt(arguments[i]);
		}
	return sum;
	}
var sum;

console.log("the sum is = "+findSum("23","34","45"));
