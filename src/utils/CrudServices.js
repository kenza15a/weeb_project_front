const API_BASE = "http://localhost:8000/api/articles/";

 export const fetchPosts = async (page = 10) => {
  const res = await fetch(`${API_BASE}?page=${page}`);
  if (!res.ok) throw new Error("Failed to fetch posts");

  const data = await res.json();
  return {
    posts: data.results,
    total: data.count,
    next: data.next,
    previous: data.previous,
  };
};


export const addPost = async (post) => {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (!res.ok) throw new Error("Failed to add post");
  return await res.json();
};

export const updatePost = async (id, post) => {
  const res = await fetch(`${API_BASE}${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (!res.ok) throw new Error("Failed to update post");
  return await res.json();
};

export const deletePost = async (id) => {
  const res = await fetch(`${API_BASE}${id}/`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete post");
  return true;
};
