import { useState } from "react";

const PostFilters = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearchChange(value); // live propagate to parent
  };

  return (
    <div className="mb-4 flex">
      <input
        className="flex-1 border rounded p-2 mr-2"
        placeholder="Trouver un article..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default PostFilters;
