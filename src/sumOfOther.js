module.exports = function sumOfOther(array){
	let sum=array.reduce((sum, current) => sum + current);
	return array.map((i)=>sum-i);
}