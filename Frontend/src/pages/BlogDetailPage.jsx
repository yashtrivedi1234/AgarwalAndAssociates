import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/dataSlice";
import Breadcrumb from "../components/Breadcrumb";

const formattedDate = (date) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const BlogDetailPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { blogData, status, error } = useSelector((state) => state.data);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (!blogData.length) dispatch(fetchBlogData());
  }, [dispatch, blogData.length]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blog = blogData.find((item) => item.slug === slug);
  const relatedBlogs = blogData.filter((item) => item.slug !== blog?.slug);

  if (status === "loading")
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="relative">
          <div className="w-24 h-24 border-8 border-primary-btn/20 border-t-primary-btn rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-btn to-orange-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <p className="text-red-600 text-xl font-semibold">{error}</p>
        </div>
      </div>
    );

  if (!blog)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
            <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01" />
            </svg>
          </div>
          <p className="text-red-600 text-xl font-semibold">Blog Not Found!</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      
      {/* Reading Progress Bar */}
      {/* <div className="fixed top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary-btn via-orange-500 to-pink-500 transition-all duration-300 shadow-lg shadow-primary-btn/50"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div> */}

      {/* Floating Action Buttons */}
      

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      {/* <Breadcrumb
        title="Blog Detail"
        items={[
          { name: "Blogs", path: "/blog" },
          { name: blog?.title, path: `/blog-details/${blog?.slug}` },
        ]}
      /> */}

      <div className="relative container mx-auto px-4 py-8 lg:py-16 mt-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section - Split Screen Design */}
          <div className="mb-16 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left - Content */}
              <div className="space-y-8 order-2 lg:order-1 mt-6">
                {/* Animated Category Tag */}
               

                {/* Mega Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] messiri">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-primary-btn to-orange-600 animate-gradient">
                    {blog.title}
                  </span>
                </h1>

                {/* Decorative Separator */}
                <div className="flex items-center gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded-full animate-pulse"
                      style={{
                        width: `${40 - i * 5}px`,
                        background: `linear-gradient(to right, rgb(139, 92, 70), rgb(249, 115, 22))`,
                        opacity: 1 - i * 0.15,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6 pt-4">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-2xl font-black text-neutral-900">5</p>
                          <p className="text-xs text-neutral-600 font-medium">min read</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-2xl font-black text-neutral-900">1.2k</p>
                          <p className="text-xs text-neutral-600 font-medium">views</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-2xl font-black text-neutral-900">4.8</p>
                          <p className="text-xs text-neutral-600 font-medium">rating</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Image with 3D Effect */}
              <div className="order-1 lg:order-2">
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-primary-btn via-orange-500 to-pink-500 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-pulse"></div>
                  
                  {/* Image Container */}
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700">
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                        <img
                          src={blog.imageUrl}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Gradient Overlays */}
                       <div className="absolute inset-0 bg-gradient-to-tr from-primary-btn/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-white/30 to-transparent backdrop-blur-sm"></div> */}
                      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-black/20 to-transparent"></div> 
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-2xl transform rotate-12 group-hover:rotate-[20deg] transition-transform duration-500 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-white text-3xl font-black">NEW</p>
                        <p className="text-white/90 text-xs font-bold">Article</p>
                      </div>
                    </div>

                    <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl shadow-2xl p-6 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-neutral-500 font-medium">Featured</p>
                          <p className="text-lg font-black text-neutral-900">Article</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="relative">
                {/* Side Accent Line */}
                <div className="absolute -left-12 top-0 bottom-0 w-2 bg-gradient-to-b from-primary-btn via-orange-500 to-pink-500 rounded-full hidden xl:block"></div>
                
                {/* Content Card */}
                <div className="relative bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-2xl p-8 md:p-12 lg:p-16 border border-white/50">
                  
                  {/* Quote Decoration */}
                  <div className="absolute top-8 left-8 text-9xl font-black text-primary-btn/5 select-none">"</div>
                  
                  {/* Blog Content */}
                  <div
                    className="prose prose-lg max-w-none text-neutral-700 leading-relaxed relative z-10
                    prose-headings:font-black prose-headings:text-neutral-900 prose-headings:messiri prose-headings:mb-6 prose-headings:mt-10
                    prose-h2:text-3xl prose-h2:bg-gradient-to-r prose-h2:from-primary-btn prose-h2:to-orange-600 prose-h2:bg-clip-text prose-h2:text-transparent
                    prose-h3:text-2xl prose-h3:text-neutral-800
                    prose-p:text-justify prose-p:mb-6 prose-p:text-base prose-p:leading-relaxed
                    prose-a:text-primary-btn prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-a:transition-all
                    prose-img:rounded-3xl prose-img:shadow-2xl prose-img:my-10 prose-img:border-8 prose-img:border-white
                    prose-strong:text-neutral-900 prose-strong:font-bold prose-strong:bg-yellow-100 prose-strong:px-1
                    prose-ul:my-6 prose-ol:my-6
                    prose-li:mb-3 prose-li:pl-2
                    prose-blockquote:border-l-4 prose-blockquote:border-primary-btn prose-blockquote:bg-orange-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:my-8
                    prose-code:bg-neutral-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-primary-btn prose-code:font-mono"
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  />

                  {/* Author Card */}
                  <div className="mt-16 pt-10 border-t-2 border-dashed border-neutral-200">
                    <div className="flex items-center gap-6 bg-gradient-to-r from-primary-btn/5 to-orange-500/5 rounded-3xl p-6">
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary-btn to-orange-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary-btn to-orange-500 flex items-center justify-center text-white text-3xl font-black shadow-xl border-4 border-white">
                          A
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-neutral-500 font-medium mb-1">Article by</p>
                        <p className="text-2xl font-black text-neutral-900 mb-1">Admin</p>
                        <p className="text-sm text-neutral-600">Content Creator & Storyteller</p>
                      </div>
                      <button className="px-6 py-3 bg-neutral-900 text-white rounded-full font-bold hover:bg-primary-btn transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hidden sm:block">
                        Follow
                      </button>
                    </div>
                  </div>

                  {/* Tags Cloud */}
                  <div className="mt-10 space-y-4">
                    <p className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Related Topics</p>
                    <div className="flex flex-wrap gap-3">
                      {['Trending', 'Featured', blog.category, 'Popular', 'Must Read'].map((tag, index) => (
                        <span
                          key={index}
                          className="group relative px-5 py-2.5 rounded-full font-bold text-sm cursor-pointer transition-all duration-300 hover:scale-110"
                          style={{
                            background: `linear-gradient(135deg, ${
                              index % 5 === 0 ? 'rgb(168, 85, 247), rgb(236, 72, 153)' :
                              index % 5 === 1 ? 'rgb(59, 130, 246), rgb(147, 51, 234)' :
                              index % 5 === 2 ? 'rgb(16, 185, 129), rgb(5, 150, 105)' :
                              index % 5 === 3 ? 'rgb(249, 115, 22), rgb(251, 146, 60)' :
                              'rgb(139, 92, 70), rgb(194, 65, 12)'
                            })`,
                            color: 'white',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                          }}
                        >
                          #{tag.toLowerCase().replace(' ', '')}
                          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Section */}
                  <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-gradient-to-r from-neutral-50 to-orange-50 rounded-3xl p-6">
                    <Link
                      to="/blog"
                      className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-full font-black shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <svg className="w-6 h-6 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      <span>All Articles</span>
                    </Link>
                    
                    <div className="flex gap-3">
                      {[
                        { icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z', gradient: 'from-blue-500 to-cyan-500' },
                        { icon: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z', gradient: 'from-green-500 to-emerald-500' },
                        { icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4', gradient: 'from-purple-500 to-pink-500' }
                      ].map((item, index) => (
                        <button
                          key={index}
                          className={`group p-4 bg-gradient-to-br ${item.gradient} text-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300`}
                        >
                          <svg className="w-5 h-5 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Enhanced Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                
                {/* Related Blogs - Premium Card */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-btn via-orange-500 to-pink-500 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl p-8 border border-white/50">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-3xl font-black text-neutral-900 messiri flex items-center gap-3">
                        <span className="w-2 h-10 bg-gradient-to-b from-primary-btn to-orange-500 rounded-full"></span>
                        Discover More
                      </h2>
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-btn to-orange-500 flex items-center justify-center shadow-lg animate-pulse">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Related Posts */}
                    <div className="space-y-6">
                      {relatedBlogs.length === 0 ? (
                        <div className="text-center py-16">
                          <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-inner">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <p className="text-neutral-500 font-medium">No related articles yet</p>
                        </div>
                      ) : (
                        relatedBlogs.slice(0, 6).map((relatedBlog, index) => (
                          <Link
                            to={`/blog-detail/${relatedBlog.slug}`}
                            key={relatedBlog.slug}
                            className="group/item block relative"
                          >
                            {/* Hover Background */}
                            <div className="absolute -inset-3 bg-gradient-to-r from-primary-btn/0 via-primary-btn/5 to-orange-500/5 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-all duration-300 blur-sm"></div>
                            
                            <div className="relative flex gap-5 p-4 rounded-2xl bg-white/50 group-hover/item:bg-white transition-all duration-300 shadow-md group-hover/item:shadow-xl">
                              {/* Number Badge */}
                              {/* <div className="flex-shrink-0 relative">
                                <div className="absolute -inset-1 bg-gradient-to-br from-primary-btn to-orange-500 rounded-2xl blur opacity-50"></div>
                                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-btn to-orange-500 flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover/item:scale-110 transition-transform duration-300">
                                  {index + 1}
                                </div>
                              </div> */}

                              {/* Image */}
                              <div className="flex-shrink-0 w-28 h-28 rounded-2xl overflow-hidden shadow-lg">
                                <img
                                  src={relatedBlog.imageUrl}
                                  alt={relatedBlog.title}
                                  className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                />
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <p className="text-xs text-neutral-500 mb-2 flex items-center gap-2 font-medium">
                                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-btn to-orange-500 rounded-full"></div>
                                  {formattedDate(relatedBlog.updatedAt)}
                                </p>
                                <h3 className="text-base font-bold text-neutral-900 line-clamp-2 leading-snug mb-3 group-hover/item:text-primary-btn transition-colors">
                                  {relatedBlog.title}
                                </h3>
                                <div className="flex items-center gap-2 text-primary-btn font-bold text-sm group-hover/item:gap-3 transition-all">
                                  <span>Read More</span>
                                  <svg className="w-4 h-4 group-hover/item:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* Newsletter - Ultra Premium */}
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600"></div>
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
                  </div>
                  
                  <div className="relative p-8 text-white">
                    {/* Icon */}
                    <div className="relative mb-6 inline-block">
                      <div className="absolute -inset-2 bg-white/20 rounded-3xl blur-lg animate-pulse"></div>
                      <div className="relative w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center transform -rotate-6 shadow-2xl border border-white/30">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-black mb-3 leading-tight">
                      Stay in the Loop!
                    </h3>
                    <p className="text-white/90 text-sm mb-8 leading-relaxed">
                      Join 10,000+ readers getting fresh insights delivered straight to their inbox every week.
                    </p>
                    
                    <div className="space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 rounded-2xl text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all font-medium shadow-xl"
                      />
                      <button className="w-full group px-6 py-4 bg-white text-neutral-900 font-black rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Subscribe Now
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-btn to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                      </button>
                      <p className="text-xs text-white/70 text-center">
                        🔒 We respect your privacy. Unsubscribe anytime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default BlogDetailPage;