"use client";
import { useState } from "react";
import Link from "next/link";
import { blogs } from "../../app/data/blogsData";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("Latest");
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  const categories = ["All", "Android", "Samsung", "Apple", "Microsoft", "Google"];

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === "All"
    ? blogs
    : blogs.filter((blog) => blog.category === selectedCategory);

  // Sort blogs based on the selected sort order
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    if (sortOrder === "Latest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime(); // Latest first
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime(); // Oldest first
    }
  });


  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header with Filter and Sort Options */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <div className="flex space-x-4">
          {/* Filter Button */}
          <div className="relative">
            <button
              onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
              className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 14a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z"
                />
              </svg>
              Filter
            </button>
            {isFilterDropdownOpen && (
              <ul className="absolute right-0 mt-2 bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden z-10">
                {categories.map((category) => (
                  <li
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterDropdownOpen(false);
                    }}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-700 ${
                      selectedCategory === category ? "bg-gray-700" : ""
                    }`}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Sort Button */}
          <div className="relative">
            <button
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
              Sort
            </button>
            {isSortDropdownOpen && (
              <ul className="absolute right-0 mt-2 bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden z-10">
                <li
                  onClick={() => {
                    setSortOrder("Latest");
                    setIsSortDropdownOpen(false);
                  }}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-700 ${
                    sortOrder === "Latest" ? "bg-gray-700" : ""
                  }`}
                >
                  Latest
                </li>
                <li
                  onClick={() => {
                    setSortOrder("Oldest");
                    setIsSortDropdownOpen(false);
                  }}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-700 ${
                    sortOrder === "Oldest" ? "bg-gray-700" : ""
                  }`}
                >
                  Oldest
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mt-2">{blog.title}</h2>
              <p className="text-sm text-gray-400">
                {new Date(blog.date).toLocaleDateString()} by {blog.author}
              </p>
              <p className="mt-2 text-gray-300 line-clamp-3">{blog.description}</p>
              <Link
                href={`/blogs/${blog.id}`}
                className="mt-4 inline-block text-blue-400 hover:underline font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
