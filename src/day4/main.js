export function main(arr) {
	// Your code begins here;
	let arrSorted = [];
	let objStart = {};
	let objEnd = {};
	let room = 0;
	let sumRoom = [];
	let maxRoom = 0;
	//separate arr2d to arr1d
	let arr1d = [].concat(...arr);
	for (let i = 0; i < arr.length; i++) {
		objStart[arr[i][0]] = true;
	}
	//Numeric sort array
	arrSorted = arr1d.sort((a,b) => a - b);
	//check start and end time
	for (let ele of arrSorted) {
		room = objStart[ele] ? room+1 : room-1;
		sumRoom.push(room);
	}
	//find maximum room
	maxRoom = Math.max(...sumRoom);
	return maxRoom;
}
