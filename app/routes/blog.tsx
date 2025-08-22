import type { Route } from "./+types/blog";
import { blogPosts } from "../data/blog-posts";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog | Cloudflare" },
    { name: "description", content: "The latest news and insights from Cloudflare" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return { posts: blogPosts };
}

export default function Blog({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;
  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark that we're on the client to avoid hydration mismatches
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only initialize search after client-side hydration is complete
    if (!isClient) return;

    const initializeSearch = async () => {
      try {
        const { NLWebDropdownChat } = await import('https://ask.nlweb-autorag.app/nlweb-dropdown-chat.js');
        
        const chat = new NLWebDropdownChat({
          containerId: 'docs-search-container',
          site: 'https://ask.nlweb-autorag.app',
          placeholder: 'Search for docs...',
          endpoint: 'https://ask.nlweb-autorag.app'
        });
      } catch (error) {
        console.error('Failed to initialize search:', error);
      }
    };

    initializeSearch();
  }, [isClient]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-orange-500">☁️</div>
              <span className="text-xl font-semibold">Cloudflare Blog</span>
            </div>
            <div className="flex items-center">
              {/* Search container as per snippet instructions */}
              <div id="docs-search-container" className="flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The Cloudflare Blog</h1>
          <p className="text-xl text-gray-600">Get the latest news, insights, and updates from Cloudflare</p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-8 border border-gray-200">
              <div className="flex items-start space-x-4 mb-4">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    <a href={`/blog/${featuredPost.id}`} className="hover:text-orange-500">
                      {featuredPost.title}
                    </a>
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>By {featuredPost.author.name}</span>
                    <span>•</span>
                    <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {featuredPost.tags.map(tag => (
                      <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map(post => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <a href={`/blog/${post.id}`} className="hover:text-orange-500">
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>By {post.author.name}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}