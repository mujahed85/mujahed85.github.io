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
    name: 'Cloud',
    slug: 'cloud',
    match: post => post.tags && post.tags.some(tag => tag.toLowerCase().includes('cloud')),
  },
  {
    name: 'DevOps',
    slug: 'devops',
    subsections: [
      {
        name: 'Dev',
        slug: 'dev',
        posts: [
          { title: 'Variables to Functions', slug: 'variables-to-functions' },
          { title: 'DOM to Async', slug: 'dom-to-async' },
        ],
      },
      {
        name: 'Ops',
        slug: 'ops',
        match: post =>
          post.tags && post.tags.some(tag => tag.toLowerCase().includes('devops')),
      },
    ],
  },
];

export default function Sidebar({ blogsData, activeCategory, activeSlug }) {
  const [open, setOpen] = useState(activeCategory || 'ai');
  const [openSub, setOpenSub] = useState(null);

  return (
    <aside className="sidebar p-3 bg-white border rounded" style={{ minWidth: 260, maxWidth: 320 }}>
      <h5 className="mb-4">Blog Categories</h5>
      <div className="accordion" id="blogSidebarAccordion">
        {categories.map(cat => {
          const posts = cat.match ? blogsData.filter(cat.match) : [];

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
                  {/* Check if category has subsections */}
                  {cat.subsections ? (
                    <div className="accordion" id={`subAccordion-${cat.slug}`}>
                      {cat.subsections.map(sub => {
                        const subPosts = sub.match ? blogsData.filter(sub.match) : sub.posts || [];
                        return (
                          <div className="accordion-item" key={sub.slug}>
                            <h2 className="accordion-header" id={`heading-${cat.slug}-${sub.slug}`}>
                              <button
                                className={`accordion-button accordion-button-sm${openSub === sub.slug ? '' : ' collapsed'}`}
                                type="button"
                                onClick={() => setOpenSub(openSub === sub.slug ? null : sub.slug)}
                                aria-expanded={openSub === sub.slug}
                                aria-controls={`collapse-${cat.slug}-${sub.slug}`}
                              >
                                {sub.name}
                              </button>
                            </h2>
                            <div
                              id={`collapse-${cat.slug}-${sub.slug}`}
                              className={`accordion-collapse collapse${openSub === sub.slug ? ' show' : ''}`}
                              aria-labelledby={`heading-${cat.slug}-${sub.slug}`}
                              data-bs-parent={`#subAccordion-${cat.slug}`}
                            >
                              <div className="accordion-body p-0">
                                <ul className="list-group list-group-flush">
                                  {subPosts.map(post => (
                                    <li key={post.slug} className="list-group-item px-3 py-2">
                                      <Link
                                        href={`/blogs/${cat.slug}/${sub.slug}/${post.slug}`}
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
                  ) : (
                    <ul className="list-group list-group-flush">
                      {posts.map(post => (
                        <li key={post.slug} className="list-group-item px-3 py-2">
                          <Link
                            href={`/blogs/${cat.slug}/${post.slug}`}
                            className={`text-decoration-none${activeSlug === post.slug ? ' fw-bold text-primary' : ''}`}
                          >
                            {post.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}