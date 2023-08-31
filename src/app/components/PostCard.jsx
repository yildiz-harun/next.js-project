import React from 'react';

export default function PostCard({ title, content }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white mx-4 my-4 p-4 max-w-sm">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-2 truncate">{title}</h2>

      {/* Content */}
      <p className="text-base truncate">{content}</p>
    </div>
  );
}
