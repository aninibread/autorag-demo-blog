import type { Route } from "./+types/blog.$postId";
import { blogPosts } from "../data/blog-posts";
import { marked } from "marked";
import { useEffect, useState } from "react";

export function meta({ params }: Route.MetaArgs) {
  const post = blogPosts.find(p => p.id === params.postId);
  return [
    { title: post ? `${post.title} | Cloudflare Blog` : "Post Not Found | Cloudflare Blog" },
    { name: "description", content: post?.excerpt || "Blog post not found" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  const post = blogPosts.find(p => p.id === params.postId);
  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }
  
  // Configure marked for better rendering
  marked.setOptions({
    breaks: true,
    gfm: true
  });
  
  const htmlContent = marked(post.content);
  return { post, htmlContent };
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { post, htmlContent } = loaderData;
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
              <a href="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-orange-500">☁️</div>
                <span className="text-xl font-semibold">Cloudflare Blog</span>
              </a>
            </div>
            <div className="flex items-center">
              {/* Search container as per snippet instructions */}
              <div id="docs-search-container" className="flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><a href="/" className="text-orange-500 hover:text-orange-600">Blog</a></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">{post.title}</li>
          </ol>
        </nav>

        <article className="prose prose-lg max-w-none">
          {/* Post Header */}
          <header className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {post.author.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{post.author.name}</div>
                  <div className="text-sm text-gray-500">{post.author.role}</div>
                </div>
              </div>
              <div className="text-sm">
                <div>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</div>
                <div className="text-gray-500">{post.readTime}</div>
              </div>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 font-medium mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div 
              className="markdown-content text-gray-900"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>

          {/* Post Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {post.author.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{post.author.name}</h3>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </div>
          </footer>
        </article>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a 
            href="/" 
            className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-medium"
          >
            <span>←</span>
            <span>Back to all posts</span>
          </a>
        </div>
      </main>
    </div>
  );
}