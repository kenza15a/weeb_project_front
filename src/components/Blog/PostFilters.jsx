import { useState } from "react";

const PostFilters = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    // To be wired with PostList via context or lifting state
    console.log("Searching:", search);
  };

  return (
    <div className="mb-4 flex">
      <input
        className="flex-1 border rounded p-2 mr-2"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
    </div>
  );
};

export default PostFilters;
