import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Profile = () => {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const [posts, setPosts] = useState([]);

    const [editingPostId, setEditingPostId] = useState(null);
    const [editedCaption, setEditedCaption] = useState("");

    useEffect(() => {
        fetchMyPosts();
    }, []);

    const fetchMyPosts = async () => {
        try {
            const response = await api.get("/posts/my-posts");
            setPosts(response.data.posts);
        } catch (error) {
            console.error(error);
        }
    };

    const startEditing = (post) => {
        setEditingPostId(post._id);
        setEditedCaption(post.caption);
    };

    const cancelEditing = () => {
        setEditingPostId(null);
        setEditedCaption("");
    };

    const saveEdit = async (postId) => {
        try {
            const response = await api.patch(`/posts/${postId}`, {
                caption: editedCaption,
            });

            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post._id === postId ? response.data.post : post
                )
            );

            setEditingPostId(null);
            setEditedCaption("");

            alert("Post updated successfully!");
        } catch (error) {
            alert(error.response?.data?.message);
        }
    };

    const handleDelete = async (postId) => {
        if (!window.confirm("Delete this post?")) return;

        try {
            await api.delete(`/posts/${postId}`);

            setPosts((prevPosts) =>
                prevPosts.filter((post) => post._id !== postId)
            );

            alert("Post deleted successfully!");
        } catch (error) {
            alert(error.response?.data?.message);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <section className="feed-section">

            <div className="feed-header">

                <div className="feed-header-left">
                    <h1>{user.name}'s Profile</h1>
                    <p>{user.email}</p>
                    <p>Total Posts: {posts.length}</p>
                </div>

                <div className="header-buttons">

                    <button
                        className="create-btn"
                        onClick={() => navigate("/create-post")}
                    >
                        + Create Post
                    </button>

                    <button
                        className="viewFeed-btn"
                        onClick={() => navigate("/feed")}
                    >
                        View Feed
                    </button>

                    <button
                        className="logout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

            </div>

            {posts.length === 0 ? (
                <h2>No Posts Yet</h2>
            ) : (
                posts.map((post) => (
                    <div key={post._id} className="post-card">

                        <img
                            src={post.image}
                            alt={post.caption}
                        />

                        {editingPostId === post._id ? (
                            <>
                                <textarea
                                    value={editedCaption}
                                    onChange={(e) =>
                                        setEditedCaption(e.target.value)
                                    }
                                />

                                <div className="post-actions">

                                    <button
                                        className="edit-btn"
                                        onClick={() => saveEdit(post._id)}
                                    >
                                        Save
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={cancelEditing}
                                    >
                                        Cancel
                                    </button>

                                </div>
                            </>
                        ) : (
                            <>
                                <p>{post.caption}</p>

                                <div className="post-actions">

                                    <button
                                        className="edit-btn"
                                        onClick={() => startEditing(post)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDelete(post._id)}
                                    >
                                        Delete
                                    </button>

                                </div>
                            </>
                        )}

                    </div>
                ))
            )}

        </section>
    );
};

export default Profile;