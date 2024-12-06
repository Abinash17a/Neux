import Link from 'next/link';
import {blogs} from '../data/blogsData'

// const blogs = [
//   {
//     id: 1,
//     title: 'December 2024 Android Security Update Available for Google Pixel Devices',
//     description:
//       'Google released the December Pixel update this morning and it happens to be the stable version...',
//     date: 'December 5, 2024',
//     author: 'Kellen',
//     category: 'Featured',
//     image: '/pixel-update.jpg',
//   },
//   {
//     id: 2,
//     title: 'Here’s Everything New in the One UI 7 Beta',
//     description:
//       'You may have seen the news already thanks to Kellen’s reaction to the return of vertical app drawers...',
//     date: 'December 5, 2024',
//     author: 'Tim',
//     image: '/one-ui-7.jpg',
//   },
//   // Add more blogs here
// ];

export default function BlogPage() {
  return (
    <main className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Featured Section */}
      <section className="mb-10">
        <div className="bg-gray-800 text-gray-100 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <img
            src={blogs[0].image}
            alt={blogs[0].title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <span className="text-pink-400 uppercase font-bold text-sm tracking-wide">
              {blogs[0].category}
            </span>
            <h2 className="text-3xl font-bold mt-4">{blogs[0].title}</h2>
            <p className="text-gray-400 mt-4 leading-relaxed">
              {blogs[0].description}
            </p>
            <Link
              href={`/blogs/${blogs[0].id}`}
              className="mt-6 inline-block text-blue-400 hover:underline font-semibold"
            >
              Read More →
            </Link>
          </div>
        </div>
      </section>

      {/* Other Blogs */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.slice(1).map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-800 text-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl leading-tight">{blog.title}</h3>
              <p className="text-gray-400 mt-2 leading-relaxed">
                {blog.description.slice(0, 80)}...
              </p>
              <Link
                href={`/blogs/${blog.id}`}
                className="text-blue-400 hover:underline mt-4 block font-medium"
              >

                Read More →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
