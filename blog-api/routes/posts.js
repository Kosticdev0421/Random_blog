const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const { findById } = require("../models/User");

//CREATE POST *complete and fxing*
router.post("/", async (req, res) => {
	const newPost = new Post(req.body);
	try {
		const savedPost = await newPost.save();
		res.status(200).json(savedPost);
	} catch (err) {
		res.status(500).json(err);
	}
});

//UPDATE POST *complete and fxing*
router.put("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.username === req.body.username) {
			try {
				const updatedPost = await Post.findByIdAndUpdate(
					req.params.id,
					{
						$set: req.body,
					},
					{ new: true }
				);
				res.status(200).json(updatedPost);
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(401).json("You can only update your own compositions");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

//DELETE POST *complete and fxing*
router.delete("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.username === req.body.username) {
			try {
				await post.delete();
				res.status(200).json("Composition has been deleted ...");
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(401).json("You can only delete your own compositions");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET POST *complete and fxing*
router.get("/:id", async (req, res) => {
	// try to find the user
	try {
		const post = await Post.findById(req.params.id);
		res.status(200).json(post);

		//if user not found through an error (catch)
	} catch (err) {
		res.status(500).json(err);
	}
});

// GET ALL POSTS
router.get("/", async (req, res) => {
	const username = req.query.user;
	const categoryName = req.query.category;
	try {
		let posts;
		if (username) {
			posts = await Post.find({ username });
		} else if (categoryName) {
			posts = await Post.find({
				categories: {
					$in: [categoryName],
				},
			});
		} else {
			posts = await Post.find();
		}
        res.status(200).json(posts);
		//if user not found through an error (catch)
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
