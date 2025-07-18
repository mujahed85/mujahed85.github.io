'use client';

import { useEffect, useState } from 'react';
import { marked } from 'marked';
import createDOMPurify from 'dompurify';
import Header from '@/app/components/blog/header';

export default function BlogContent({ content }) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const DOMPurify = createDOMPurify(window);
      DOMPurify.addHook('uponSanitizeElement', (node, data) => {
        if (data.tagName === 'iframe') {
          return node;
        }
      });
      const html = DOMPurify.sanitize(marked.parse(content), {
        ADD_TAGS: ['iframe'],
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'],
      });
      setHtmlContent(html);
    }
  }, [content]);

  return (
    <div className="blog-content-viewer mt-4">
      <Header />
      <section
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
