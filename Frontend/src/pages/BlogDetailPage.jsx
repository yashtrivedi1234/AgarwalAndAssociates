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

  if (status === "loading")
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="relative">
          <div className="h-16 w-16 animate-spin rounded-full border-8 border-primary-btn/20 border-t-primary-btn sm:h-24 sm:w-24" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-10 w-10 animate-pulse rounded-full bg-gradient-to-br from-primary-btn to-orange-500 sm:h-16 sm:w-16" />
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-8 w-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <p className="text-lg font-semibold text-red-600">{error}</p>
        </div>
      </div>
    );

  if (!blog)
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
            <svg
              className="h-8 w-8 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01"
              />
            </svg>
          </div>
          <p className="text-lg font-semibold text-red-600">Blog Not Found!</p>
        </div>
      </div>
    );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-gray-200/50">
        <div
          className="h-full bg-gradient-to-r from-primary-btn via-orange-500 to-pink-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-full overflow-hidden md:block">
        <div className="animate-blob absolute left-10 top-20 h-72 w-72 rounded-full bg-purple-300 opacity-20 mix-blend-multiply blur-3xl filter lg:h-96 lg:w-96" />
        <div className="animate-blob animation-delay-2000 absolute right-10 top-40 h-72 w-72 rounded-full bg-yellow-300 opacity-20 mix-blend-multiply blur-3xl filter lg:h-96 lg:w-96" />
        <div className="animate-blob animation-delay-4000 absolute bottom-[-5rem] left-1/3 h-72 w-72 rounded-full bg-pink-300 opacity-20 mix-blend-multiply blur-3xl filter lg:h-96 lg:w-96" />
        <div className="animate-blob animation-delay-6000 absolute right-1/4 top-1/2 h-72 w-72 rounded-full bg-blue-300 opacity-20 mix-blend-multiply blur-3xl filter lg:h-96 lg:w-96" />
      </div>

      <div className="relative container mx-auto mt-4 px-4 py-8 sm:mt-6 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-16 lg:mb-24">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="order-2 space-y-6 sm:space-y-8 lg:order-1">
                <h1 className="messiri text-2xl font-black leading-tight sm:text-3xl lg:text-4xl xl:text-5xl">
                  <span className="animate-gradient bg-gradient-to-r from-neutral-900 via-primary-btn to-orange-600 bg-clip-text text-transparent">
                    {blog.title}
                  </span>
                </h1>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 animate-pulse rounded-full"
                      style={{
                        width: `${32 - i * 4}px`,
                        background:
                          "linear-gradient(to right, rgb(139,92,70), rgb(249,115,22))",
                        opacity: 1 - i * 0.15,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3 sm:gap-4 sm:gap-6">
                  {[
                    {
                      from: "from-blue-500",
                      to: "to-cyan-500",
                      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                      value: "5",
                      label: "min read",
                    },
                    {
                      from: "from-green-500",
                      to: "to-emerald-500",
                      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                      value: "1.2k",
                      label: "views",
                    },
                    {
                      from: "from-purple-500",
                      to: "to-pink-500",
                      star: true,
                      value: "4.8",
                      label: "rating",
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className={`relative group ${i === 2 ? "col-span-2 sm:col-span-1" : ""}`}
                    >
                      <div className="relative h-full rounded-2xl border border-white/50 bg-white/80 p-3 shadow-lg backdrop-blur-sm sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div
                            className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${stat.from} ${stat.to} shadow-lg sm:h-12 sm:w-12`}
                          >
                            {stat.star ? (
                              <svg
                                className="h-4 w-4 text-white sm:h-6 sm:w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ) : (
                              <svg
                                className="h-4 w-4 text-white sm:h-6 sm:w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d={stat.icon}
                                />
                              </svg>
                            )}
                          </div>
                          <div>
                            <p className="text-lg font-black text-neutral-900 sm:text-2xl">
                              {stat.value}
                            </p>
                            <p className="text-xs font-medium text-neutral-600">
                              {stat.label}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="group relative">
                  <div className="absolute -inset-4 animate-pulse rounded-[2rem] bg-gradient-to-r from-primary-btn via-orange-500 to-pink-500 opacity-25 blur-3xl transition-opacity duration-700 group-hover:opacity-40 sm:-inset-8 sm:rounded-[3rem]" />
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-[1.5rem] shadow-2xl transition-all duration-700 group-hover:scale-[1.02] sm:rounded-[2.5rem]">
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                        <img
                          src={blog.imageUrl}
                          alt={blog.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary-btn/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-gradient-to-tr from-black/20 to-transparent" />
                    </div>

                    <div className="absolute -bottom-4 -left-4 hidden -rotate-6 rounded-2xl bg-white p-3 shadow-2xl transition-transform duration-500 group-hover:rotate-0 sm:block lg:-bottom-6 lg:-left-6 lg:rounded-3xl lg:p-5">
                      <div className="flex items-center gap-2 lg:gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 lg:h-14 lg:w-14 lg:rounded-2xl">
                          <svg
                            className="h-5 w-5 text-white lg:h-7 lg:w-7"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-neutral-500">
                            Featured
                          </p>
                          <p className="text-sm font-black text-neutral-900 lg:text-base">
                            Article
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-12">
            <div className="lg:col-span-8">
              <article className="relative h-full">
              <div className="absolute -left-6 top-0 bottom-0 hidden w-1.5 rounded-full bg-gradient-to-b from-primary-btn via-orange-500 to-pink-500 xl:block" />

              <div className="relative flex h-full flex-col rounded-[1.5rem] border border-white/50 bg-white/70 p-5 shadow-2xl backdrop-blur-xl sm:rounded-[2rem] sm:p-8 md:p-12 lg:p-14">
                <div className="absolute left-6 top-6 select-none text-7xl font-black leading-none text-primary-btn/5 sm:text-9xl">
                  "
                </div>

                <div
                  className="prose prose-sm relative z-10 max-w-none leading-relaxed text-neutral-700 sm:prose-base lg:prose-lg
                    prose-headings:messiri prose-headings:mt-8 prose-headings:mb-4 prose-headings:font-black prose-headings:text-neutral-900
                    prose-h2:bg-gradient-to-r prose-h2:from-primary-btn prose-h2:to-orange-600 prose-h2:bg-clip-text prose-h2:text-xl prose-h2:text-transparent sm:prose-h2:text-2xl lg:prose-h2:text-3xl
                    prose-h3:text-lg prose-h3:text-neutral-800 sm:prose-h3:text-xl lg:prose-h3:text-2xl
                    prose-p:mb-4 prose-p:text-justify prose-p:leading-relaxed
                    prose-a:font-semibold prose-a:text-primary-btn prose-a:no-underline hover:prose-a:underline
                    prose-img:my-6 prose-img:rounded-2xl prose-img:border-4 prose-img:border-white prose-img:shadow-xl sm:prose-img:my-10 sm:prose-img:rounded-3xl sm:prose-img:border-8
                    prose-strong:bg-yellow-100 prose-strong:px-1 prose-strong:font-bold prose-strong:text-neutral-900
                    prose-ul:my-4 prose-ol:my-4 prose-li:mb-2
                    prose-blockquote:my-6 prose-blockquote:rounded-r-xl prose-blockquote:border-l-4 prose-blockquote:border-primary-btn prose-blockquote:bg-orange-50 prose-blockquote:px-4 prose-blockquote:py-3
                    prose-code:rounded prose-code:bg-neutral-100 prose-code:px-2 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:text-primary-btn"
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                />

                <div className="mt-8 flex justify-start rounded-2xl bg-gradient-to-r from-neutral-50 to-orange-50 p-4 sm:mt-12 sm:rounded-3xl sm:p-6">
                  <Link
                    to="/blog"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neutral-900 to-neutral-800 px-5 py-3 text-sm font-black text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:gap-3 sm:px-8 sm:py-4 sm:text-base"
                  >
                    <svg
                      className="h-5 w-5 transition-transform group-hover:-translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    All Articles
                  </Link>
                </div>
              </div>
              </article>
            </div>

            <div className="lg:col-span-4 lg:h-full">
              <div className="space-y-6 sm:space-y-8 lg:flex lg:h-full lg:flex-col">
                <div className="group relative">
                  <div className="absolute -inset-1 rounded-[1.5rem] bg-gradient-to-r from-primary-btn via-orange-500 to-pink-500 opacity-25 blur-xl transition-opacity group-hover:opacity-40 sm:rounded-[2rem]" />
                  <div className="relative rounded-[1.5rem] border border-white/50 bg-white/80 p-5 shadow-2xl backdrop-blur-xl sm:rounded-[2rem] sm:p-8">
                    <div className="mb-6 flex items-center justify-between">
                      <h2 className="messiri flex items-center gap-2 text-xl font-black text-neutral-900 sm:gap-3 sm:text-2xl">
                        <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-primary-btn to-orange-500" />
                        Discover More
                      </h2>
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-btn to-orange-500 shadow-lg">
                        <svg
                          className="h-5 w-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {relatedBlogs.length === 0 ? (
                        <div className="py-10 text-center">
                          <p className="text-sm font-medium text-neutral-500">
                            No related articles yet
                          </p>
                        </div>
                      ) : (
                        relatedBlogs.slice(0, 6).map((rb) => (
                          <Link
                            to={`/blog-detail/${rb.slug}`}
                            key={rb.slug}
                            className="group/item block relative"
                          >
                            <div className="flex gap-3 rounded-xl bg-white/50 p-3 shadow-md transition-all duration-300 group-hover/item:bg-white group-hover/item:shadow-xl sm:gap-4 sm:rounded-2xl">
                              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl shadow-md sm:h-24 sm:w-24 sm:rounded-2xl">
                                <img
                                  src={rb.imageUrl}
                                  alt={rb.title}
                                  className="h-full w-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-neutral-500">
                                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-primary-btn to-orange-500" />
                                  {formattedDate(rb.updatedAt)}
                                </p>
                                <h3 className="mb-2 line-clamp-2 text-sm font-bold leading-snug text-neutral-900 transition-colors group-hover/item:text-primary-btn">
                                  {rb.title}
                                </h3>
                                <div className="flex items-center gap-1.5 text-xs font-bold text-primary-btn sm:text-sm">
                                  <span>Read More</span>
                                  <svg
                                    className="h-3 w-3 transition-transform group-hover/item:translate-x-1 sm:h-4 sm:w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2.5}
                                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
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

                <div className="relative overflow-hidden rounded-[1.5rem] shadow-2xl sm:rounded-[2rem] lg:mt-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black" />
                  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />
                  <div className="relative p-5 text-white sm:p-8">
                    <div className="relative mb-4 inline-block sm:mb-6">
                      <div className="absolute -inset-2 animate-pulse rounded-2xl bg-white/20 blur-lg" />
                      <div className="relative flex h-14 w-14 -rotate-6 items-center justify-center rounded-2xl border border-white/30 bg-white/20 shadow-2xl backdrop-blur-sm sm:h-20 sm:w-20 sm:rounded-3xl">
                        <svg
                          className="h-7 w-7 text-white sm:h-10 sm:w-10"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-2 text-2xl font-black leading-tight sm:text-3xl">
                      Stay in the Loop!
                    </h3>
                    <p className="mb-6 text-xs leading-relaxed text-white/80 sm:text-sm">
                      Join 10,000+ readers getting fresh insights delivered
                      straight to their inbox every week.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full rounded-xl bg-white px-4 py-3 text-sm font-medium text-neutral-900 shadow-xl transition-all placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-white/50 sm:rounded-2xl sm:px-6 sm:py-4 sm:text-base"
                      />
                      <button className="group relative w-full overflow-hidden rounded-xl bg-white px-6 py-3 text-sm font-black text-neutral-900 shadow-2xl transition-all duration-300 hover:scale-105 sm:rounded-2xl sm:py-4 sm:text-base">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Subscribe Now
                          <svg
                            className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </span>
                        <div className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-primary-btn to-orange-500 transition-transform group-hover:scale-x-100" />
                      </button>
                      <p className="text-center text-xs text-white/60">
                        We respect your privacy. Unsubscribe anytime.
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
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
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
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
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
