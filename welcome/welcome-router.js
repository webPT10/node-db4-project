const express = require("express")
const router = express.Router()
router.get("/", (req, res, next) => {
	res.json({
		message: "Heyo! node-db4-project",
	})
})
module.exports = router