// app/csr-blog/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import { fetchPosts } from "@/action/action";

const CSRBlogPage = () => {
  const [posts, setPosts] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Failed to load posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Client-Side Rendered Blog</h1>
      <BlogList posts={posts} />
    </main>
  );
};

export default CSRBlogPage;
