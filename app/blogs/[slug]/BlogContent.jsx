'use client';

import { useEffect, useState } from 'react';
import { marked } from 'marked';
import createDOMPurify from 'dompurify';

export default function BlogContent({ content }) {
  const [markdown, setMarkdown] = useState(content);
  const [htmlContent, setHtmlContent] = useState('');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const DOMPurify = createDOMPurify(window);
      const html = DOMPurify.sanitize(marked.parse(markdown));
      setHtmlContent(html);
    }
  }, [markdown]);

  return (
    <div className="blog-content-editor mt-4">
      <div className="d-flex justify-content-end mb-2">
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
