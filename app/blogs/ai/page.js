import { notFound } from 'next/navigation';
import BlogContent from '../[slug]/BlogContent';
import path from 'path';
import fs from 'fs';

export async function generateStaticParams() {
  // List all .md files in posts/ and return their slugs
  const postsDir = path.join(process.cwd(), 'posts');
  let slugs = [];
  try {
    slugs = fs.readdirSync(postsDir)
      .filter((file) => file.endsWith('.md'))
      .map((file) => ({ slug: file.replace(/\.md$/, '') }));
  } catch (e) {console.error("Error reading posts directory:", e);}
  console.log("Generated slugs:", slugs);
  return slugs;
}

export async function generateMetadata({ params }) {
  const slug  = "big-artificial-intelligence";
  console.log("Generating metadata for slug:", slug);
  // Try to read the first line as title, fallback to slug
  const mdPath = path.join(process.cwd(), 'posts', `${slug}.md`)    ;
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
  const { slug } = { slug: "big-artificial-intelligence" };
  const markdownContent = await getMarkdownContent(slug);
  if (!markdownContent) {
    notFound();
  }
  const githubEditUrl = `https://github.com/mujahed85/mujahed85.github.io//edit/master/posts/${slug}.md`;
  return (
    <div className="container my-5">
      <a href="/blogs" className="btn btn-link mb-3">&larr; Back to Blogs</a>
      <a href={githubEditUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mb-3 ms-2">
        Edit on GitHub
      </a>
      <article>
        <BlogContent content={markdownContent} />
      </article>
    </div>
  );
}

// export default function BlogListPage() {
//     return <h1>Blog List Page</h1>;
// }