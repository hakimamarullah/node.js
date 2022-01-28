const mergeSort = require("./mergeSort")
const {bubbleSort}= require("./bubbleSort")
const arr = ["Hakim", "Amarullah", "Nisdar", "Fazilla"]

for(let item of arr){
	console.log(item)
}

let firstname = "nisdar";
const name = firstname === "nisdar" ? "Gorgeous" :"Okay"

function giveMeName(callback){
	callback(firstname)
}

giveMeName(function (name){
	console.log(`Hi, ${name}`)
})
console.log(name)

const sort = (arr, callback) =>{
	return new Promise((resolve, reject)=>{
		if(arr.length !=0){
			resolve(callback(arr))
		}
		else{
			reject("Array is empty")
		}
	})
}

const arr2 = [1]