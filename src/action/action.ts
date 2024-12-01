// app/api/actions.ts
export const fetchPosts = async (): Promise<unknown[]> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store", // Fresh data on every request (SSR)
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const fetchPostById = async (id: string): Promise<unknown> => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch post: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};

export const fetchPostsWithRevalidate = async (): Promise<unknown[]> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 20 }, // ISR: Revalidate every 2 seconds
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
