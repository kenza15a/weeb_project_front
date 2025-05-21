/* const API_BASE = "http://localhost:8000/api/posts"; 

export const fetchPosts = async (page = 1) => {
  const res = await fetch(`${API_BASE}?page=${page}`);
  return await res.json();
};

export const addPost = async (post) => {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post)
  });
  return await res.json();
};
 */
// utils/service.js

let dummyPosts = Array.from({ length: 35 }, (_, i) => ({
  id: i + 1,
  title: `Actualité #${i + 1}`,
  excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec vel sapien quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. 
            Nunc auctor justo nec purus pretium, non volutpat tortor sollicitudin.`.slice(0, 150) + "...",
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed accumsan nisi a felis viverra, sed volutpat orci cursus. 
            Phasellus imperdiet, sapien et iaculis accumsan, odio orci aliquet sem, 
            vel tempor enim sapien ut nulla. Etiam volutpat lorem quis mauris sollicitudin, 
            nec iaculis nisi vehicula. Suspendisse potenti. Quisque vel felis nec sapien convallis sodales. 
            Curabitur nec mi nec eros tincidunt consequat at vel purus. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

            Post number: ${i + 1}`
}));

const POSTS_PER_PAGE = 6;

export const fetchPosts = async (page = 1) => {
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const paginatedPosts = dummyPosts.slice(start, end);

  return new Promise((resolve) =>
    setTimeout(() => resolve(paginatedPosts), 300) // simulate network delay
  );
};

export const addPost = async ({ title, content }) => {
  const newPost = {
    id: dummyPosts.length + 1,
    title,
    excerpt: content.slice(0, 100) + "...",
    content,
  };
  dummyPosts = [newPost, ...dummyPosts];

  return new Promise((resolve) =>
    setTimeout(() => resolve(newPost), 300)
  );
};
