const express = require("express")
const app = express()
const {logger} = require("./logger")

const peopleRoutes = require("./routes/people_routes")
const auth = require("./routes/auth")


//Middleware
const middleware = [
  	logger,
  	express.static("static"),
  	express.urlencoded({extended: false}),
  	express.json()
]
app.use(middleware)

//Router
app.use("/api/people", peopleRoutes)
app.use("/login", auth)


app.listen(8000, ()=>{
	console.log("Server is listening on port 8000...")
})