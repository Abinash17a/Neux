
import { useRouter } from 'next/router';
import { blogs } from '../../data/blogsData';

import React from 'react';

// import { blogs } from '../../../data/blogsData';

export default async function BlogDetailsPage({ params }: { params: { id: string } }) {
  const blogId = parseInt(params.id, 10);
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold text-red-500">Blog not found!</h1>
        <p className="text-gray-400 mt-4">The blog you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <main className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <article className="bg-gray-800 text-gray-100 rounded-lg shadow-xl p-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <span className="text-pink-400 uppercase font-bold text-sm tracking-wide">
          {blog.category}
        </span>
        <h1 className="text-4xl font-bold mt-4">{blog.title}</h1>
        <p className="text-gray-400 mt-2 text-sm">
          By {blog.author} | {blog.date}
        </p>
        <p className="text-gray-300 mt-6 leading-relaxed">{blog.description}</p>
      </article>
    </main>
  );
}


