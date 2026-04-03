import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/dataSlice";

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

  useEffect(() => {
    if (!blogData.length) dispatch(fetchBlogData());
  }, [dispatch, blogData.length]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress((totalScroll / windowHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blog = blogData.find((item) => item.slug === slug);
  const relatedBlogs = blogData.filter((item) => item.slug !== blog?.slug);

  /* ── Loading ── */
  if (status === "loading")
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="relative">
          <div className="w-16 h-16 sm:w-24 sm:h-24 border-8 border-primary-btn/20 border-t-primary-btn rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-btn to-orange-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    );

  /* ── Error ── */
  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <p className="text-red-600 text-lg font-semibold">{error}</p>
        </div>
      </div>
    );

  /* ── Not Found ── */
  if (!blog)
    return (
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01" />
            </svg>
          </div>
          <p className="text-red-600 text-lg font-semibold">Blog Not Found!</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-x-hidden">

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary-btn via-orange-500 to-pink-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated Background Blobs – hidden on small screens for perf */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-20 left-10 w-72 lg:w-96 h-72 lg:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 lg:w-96 h-72 lg:h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-72 lg:w-96 h-72 lg:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 right-1/4 w-72 lg:w-96 h-72 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 mt-4 sm:mt-6">
        <div className="max-w-7xl mx-auto">

          {/* ── Hero Section ── */}
          <div className="mb-10 sm:mb-16 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Left – Content */}
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                {/* Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight messiri">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-primary-btn to-orange-600 animate-gradient">
                    {blog.title}
                  </span>
                </h1>

                {/* Decorative Separator */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded-full animate-pulse"
                      style={{
                        width: `${32 - i * 4}px`,
                        background: `linear-gradient(to right, rgb(139,92,70), rgb(249,115,22))`,
                        opacity: 1 - i * 0.15,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 sm:gap-6 pt-2">
                  {[
                    {
                      from: "from-blue-500", to: "to-cyan-500",
                      hoverFrom: "from-blue-600", hoverTo: "to-cyan-600",
                      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                      value: "5", label: "min read",
                    },
                    {
                      from: "from-green-500", to: "to-emerald-500",
                      hoverFrom: "from-green-600", hoverTo: "to-emerald-600",
                      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                      value: "1.2k", label: "views",
                    },
                    {
                      from: "from-purple-500", to: "to-pink-500",
                      hoverFrom: "from-purple-600", hoverTo: "to-pink-600",
                      icon: null, star: true,
                      value: "4.8", label: "rating",
                    },
                  ].map((stat, i) => (
                    <div key={i} className={`relative group ${i === 2 ? "col-span-2 sm:col-span-1" : ""}`}>
                      <div className={`absolute -inset-1 bg-gradient-to-r ${stat.hoverFrom} ${stat.hoverTo} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity`} />
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-lg border border-white/50 h-full">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stat.from} ${stat.to} flex items-center justify-center shadow-lg flex-shrink-0`}>
                            {stat.star ? (
                              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                              </svg>
                            )}
                          </div>
                          <div>
                            <p className="text-lg sm:text-2xl font-black text-neutral-900">{stat.value}</p>
                            <p className="text-xs text-neutral-600 font-medium">{stat.label}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right – Image */}
              <div className="order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-primary-btn via-orange-500 to-pink-500 rounded-[2rem] sm:rounded-[3rem] blur-3xl opacity-25 group-hover:opacity-40 transition-opacity duration-700 animate-pulse" />
                  <div className="relative">
                    <div className="relative rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700">
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                        <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary-btn/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-black/20 to-transparent" />
                    </div>

                    {/* Floating NEW badge – hidden on xs */}
                    <div className="hidden sm:flex absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-20 h-20 lg:w-28 lg:h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl lg:rounded-3xl shadow-2xl transform rotate-12 group-hover:rotate-[20deg] transition-transform duration-500 items-center justify-center">
                      <div className="text-center">
                        <p className="text-white text-lg lg:text-2xl font-black">NEW</p>
                        <p className="text-white/90 text-[10px] lg:text-xs font-bold">Article</p>
                      </div>
                    </div>

                    {/* Floating featured badge – hidden on xs */}
                    <div className="hidden sm:block absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-3 lg:p-5 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                      <div className="flex items-center gap-2 lg:gap-4">
                        <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                          <svg className="w-5 h-5 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 font-medium">Featured</p>
                          <p className="text-sm lg:text-base font-black text-neutral-900">Article</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Content Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="relative">
                {/* Side accent – desktop only */}
                <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary-btn via-orange-500 to-pink-500 rounded-full hidden xl:block" />

                <div className="relative bg-white/70 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl p-5 sm:p-8 md:p-12 lg:p-14 border border-white/50">
                  <div className="absolute top-6 left-6 text-7xl sm:text-9xl font-black text-primary-btn/5 select-none leading-none">"</div>

                  {/* Blog Body */}
                  <div
                    className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-neutral-700 leading-relaxed relative z-10
                      prose-headings:font-black prose-headings:text-neutral-900 prose-headings:messiri prose-headings:mb-4 prose-headings:mt-8
                      prose-h2:text-xl sm:prose-h2:text-2xl lg:prose-h2:text-3xl prose-h2:bg-gradient-to-r prose-h2:from-primary-btn prose-h2:to-orange-600 prose-h2:bg-clip-text prose-h2:text-transparent
                      prose-h3:text-lg sm:prose-h3:text-xl lg:prose-h3:text-2xl prose-h3:text-neutral-800
                      prose-p:text-justify prose-p:mb-4 prose-p:leading-relaxed
                      prose-a:text-primary-btn prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                      prose-img:rounded-2xl sm:prose-img:rounded-3xl prose-img:shadow-xl prose-img:my-6 sm:prose-img:my-10 prose-img:border-4 sm:prose-img:border-8 prose-img:border-white
                      prose-strong:text-neutral-900 prose-strong:font-bold prose-strong:bg-yellow-100 prose-strong:px-1
                      prose-ul:my-4 prose-ol:my-4 prose-li:mb-2
                      prose-blockquote:border-l-4 prose-blockquote:border-primary-btn prose-blockquote:bg-orange-50 prose-blockquote:py-3 prose-blockquote:px-4 prose-blockquote:rounded-r-xl prose-blockquote:my-6
                      prose-code:bg-neutral-100 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-primary-btn prose-code:font-mono prose-code:text-sm"
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  />

                  {/* Author Card */}
                  <div className="mt-10 sm:mt-16 pt-8 border-t-2 border-dashed border-neutral-200">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-gradient-to-r from-primary-btn/5 to-orange-500/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary-btn to-red-500 rounded-full blur-lg opacity-50 animate-pulse" />
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary-btn to-red-500 flex items-center justify-center text-white text-2xl sm:text-3xl font-black shadow-xl border-4 border-white">
                          A
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-neutral-500 font-medium mb-0.5">Article by</p>
                        <p className="text-xl sm:text-2xl font-black text-neutral-900 mb-0.5">Admin</p>
                        <p className="text-xs sm:text-sm text-neutral-600">Content Creator & Storyteller</p>
                      </div>
                      <button className="px-5 py-2.5 bg-neutral-900 text-white rounded-full font-bold text-sm hover:bg-primary-btn transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 self-start sm:self-auto">
                        Follow
                      </button>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-8 space-y-3">
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Related Topics</p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {["Trending", "Featured", blog.category, "Popular", "Must Read"].map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm cursor-pointer transition-all duration-300 hover:scale-105 select-none"
                          style={{
                            background: `linear-gradient(135deg, ${
                              index % 5 === 0 ? "rgb(168,85,247),rgb(236,72,153)" :
                              index % 5 === 1 ? "rgb(59,130,246),rgb(147,51,234)" :
                              index % 5 === 2 ? "rgb(16,185,129),rgb(5,150,105)" :
                              index % 5 === 3 ? "rgb(249,115,22),rgb(251,146,60)" :
                                               "rgb(139,92,70),rgb(194,65,12)"
                            })`,
                            color: "white",
                          }}
                        >
                          #{tag.toLowerCase().replace(" ", "")}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 bg-gradient-to-r from-neutral-50 to-orange-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
                    <Link
                      to="/blog"
                      className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-full font-black text-sm sm:text-base shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      All Articles
                    </Link>
                    <div className="flex gap-2 sm:gap-3 justify-end">
                      {[
                        { icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z", gradient: "from-blue-500 to-cyan-500" },
                        { icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z", gradient: "from-green-500 to-emerald-500" },
                        { icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4", gradient: "from-purple-500 to-pink-500" },
                      ].map((item, i) => (
                        <button
                          key={i}
                          className={`group p-3 sm:p-4 bg-gradient-to-br ${item.gradient} text-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300`}
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* ── Sidebar ── */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-6 sm:space-y-8">

                {/* Related Articles */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-btn via-orange-500 to-pink-500 rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-25 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl p-5 sm:p-8 border border-white/50">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl sm:text-2xl font-black text-neutral-900 messiri flex items-center gap-2 sm:gap-3">
                        <span className="w-1.5 h-8 bg-gradient-to-b from-primary-btn to-orange-500 rounded-full" />
                        Discover More
                      </h2>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-btn to-orange-500 flex items-center justify-center shadow-lg animate-pulse flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {relatedBlogs.length === 0 ? (
                        <div className="text-center py-10">
                          <p className="text-neutral-500 font-medium text-sm">No related articles yet</p>
                        </div>
                      ) : (
                        relatedBlogs.slice(0, 6).map((rb) => (
                          <Link
                            to={`/blog-detail/${rb.slug}`}
                            key={rb.slug}
                            className="group/item block relative"
                          >
                            <div className="flex gap-3 sm:gap-4 p-3 rounded-xl sm:rounded-2xl bg-white/50 group-hover/item:bg-white transition-all duration-300 shadow-md group-hover/item:shadow-xl">
                              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl overflow-hidden shadow-md">
                                <img
                                  src={rb.imageUrl}
                                  alt={rb.title}
                                  className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs text-neutral-500 mb-1.5 flex items-center gap-1.5 font-medium">
                                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary-btn to-orange-500 rounded-full flex-shrink-0" />
                                  {formattedDate(rb.updatedAt)}
                                </p>
                                <h3 className="text-sm font-bold text-neutral-900 line-clamp-2 leading-snug mb-2 group-hover/item:text-primary-btn transition-colors">
                                  {rb.title}
                                </h3>
                                <div className="flex items-center gap-1.5 text-primary-btn font-bold text-xs sm:text-sm">
                                  <span>Read More</span>
                                  <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover/item:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                {/* Newsletter */}
                <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black" />
                  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />
                  <div className="relative p-5 sm:p-8 text-white">
                    <div className="relative mb-4 sm:mb-6 inline-block">
                      <div className="absolute -inset-2 bg-white/20 rounded-2xl blur-lg animate-pulse" />
                      <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center transform -rotate-6 shadow-2xl border border-white/30">
                        <svg className="w-7 h-7 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black mb-2 leading-tight">Stay in the Loop!</h3>
                    <p className="text-white/80 text-xs sm:text-sm mb-6 leading-relaxed">
                      Join 10,000+ readers getting fresh insights delivered straight to their inbox every week.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all font-medium shadow-xl text-sm sm:text-base"
                      />
                      <button className="w-full group px-6 py-3 sm:py-4 bg-white text-neutral-900 font-black rounded-xl sm:rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden text-sm sm:text-base">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Subscribe Now
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-btn to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                      </button>
                      <p className="text-xs text-white/60 text-center">We respect your privacy. Unsubscribe anytime.</p>
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
          0%, 100% { transform: translate(0,0) scale(1); }
          25% { transform: translate(20px,-50px) scale(1.1); }
          50% { transform: translate(-20px,20px) scale(0.9); }
          75% { transform: translate(50px,50px) scale(1.05); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-6000 { animation-delay: 6s; }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient { background-size: 200% auto; animation: gradient 3s ease infinite; }
      `}</style>
    </div>
  );
};

export default BlogDetailPage;