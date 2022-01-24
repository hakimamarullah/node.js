const login = (req, res) =>{
	let data = req.body
	res.status(200).end(`WELCOME, ${data.name.toUpperCase()}`)
}

module.exports = login