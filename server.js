const express = require("express")

const server = express.Router()
const port = process.env.PORT || 4040

server.use(express.json())

server.use("/recipes", recipesRouter)
server.use("/ingredients", ingredientsRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})