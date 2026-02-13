import { useState } from "react";
import Slider from "react-slick";
import { Clock, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/dataSlice";
import { useEffect } from "react";

export default function BlogPage() {
  const dispatch = useDispatch();
  const { blogData, error, status } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  const formattedDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  if (status == "loading") {
    return (
      <div className="flex justify-center items-center h-[20rem]">
        <p className="text-xl font-medium">Loading..</p>
      </div>
    );
  }
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto sm:px-6 lg:px-6 lg:py-12 py-8 md:py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black sm:text-4xl mb-2">
            Recent Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover expert thoughts and project highlights on our blog
          </p>
        </div>

        <Slider {...settings}>
          {blogData.map((post) => (
            <div key={post.id} className="px-2">
              <div className="bg-white  flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
                {/* Image section */}
                <div className=" overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-[18rem] object-cover"
                  />
                </div>

                {/* Content section */}
                <div className="p-4 flex flex-col flex-grow">
                  {/* Date and Category row */}
                  <div className="flex justify-between items-center mb-3 text-xs">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {formattedDate(post.updatedAt)}
                    </div>
                    <div className="inline-flex items-center bg-black px-2 py-1 rounded-sm text-xs font-medium text-white">
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg text-black mb-2 line-clamp-1">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {
                      new DOMParser().parseFromString(
                        post.description,
                        "text/html"
                      ).body.textContent
                    }
                  </p>

                  {/* Read More button */}
                  <div className="mt-auto">
                    <Link
                      to={`/blog-detail/${post.slug}`}
                      className="inline-flex items-center text-sm font-medium text-black hover:text-gray-600 transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
