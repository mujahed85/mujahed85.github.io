import Sidebar from '../../../components/blog/Sidebar';
import Footer from '../../../components/footer';
import path from 'path';
import fs from 'fs';
import { notFound } from 'next/navigation';
import BlogContent from './BlogContent';

const blogsData = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'posts/data/blogs.json'), 'utf8'));
const bigDataSlugs = blogsData.filter(post => post.tags && post.tags.some(tag => tag.toLowerCase().includes('big data'))).map(post => post.slug);

export async function generateStaticParams() {
  return bigDataSlugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  if (!bigDataSlugs.includes(slug)) return { title: 'Post Not Found' };
  const mdPath = path.join(process.cwd(), 'posts', `${slug}.md`);
  try {
    const file = fs.readFileSync(mdPath, 'utf8');
    const firstLine = file.split('\n')[0];
    const title = firstLine.replace(/^#+\s*/, '') || slug;
    return {
      title,
      description: `Read "${title}"`,
    };
  } catch {
    return { title: 'Post Not Found' };
  }
}

async function getMarkdownContent(slug) {
  const mdPath = path.join(process.cwd(), 'posts', `${slug}.md`);
  try {
    const file = fs.readFileSync(mdPath, 'utf8');
    return file;
  } catch (e) {
    return null;
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  if (!bigDataSlugs.includes(slug)) notFound();
  const markdownContent = await getMarkdownContent(slug);
  if (!markdownContent) {
    notFound();
  }
  const githubEditUrl = `https://github.com/mujahed85/mujahed85.github.io//edit/master/posts/${slug}.md`;
  return (
    <>
    <section className="container spacer">
      <div className="row">
        <div className="col-md-4 col-lg-3 mb-4">
          <Sidebar blogsData={blogsData} activeCategory="bigdata" activeSlug={slug} />
        </div>
        <div className="col-md-8 col-lg-9">
          <a href="/blogs/bigdata" className="btn btn-link mb-3">&larr; Back to Big Data Blogs</a>
          <a href={githubEditUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mb-3 ms-2">
            Edit on GitHub
          </a>
          <article>
            <BlogContent content={markdownContent} />
          </article>
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
}
