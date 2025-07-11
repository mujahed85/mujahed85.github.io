// app/blogs/[slug]/page.js
import { notFound } from 'next/navigation';
import blogsData from '@/app/data/blogs.json'; // Importing the blogs data  

// This function tells Next.js which slugs to statically generate at build time.
export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

// This function generates metadata (like the page title) for each blog post.
export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found'
    };
  }

  return {
    title: post.title,
    description: `Read the blog post titled "${post.title}" by ${post.author}.`
  };
}


export default function BlogPostPage({ params }) {
  const { slug } = params;

  // Find the specific blog post from our data based on the slug.
  const post = blogsData.find((p) => p.slug === slug);

  // If no post is found for the given slug, show the 404 page.
  if (!post) {
    notFound();
  }

  return (
    <div className="blog-container">
      <a href="/blogs" className="back-link">← Back to Blogs</a>
      <h1 className="blog-title">{post.title}</h1>
      <p className="blog-meta">
        By {post.author} on {post.date}
      </p>
      <div className="blog-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
