const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();
app.use(express.json());

mongoose
	.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useCreateIndex: true, (this throws an error of not being supported)
	})
	.then(console.log("Connected to MongoDB"))
	.catch((err) => console.log(err));

	app.use("/api/auth", authRoute);
	app.use("/api/users", userRoute);

app.listen("2000", () => {
	console.log("Backend is running!!");
});
