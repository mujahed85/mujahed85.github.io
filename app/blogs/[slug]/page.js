import { notFound } from 'next/navigation';
import blogsData from '@/app/data/blogs.json';
import { format } from 'date-fns';

// Generate static paths at build time
export async function generateStaticParams() {
  if (!Array.isArray(blogsData)) return [];

  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

// Generate page metadata for SEO
export async function generateMetadata({ params }) {
  const post = blogsData.find((p) => p.slug === params.slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: `Read "${post.title}" by ${post.author}.`,
  };
}

// Blog post page component
export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container my-5">
      <a href="/blogs" className="btn btn-link mb-3">&larr; Back to Blogs</a>

      <article>
        <header className="mb-4">
          <h1 className="display-5 fw-bold">{post.title}</h1>
          <p className="text-muted mb-1">
            By <strong>{post.author}</strong> on{' '}
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM dd, yyyy')}
            </time>
          </p>
          <p className="text-secondary small fst-italic">{post.readingTime}</p>
          <div className="mt-2">
            {post.tags?.map((tag) => (
              <span key={tag} className="badge bg-secondary me-2">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <section
          className="blog-content"
          dangerouslySetInnerHTML={{
            __html: post.content.replace(/\n/g, '<br/>'),
          }}
        />
      </article>
    </div>
  );
}
