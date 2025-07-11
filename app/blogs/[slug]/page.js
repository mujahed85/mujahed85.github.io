// app/blogs/[slug]/page.js
import { notFound } from 'next/navigation';
import blogsData from '@/app/data/blogs.json'; // Importing the blogs data  

// This function tells Next.js which slugs to statically generate at build time.
export async function generateStaticParams() {
  // Return an array of objects, where each object has a `slug` property
  // that corresponds to a blog post.
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
  // The `params` object contains the dynamic route parameters.
  // In our case, it will be { slug: 'my-first-post' }
  const { slug } = params;

  // Find the specific blog post from our data based on the slug.
  const post = blogsData.find((p) => p.slug === slug);

  // If no post is found for the given slug, show the 404 page.
  if (!post) {
    notFound();
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <a href="/blogs" style={{ color: '#0070f3' }}>← Back to Blogs</a>
      <h1 style={{ marginTop: '1.5rem' }}>{post.title}</h1>
      <p style={{ fontStyle: 'italic', color: '#555' }}>
        By {post.author} on {post.date}
      </p>
      <div style={{ marginTop: '2rem', lineHeight: '1.6' }}>
        <p>{post.content}</p>
      </div>
    </div>
  );
}