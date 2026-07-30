const postModel = require("../models/post.model");
const uploadFile = require("../services/imagekit.service");

// Create Post
const createPost = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload an image.",
            });
        }

        const result = await uploadFile(req.file);

        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption,
            author: req.user._id,
        });

        return res.status(201).json({
            success: true,
            message: "Post created successfully.",
            post,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong.",
        });
    }
};

// Get All Posts
const getPosts = async (req, res) => {
    try {

        const posts = await postModel
            .find()
            .populate("author", "name email")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            posts,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Something went wrong.",
        });

    }
};

// Update Post
const updatePost = async (req, res) => {

    try {

        const post = await postModel.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        if (post.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to update this post",
            });
        }

        post.caption = req.body.caption || post.caption;

        await post.save();

        return res.status(200).json({
            success: true,
            message: "Post updated successfully",
            post,
        });

    } catch (error) {
    console.error(error);

    return res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.message,
    });
}

};

// Delete Post
const deletePost = async (req, res) => {

    try {

        const post = await postModel.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        if (post.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to delete this post",
            });
        }

        await post.deleteOne();

        return res.status(200).json({
            success: true,
            message: "Post deleted successfully",
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });

    }

};

// Get Logged-in User Posts
const getMyPosts = async (req, res) => {
    try {

        const posts = await postModel
            .find({ author: req.user._id })
            .populate("author", "name email")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            posts,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });

    }
};

module.exports = {
    createPost,
    getPosts,
    getMyPosts,
    updatePost,
    deletePost,
};