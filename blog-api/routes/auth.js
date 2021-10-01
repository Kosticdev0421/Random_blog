const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register = post method  *completed*
router.post("/register", async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(8);
		const hashPassword = await bcrypt.hash(req.body.password, salt);
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashPassword,
		});

		const user = await newUser.save();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

//Login = post method  *completed*
router.post("/login", async (req, res) => {
	try{
        const user = await User.findOne({username: req.body.username})
         !user && res.status(400).json("Invalid credentials!!")

         const validated = await bcrypt.compare(req.body.password, user.password)
         !validated && res.status(400).json("Invalid credentials!!")

		 const { password, ...others } = user._doc;
		 res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);

    }
});

module.exports = router;
