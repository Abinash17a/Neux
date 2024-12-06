"use client";
import { useParams } from 'next/navigation';
import {blogs} from '../../data/blogsData'

// const blogs = [
//   {
//     id: 1,
//     title: 'December 2024 Android Security Update Available for Google Pixel Devices',
//     content:
//       'Google has released the December 2024 Android security update for its Pixel devices. This update includes important security fixes and stability improvements, ensuring that Pixel users remain protected against vulnerabilities. Additionally, some feature tweaks have been added, enhancing the overall experience.',
//     date: 'December 5, 2024',
//     author: 'Kellen',
//     image: '/pixel-update.jpg',
//   },
//   {
//     id: 2,
//     title: 'Here’s Everything New in the One UI 7 Beta',
//     content: 'Samsung’s One UI 7 Beta introduces new visual designs, improved performance, and enhanced privacy controls. This update focuses on making user interactions smoother and adding more customization options for widgets, themes, and lock screens.',
//     date: 'December 5, 2024',
//     author: 'Tim',
//     image: '/one-ui-7.jpg',
//   },
//   // Add more blogs here
// ];

export default function BlogDetailPage() {
  const params = useParams();
  const blog = blogs.find((b) => b.id === Number(params.id));

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-400 text-lg">
        Blog not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Blog Content */}
      <main className="container mx-auto px-4 py-10 flex justify-center">
        <article className="max-w-3xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h1 className="text-4xl font-bold mt-6">{blog.title}</h1>
          <p className="text-gray-400 mt-2">
            By {blog.author} on {blog.date}
          </p>
          <div className="mt-6 text-lg text-gray-300 leading-relaxed">
            {blog.description}
          </div>
        </article>
      </main>
    </div>
  );
}
