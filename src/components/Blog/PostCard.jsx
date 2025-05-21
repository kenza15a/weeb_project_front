const PostCard = ({ post ,className,...props }) => (
  <div className="  border-[0.1rem] border-violet-900 p-4 rounded shadow  ">
    <h2 className="text-xl font-semibold">{post.title}</h2>
    <p className="">{post.excerpt}</p>
  </div>
);

export default PostCard;
