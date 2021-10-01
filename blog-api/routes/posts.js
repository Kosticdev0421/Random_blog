const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
});

//UPDATE POST 
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
		res.status(401).json("You can only delete your account!");
	}
});

//DELETE POST

//GET POST
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