const express = require("express")
const router = express.Router()

const { getPeople } = require("../controllers/person_controller")

router.get("/", getPeople)


module.exports = router