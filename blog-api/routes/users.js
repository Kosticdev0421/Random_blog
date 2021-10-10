// tested: minor changes
const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//UPDATE = put method
router.put("/:id", async (req, res) => {
	if (req.body.userId === req.params.id) {
	  if (req.body.password) {
		const salt = await bcrypt.genSalt(10);
		req.body.password = await bcrypt.hash(req.body.password, salt);
	  }
	  try {
		const updatedUser = await User.findByIdAndUpdate(
		  req.params.id,
		  {
			$set: req.body,
		  },
		  { new: true }
		//   the new: true shows in post man and MDB.  Before adding this it only showed in MDB
		);
		res.status(200).json(updatedUser);
	  } catch (err) {
		res.status(500).json(err);
	  }
	} else {
	  res.status(401).json("You can update only your account!");
	}
});

//DELETE - use delete method to delete (delete user and post, if they belong to the user)
router.delete("/:id", async (req,res) => {
	if(req.body.userId === req.params.id){
		try {
			const user = await User.findById(req.params.id);
			try {
				await Post.deleteMany({ username: user.username });
				await User.findByIdAndDelete(req.params.id);
				res.status(200).json("User has been deleted ...");
			}catch (err) {
				res.status(500).json(err);
			}
		} catch (err) {
			res.status(404).json("User not found!!");
		}
	} else {
		res.status(401).json("Silly human, you can only delete your account!");
	}
});

//GET USER  - use get method to GET user 
router.get("/:id", async (req,res) => {
	// try to find the user
	try{
		const user = await User.findById(req.params.id);
		const { password, ...others} = user._doc;
		res.status(200).json(others);

	//if user not found through an error (catch) 
	}catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
