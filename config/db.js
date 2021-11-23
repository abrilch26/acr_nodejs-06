const mongoose		= require("mongoose")

const connectDB = async () => {
	await mongoose.connect(process.env.MONGODB_ATLAS, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	console.log("Base de datos conectada")
}

module.exports = connectDB