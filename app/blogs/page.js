'use client';

import BlogCard from "../components/blog/BlogCard";

import blogsData from '@/posts/data/blogs.json';

export default function BlogListPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 className="mb-3">Our Blog</h1>
      <p>Here are the latest posts from our team.</p>

      <div className="row mt-4">
        {blogsData.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image} // Assuming your JSON has an 'image' field
            title={post.title}
            description={post.description} // Assuming a 'description' exists
            link={`/blogs/${post.slug}`}
          />
        ))}
      </div>


    </div>
  );
}
