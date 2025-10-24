'use client';
import Link from 'next/link';
import { useState } from 'react';

const categories = [
  { name: 'AI', slug: 'ai', match: post => post.tags && post.tags.some(tag => tag.toLowerCase().includes('ai')) },
  { name: 'Big Data', slug: 'bigdata', match: post => post.tags && post.tags.some(tag => tag.toLowerCase().includes('big data')) },
  { name: 'Cloud', slug: 'cloud', match: post => post.tags && post.tags.some(tag => tag.toLowerCase().includes('cloud')) },
  { name: 'DevOps', slug: 'devops', match: post => post.tags && post.tags.some(tag => tag.toLowerCase().includes('devops')) },
];

export default function Sidebar({ blogsData, activeCategory, activeSlug }) {
  const [open, setOpen] = useState(activeCategory || 'ai');
  const [subOpen, setSubOpen] = useState(null);

  const devPosts = blogsData.filter(post => post.tags && post.tags.some(tag => tag.toLowerCase().includes('dev')));
  const opsPosts = blogsData.filter(post => post.tags && post.tags.some(tag => tag.toLowerCase().includes('ops')));

  // Toggle main category open state
  const toggleOpen = (slug) => {
    setOpen(open === slug ? null : slug);
    setSubOpen(null); // close submenus on main toggle
  };

  // Toggle subcategory open state
  const toggleSubOpen = (slug) => {
    setSubOpen(subOpen === slug ? null : slug);
  };

  return (
    <>
      <style jsx>{`
        .accordion-button:not(.collapsed) {
          font-weight: 500 !important;
          background-color: #fff !important;
          color: #000 !important;
          box-shadow: none !important;
        }
        .accordion-button:focus {
          box-shadow: none !important;
          outline: none !important;
        }
        .subcategory-button {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 0.375rem 1rem;
          font-size: 1rem;
          background: none;
          border: none;
          color: #0d6efd;
          cursor: pointer;
          text-align: left;
          font-weight: 500;
        }
        .subcategory-button:hover {
          text-decoration: underline;
        }
        .accordion-collapse .list-group-item a {
          color: inherit;
          text-decoration: none;
        }
        .accordion-collapse .list-group-item a.active {
          font-weight: 700;
          color: #0d6efd;
        }
      `}</style>

      <aside className="sidebar p-3 bg-white border rounded" style={{ minWidth: 260, maxWidth: 320 }}>
        <h5 className="mb-4">Blog Categories</h5>
        <div className="accordion" id="blogSidebarAccordion">
          {categories.map(cat => {
            if (cat.slug !== 'devops') {
              // Normal categories
              const posts = blogsData.filter(cat.match);
              return (
                <div className="accordion-item" key={cat.slug}>
                  <h2 className="accordion-header" id={`heading-${cat.slug}`}>
                    <button
                      className={`accordion-button${open === cat.slug ? '' : ' collapsed'}`}
                      type="button"
                      onClick={() => toggleOpen(cat.slug)}
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
                            <Link
                              href={`/blogs/${cat.slug}/${post.slug}`}
                              className={`text-decoration-none${activeSlug === post.slug ? ' active' : ''}`}
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
            } else {
              // DevOps with Dev and Ops subsections
              return (
                <div className="accordion-item" key={cat.slug}>
                  <h2 className="accordion-header" id={`heading-${cat.slug}`}>
                    <button
                      className={`accordion-button${open === cat.slug ? '' : ' collapsed'}`}
                      type="button"
                      onClick={() => toggleOpen(cat.slug)}
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
                      {/* Dev Subsection */}
                      <div className="accordion" id="devOpsSubAccordion">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading-dev">
                            <button
                              className={`accordion-button sub-accordion-button${subOpen === 'dev' ? '' : ' collapsed'}`}
                              type="button"
                              onClick={() => toggleSubOpen('dev')}
                              aria-expanded={subOpen === 'dev'}
                              aria-controls="collapse-dev"
                              style={{ fontWeight: '500', color: '#0d6efd', cursor: 'pointer' }}
                            >
                              Dev
                            </button>
                          </h2>
                          <div
                            id="collapse-dev"
                            className={`accordion-collapse collapse${subOpen === 'dev' ? ' show' : ''}`}
                            aria-labelledby="heading-dev"
                            data-bs-parent="#devOpsSubAccordion"
                          >
                            <div className="accordion-body p-0" style={{ paddingLeft: '1rem' }}>
                              <ul className="list-group list-group-flush">
                                {devPosts.map(post => (
                                  <li key={post.slug} className="list-group-item px-3 py-2">
                                    <Link
                                      href={`/blogs/${cat.slug}/${post.slug}`}
                                      className={`text-decoration-none${activeSlug === post.slug ? ' active' : ''}`}
                                    >
                                      {post.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Ops Subsection */}
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading-ops">
                            <button
                              className={`accordion-button sub-accordion-button${subOpen === 'ops' ? '' : ' collapsed'}`}
                              type="button"
                              onClick={() => toggleSubOpen('ops')}
                              aria-expanded={subOpen === 'ops'}
                              aria-controls="collapse-ops"
                              style={{ fontWeight: '500', color: '#0d6efd', cursor: 'pointer' }}
                            >
                              Ops
                            </button>
                          </h2>
                          <div
                            id="collapse-ops"
                            className={`accordion-collapse collapse${subOpen === 'ops' ? ' show' : ''}`}
                            aria-labelledby="heading-ops"
                            data-bs-parent="#devOpsSubAccordion"
                          >
                            <div className="accordion-body p-0" style={{ paddingLeft: '1rem' }}>
                              <ul className="list-group list-group-flush">
                                {opsPosts.map(post => (
                                  <li key={post.slug} className="list-group-item px-3 py-2">
                                    <Link
                                      href={`/blogs/${cat.slug}/${post.slug}`}
                                      className={`text-decoration-none${activeSlug === post.slug ? ' active' : ''}`}
                                    >
                                      {post.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </aside>
    </>
  );
}