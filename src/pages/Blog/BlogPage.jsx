import React, { useState } from "react";
import Modal from "../../components/ui/Modal/Modal";
import AddPostsForm from "../../components/Blog/AddPostsForm";
import PostList from "../../components/Blog/PostList";
import PostFilters from "../../components/Blog/PostFilters";
import Button from "../../components/ui/Button/Button";
import { FaPlus } from "react-icons/fa";
const BlogPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-4  w-full  flex-grow px-6">
      <h1 className="text-5xl font-bold mb-4 font-inter">LES ACTUS sur WEEB</h1>
      <PostFilters />
      <PostList />

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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl  text-white font-bold mb-4 text-center text-pr">
          Ajouter un article
        </h2>
        <AddPostsForm />
      </Modal>
    </div>
  );
};

export default BlogPage;
