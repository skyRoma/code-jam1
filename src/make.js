module.exports = function make(...args1) {
    let allArgs=[];
    allArgs.push(...args1);
    function f(...args2) {
    	if (typeof args2[0] !== 'function') {
        	allArgs.push(...args2);
        	return f;
    	}
        else return allArgs.reduce(args2[0]);
    }
    return f;
}
