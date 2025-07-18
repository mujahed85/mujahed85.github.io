'use client';

import { useEffect, useState } from 'react';
import { marked } from 'marked';
import createDOMPurify from 'dompurify';
import Header from '@/app/components/blog/header';

export default function BlogContent({ content }) {
  const [markdown, setMarkdown] = useState(content);
  const [htmlContent, setHtmlContent] = useState('');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const DOMPurify = createDOMPurify(window);
      // Allow iframes but sanitize other XSS
      DOMPurify.addHook('uponSanitizeElement', (node, data) => {
        if (data.tagName === 'iframe') {
          // allow all attributes for iframe
          return node;
        }
      });
      const html = DOMPurify.sanitize(marked.parse(markdown), { ADD_TAGS: ['iframe'], ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] });
      setHtmlContent(html);
    }
  }, [markdown]);

  return (
    <div className="blog-content-editor mt-4">
      <Header />

      <div className="d-flex justify-content-end mb-2 gap-2">
        <button className="btn btn-sm btn-outline-primary" onClick={() => setEditMode(!editMode)}>
          {editMode ? 'Preview' : 'Edit Markdown'}
        </button>
      </div>
      {editMode ? (
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          rows={20}
          className="form-control"
          style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}
        />
      ) : (
        <section
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      )}
    </div>
  );
}
