const express = require("express")
const app = express()
const {person} = require("./data/MOCK_DATA")

//Middleware
const {logger} = require("./logger")

app.use(logger)
app.get("/",(req,res)=>{
	res.send('<h1>Home page</h1><br><a href="/api/people">People\'s Data</a>')
})

app.get("/api/people",(req, res)=>{
	res.status(200).json(person)
})

app.listen(8000, ()=>{
	console.log("Server is listening on port 8000...")
})