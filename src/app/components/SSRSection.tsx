/* eslint-disable @typescript-eslint/no-explicit-any */
// app/components/SSRSection.tsx
import { fetchSSRPosts } from "@/action/action";
import React from "react";

const SSRSection = async () => {
  const posts = await fetchSSRPosts();

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Server-Side Rendered (SSR)</h2>
      <ul>
        {posts.slice(0, 5).map((post: any) => (
          <li key={post.id}>
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SSRSection;
