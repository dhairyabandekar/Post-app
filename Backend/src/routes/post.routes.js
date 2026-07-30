const express = require("express");
const multer = require("multer");

const {
    createPost,
    getPosts,
    getMyPosts,
    updatePost,
    deletePost,
} = require("../controllers/post.controller");

const authUser = require("../middleware/auth.middleware");

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
});

router.get("/my-posts", authUser, getMyPosts);

router.get("/", getPosts);

router.post(
    "/",
    authUser,
    upload.single("image"),
    createPost
);

router.patch(
    "/:id",
    authUser,
    updatePost
);

router.delete(
    "/:id",
    authUser,
    deletePost
);

module.exports = router;