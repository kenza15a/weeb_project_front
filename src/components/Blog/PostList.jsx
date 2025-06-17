import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { fetchPosts } from "../../utils/CrudServices";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button/Button";
import LoaderMessage from "../ui/Loading/LoaderMessage";

const PostList = ({ search }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [loadingState, setLoadingState] = useState("loading");

  
  useEffect(() => {
    setPage(1);
  }, [search]);

  
  useEffect(() => {
    const loadPosts = async () => {
      setLoadingState("loading");
      try {
        const { posts, next, previous } = await fetchPosts(page, search);
        setPosts(posts);
        setHasNext(!!next);
        setHasPrevious(!!previous);
        setLoadingState("success");
      } catch (err) {
        console.error("Error loading posts:", err);
        setPosts([]);
        setLoadingState("error");
      }
    };

    loadPosts();
  }, [page, search]); //  both are required to trigger re-fetch

  return (
    <div>
      <LoaderMessage type={loadingState} />

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <AnimatePresence>
          {loadingState === "success" && posts.length === 0 ? (
            <motion.div
              className="text-center text-red-600 col-span-full mt-6 text-4xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Aucun résultat trouvé.
            </motion.div>
          ) : (
            posts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                <PostCard post={post} search={search} />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center mt-6">
        <Button
          text="Précédent"
          variant="accent"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={!hasPrevious}
        />
        <span className="text-white">Page {page}</span>
        <Button
          text="Suivant"
          variant="accent"
          onClick={() => setPage((p) => p + 1)}
          disabled={!hasNext}
        />
      </div>
    </div>
  );
};

export default PostList;
