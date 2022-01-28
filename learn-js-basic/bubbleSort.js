exports.bubbleSort = (arr) =>{
	for(let i=0; i<arr.length; i++){
		let swap = false;
		for(let j=i; j<arr.length; j++){

			if(arr[i] > arr[j]){
				let tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
				swap = true;
			}
		}
		if(!swap){
			break;
		}
	}
}
