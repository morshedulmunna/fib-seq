// app/components/CSRSection.tsx
"use client";

import { fetchCSRPosts } from "@/action/action";
import React, { useEffect, useState } from "react";

const CSRSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCSRPosts();
      setPosts(data.slice(0, 5));
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading client-side posts...</p>;

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Client-Side Rendered (CSR)</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CSRSection;
