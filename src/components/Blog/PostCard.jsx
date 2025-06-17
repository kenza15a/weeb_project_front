import React from "react";
import Button from "../ui/Button/Button";
import { useNavigate } from "react-router-dom";

const highlightText = (text, keyword) => {
  if (!keyword) return text;

  const normalizedKeyword = keyword
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const parts = text.split(new RegExp(`(${keyword})`, "gi"));
  return parts.map((part, i) => {
    const normalizedPart = part
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    return normalizedPart === normalizedKeyword ? (
      <mark key={i} className="bg-yellow-300 px-1 rounded">
        {part}
      </mark>
    ) : (
      part
    );
  });
};

const PostCard = ({ post, search }) => {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded-xl shadow-xl bg-white text-black flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          {highlightText(post.title, search)}
        </h2>
        <p className="text-sm text-gray-500 mb-2">
          {post.author ? `Par ${post.author}` : "Auteur inconnu"} –{" "}
          {new Date(post.publication_date).toLocaleDateString()}
        </p>
        <p className="text-gray-700 line-clamp-3">
          {highlightText(post.content, search)}
        </p>
      </div>
      <div className="mt-4">
        <Button
          text="Lire plus"
          onClick={() => navigate(`/posts/${post.id}`)}
        />
      </div>
    </div>
  );
};

export default PostCard;
