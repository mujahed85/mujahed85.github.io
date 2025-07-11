// app/blogs/page.js
import Link from 'next/link';

import blogsData from '@/app/data/blogs.json'; // Importing the blogs data  


export default function BlogListPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Our Blog</h1>
      <p>Here are the latest posts from our team.</p>
      <div style={{ marginTop: '2rem' }}>
        {blogsData.map((post) => (
          <div key={post.id} style={{ marginBottom: '1.5rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h2>
              <Link href={`/blogs/${post.slug}`} style={{ textDecoration: 'none', color: '#0070f3' }}>
                {post.title}
              </Link>
            </h2>
            <p>By {post.author} on {post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}