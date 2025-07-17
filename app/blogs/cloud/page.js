import Sidebar from '../../components/blog/Sidebar';
import Footer from '../../components/footer';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const blogsData = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'posts/data/blogs.json'), 'utf8'));

export default function CloudBlogListPage() {
  // Filter posts for Cloud category (by tag or slug)
  const cloudPosts = blogsData.filter(
    (post) => post.tags && post.tags.some(tag => tag.toLowerCase().includes('cloud'))
  );

  return (
    <>
      <section className="container spacer">
        <div className="row">
          <div className="col-md-4 col-lg-3 mb-4">
            <Sidebar blogsData={blogsData} activeCategory="cloud" />
          </div>
          <div className="col-md-8 col-lg-9">
            <div className="section-title">
              <a href="/blogs" className="back-link">&larr; All Blog Categories</a>
              <h1 className="mb-3 blog-title">Cloud Blogs</h1>
              <p>Here are the latest posts about Cloud Computing.</p>
            </div>
            <div className="row blogs-card mt-4">
              {cloudPosts.map((post) => (
                <div key={post.slug} className="col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.description}</p>
                      <Link href={`/blogs/cloud/${post.slug}`} className="btn btn-primary">Read More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}