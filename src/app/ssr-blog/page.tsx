// app/ssr-blog/page.tsx
import React from "react";
import BlogList from "../components/BlogList";
import { fetchPosts } from "@/action/action";

const SSRBlogPage = async () => {
  let posts: unknown[] = [];
  let error = null;

  try {
    posts = await fetchPosts();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    error = "Failed to load posts. Please try again later.";
  }

  if (error) {
    return (
      <main>
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p>{error}</p>
      </main>
    );
  }
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Server-Side Rendered Blog</h1>
      <BlogList posts={posts} />
    </main>
  );
};

export default SSRBlogPage;
