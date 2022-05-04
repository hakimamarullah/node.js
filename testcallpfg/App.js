import fetch from "node-fetch";
import axios from "axios";

const url = 'https://pacilfindgroup-api-dev.herokuapp.com/api/v1/auth/authenticate';

const auth = {
    "username":"hakim.amarullah",
    "password":"halo2"
}

const param = {
	headers:{
		"Content-Type":"application/json",
		'Accept': 'application/json'
	}
	// body:JSON.stringify(auth),
	// method:"POST"
}

// const login = async (url, param)=>{
// 	await fetch(url,param)
// 	.then(data=>{return data.json()})
// 	.then(res=>{console.log(res)})
// 	.catch(error=> console.log(error))
// }
await axios.post(url,auth,param)
.then(response=>console.log(response.data))
.catch(error=>console.log(error.response.data))