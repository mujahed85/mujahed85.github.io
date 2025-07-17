'use client';
import Link from 'next/link';
import { useState } from 'react';

const categories = [
  {
    name: 'AI',
    slug: 'ai',
    match: post => post.tags && post.tags.some(tag => tag.toLowerCase().includes('ai')),
  },
  {
    name: 'Big Data',
    slug: 'bigdata',
    match: post => post.tags && post.tags.some(tag => tag.toLowerCase().includes('big data')),
  },
  {
    name: 'DevOps',
    slug: 'devops',
    match: post => post.tags && post.tags.some(tag => tag.toLowerCase().includes('devops')),
  },
  {
    name: 'Cloud',
    slug: 'cloud',
    match: post => post.tags && post.tags.some(tag => tag.toLowerCase().includes('cloud')),
  },
];

export default function Sidebar({ blogsData, activeCategory, activeSlug }) {
  const [open, setOpen] = useState(activeCategory || 'ai');

  return (
    <aside className="sidebar p-3 bg-white border rounded" style={{ minWidth: 260, maxWidth: 320 }}>
      <h5 className="mb-4">Blog Categories</h5>
      <div className="accordion" id="blogSidebarAccordion">
        {categories.map(cat => {
          const posts = blogsData.filter(cat.match);
          return (
            <div className="accordion-item" key={cat.slug}>
              <h2 className="accordion-header" id={`heading-${cat.slug}`}>
                <button
                  className={`accordion-button${open === cat.slug ? '' : ' collapsed'}`}
                  type="button"
                  onClick={() => setOpen(open === cat.slug ? null : cat.slug)}
                  aria-expanded={open === cat.slug}
                  aria-controls={`collapse-${cat.slug}`}
                >
                  {cat.name}
                </button>
              </h2>
              <div
                id={`collapse-${cat.slug}`}
                className={`accordion-collapse collapse${open === cat.slug ? ' show' : ''}`}
                aria-labelledby={`heading-${cat.slug}`}
                data-bs-parent="#blogSidebarAccordion"
              >
                <div className="accordion-body p-0">
                  <ul className="list-group list-group-flush">
                    {posts.map(post => (
                      <li key={post.slug} className="list-group-item px-3 py-2">
                        <Link href={`/blogs/${cat.slug}/${post.slug}`}
                          className={`text-decoration-none${activeSlug === post.slug ? ' fw-bold text-primary' : ''}`}
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
} 