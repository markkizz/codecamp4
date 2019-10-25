export function main(arr) {
	// Your code begins here;
	let room;
	//if arr.length === 1
	if (arr.length === 1) {
		//  return 1
		room = 1;
		return room;
	} else {
		room = arr.length===2 ? 1 : 0;
		for (let i = 0, j = 1; j < arr.length; j++) {
			//compare
			room += compares(arr[i], arr[j]);
		}
		return room;
	}

	function compares(arr1, arr2) {
		let count = 0;
		for (let i = arr1[0], j = arr2[1]; i <= arr1[1] || j >= arr2[0];) { //i30<75,j150>60
			if (i >= j) {
				count = 1;
				break;
			}
			i += i <= arr1[1] ? 1 : 0;
			j -= j >= arr2[0] ? 1 : 0;
		}
		return count;
	}
}
