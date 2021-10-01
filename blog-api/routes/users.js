const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//UPDATE = put method
router.put("/:id ", async (req, res) => {
	if (req._construct.userId === req.params.id) {
            if(req.body.password){
                const salt = await bcrypt.genSalt(8);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
		try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id);
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(401).json("You can only update your account!  Bazinga!");
	}
});

//DELETE

module.exports = router;
