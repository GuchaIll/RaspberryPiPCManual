// components/Page.tsx
import React from 'react';

interface PageProps {
  content: string; // Content of the page
}

const Page: React.FC<PageProps> = ({ content }) => {
  return (
    <div className="page">
      <p>{content}</p>
    </div>
  );
};

export default Page;