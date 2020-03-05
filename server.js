const express = require("express")
const welcomeRouter = require('./welcome/welcome-router')
// const recipesRouter = require("./recipes/recipes-router")
// const ingredientsRouter = require("./ingredients/ingredients-router")
// const quantityRouter = require("./quantity/quantity-router")

const server = express()
const port = process.env.PORT || 4040

server.use(express.json())

server.use("/", welcomeRouter)
// server.use("/recipes", recipesRouter)
// server.use("/ingredients", ingredientsRouter)
// server.use("/quantity", quantityRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})