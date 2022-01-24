const {person} = require("../data/MOCK_DATA")

const getPeople = (req, res)=>{
	res.status(200).json({success: true, data: person})
}

module.exports = { getPeople }