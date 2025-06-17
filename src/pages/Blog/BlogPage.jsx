import React, { useState, useEffect } from "react";
import AddPostsForm from "../../components/Blog/AddPostsForm";
import PostFilters from "../../components/Blog/PostFilters";
import PostList from "../../components/Blog/PostList";
import Modal from "../../components/ui/Modal/Modal";
import Button from "../../components/ui/Button/Button";
import { FaPlus } from "react-icons/fa";

const BlogPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search input
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  return (
    <div className="p-8 max-w-[80vw] mx-auto flex flex-row gap-4 justify-center py-24">
      <div className="flex flex-col gap-6 justify-start">
        <h1 className="text-5xl font-bold font-inter">LES ACTUS sur WEEB</h1>
        <PostFilters onSearchChange={setSearchQuery} />
      </div>

      <div>
        <PostList search={debouncedSearch} />

        <div className="mt-6 flex justify-center">
          <Button
            onClick={() => setIsModalOpen(true)}
            text={
              <span className="flex items-center gap-2">
                <FaPlus /> Ajouter un nouvel article
              </span>
            }
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4 text-center text-headings">
          Ajouter un article
        </h2>
        <AddPostsForm />
      </Modal>
    </div>
  );
};

export default BlogPage;
