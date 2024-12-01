// app/page.tsx
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Blog Project</h1>
      <ul className="space-y-2">
        <li>
          <Link prefetch href="/ssr-blog">
            <div className="text-blue-500 hover:underline">
              Server-Side Rendered Blog
            </div>
          </Link>
        </li>
        <li>
          <Link prefetch href="/csr-blog">
            <div className="text-blue-500 hover:underline">
              Client-Side Rendered Blog
            </div>
          </Link>
        </li>
        <li>
          <Link prefetch href="/isr-blog">
            <div className="text-blue-500 hover:underline">
              Incrementally Static Regenerated Blog
            </div>
          </Link>
        </li>
        <li>
          <Link prefetch href="/partial-rendering">
            <div className="text-blue-500 hover:underline">
              partial-rendering
            </div>
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default HomePage;
