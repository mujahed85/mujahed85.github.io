'use client';

import { useEffect, useState } from "react";
import BlogCard from "../components/blog/BlogCard";

const blogsData = {
  posts: [
    {
      id: 1,
      title: "Artificial Intelligence",
      slug: "ai",
      description: "Blogs on Artficial Intelligence",
    },
    {
      id: 2,
      title: "Big Data and Analytics",
      slug: "bigdata",
      description: "Blogs on Big Data and Analytics",
    },
    {
      id: 3,
      title: "DevOps",
      slug: "devops",
      description: "Blogs on DevOps.",
    },
    {
      id: 4,
      title: "Learning Cloud Computing",
      slug: "cloud",
      description: "Blogs on Learning Cloud Computing.",
    },
  ]
};

async function fetchImage(query) {
  const response = await fetch(`https://pixabay.com/api/?key=51329316-38134729e100e36592bc8d2d1&safesearch=true&safesearch=true&q=${encodeURIComponent(query)}`);
  
  const data = await response.json();
  var imgno = Math.floor(Math.random() * 10);
  var finalurl = data?.hits?.[imgno]?.largeImageURL || data?.hits?.[0]?.largeImageURL;
  console.log("Fetched images: for ", query, finalurl);

  return finalurl;
}

export default function BlogListPage() {
  const [postsWithImages, setPostsWithImages] = useState([]);

  useEffect(() => {
    async function loadImages() {
      const posts = await Promise.all(
        blogsData.posts.map(async (post) => {
          const imageUrl = await fetchImage(post.title);
          return { ...post, image: imageUrl };
        })
      );
      setPostsWithImages(posts);
    }

    loadImages();
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 className="mb-3">Our Blog</h1>
      <p>Here are the latest posts from our team.</p>

      <div className="row mt-4">
        {postsWithImages.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            title={post.title}
            description={post.description}
            link={`/blogs/${post.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
