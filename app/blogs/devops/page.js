import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const blogsData = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'posts/data/blogs.json'), 'utf8'));

export default function DevopsBlogListPage() {
  // Filter posts for DevOps category (by tag or slug)
  const devopsPosts = blogsData.filter(
    (post) => post.tags && post.tags.some(tag => tag.toLowerCase().includes('devops'))
  );

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 className="mb-3">DevOps Blogs</h1>
      <p>Here are the latest posts about DevOps.</p>
      <div className="row mt-4">
        {devopsPosts.map((post) => (
          <div key={post.slug} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <Link href={`/blogs/devops/${post.slug}`} className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}