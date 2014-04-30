// Unfortunaly, can't use the macro case
// x..y
// var range = (1)..(10); => [1, 1+1, ..., 10];
// if x > y, then range = [10, 10-1, ..., 1];

macro (..) {
	rule infix { $left | $right } => {
		(function(left, right){
			var arr = [];

			if( left < right )
				for(var i = left; i <= right; i++){
					arr.push(i);
				}
			else
				for(var i = left; i >= right; i--){
					arr.push(i);
				}

			return arr;
		})($left, $right)
	}
}

var range = (1)..(10),
	otherRange = (10)..(1);

console.log(range);
console.log(otherRange);