import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { fetchPosts } from "../../utils/services";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button/Button";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts(page).then((data) => setPosts(data));
  }, [page]);

  return (
    <div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <AnimatePresence>
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center mt-6">
        <Button
          text="Précédent"
          variant="accent"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        />
        <span className="text-white">Page {page}</span>
        <Button
          text="Suivant"
          variant="accent"
          onClick={() => setPage((p) => p + 1)}
        />
      </div>
    </div>
  );
};

export default PostList;
