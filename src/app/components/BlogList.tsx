// app/components/BlogList.tsx
import React from "react";

interface BlogListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  posts: any[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="mb-4">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
