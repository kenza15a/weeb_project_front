import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/articles/${id}/`);
        if (!res.ok) throw new Error("Failed to fetch post");
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="text-white text-lg">Chargement...</div>;
  if (!post) return <div className="text-red-600">Article introuvable.</div>;

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow text-black">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        {post.author ? `Par ${post.author}` : "Auteur inconnu"} –{" "}
        {new Date(post.publication_date).toLocaleDateString()}
      </p>
      <p className="text-lg leading-relaxed whitespace-pre-line">
        {post.content}
      </p>
    </div>
  );
};

export default PostDetail;
