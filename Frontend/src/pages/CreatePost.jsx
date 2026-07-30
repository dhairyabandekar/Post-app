import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const CreatePost = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            setLoading(true);

            const response = await api.post("/posts", formData);

            alert(response.data.message);

            e.target.reset();

            navigate("/profile");
        } catch (error) {
            console.error("Create Post Error:", error);

            alert(
                error.response?.data?.message ||
                "Failed to create post."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="create-post-section">
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit}>

                <label>Upload Image</label>

                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    required
                />

                <label>Caption</label>

                <input
                    type="text"
                    name="caption"
                    placeholder="Enter caption..."
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Uploading..." : "Create Post"}
                </button>

            </form>
        </section>
    );
};

export default CreatePost;