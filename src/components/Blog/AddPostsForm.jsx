import { useState } from "react";
import { addPost } from "../../utils/services";

const AddPostsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        className="w-full border rounded p-2 mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full border rounded p-2 mb-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit" className="p-2 bg-[#9333EA] text-white rounded">
        Add Post
      </button>
    </form>
  );
};

export default AddPostsForm;
