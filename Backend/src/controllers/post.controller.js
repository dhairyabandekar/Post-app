const postModel = require("../models/post.model");
const uploadFile = require("../services/imagekit.service");

// Create Post
const createPost = async (req, res) => {
    try {
        // Validate image
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload an image."
            });
        }

        // Upload image to ImageKit
        const result = await uploadFile(req.file);

        // Create post
        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        });

        return res.status(201).json({
            success: true,
            message: "Post created successfully.",
            post
        });

    } catch (error) {
        console.error("Create Post Error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong while creating the post."
        });
    }
};

// Get All Posts
const getPosts = async (req, res) => {
    try {

        const posts = await postModel
            .find()
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            message: "Posts fetched successfully.",
            posts
        });

    } catch (error) {
        console.error("Get Posts Error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching posts."
        });
    }
};

module.exports = {
    createPost,
    getPosts
};