import { useState } from "react";
import { Clock, Tag, ArrowRight, Heart, MessageSquare, Share2, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import blogPosts from '../Data/BlogData'
import {useDispatch, useSelector} from 'react-redux'
import { fetchBlogData } from "../redux/dataSlice";
import { useEffect } from "react";
export default function BlogPage() {
  const [hoveredId, setHoveredId] = useState(null);

const dispatch = useDispatch()
const {blogData,error, status} = useSelector((state)=>state.data)
useEffect(()=>{
dispatch(fetchBlogData())
},[dispatch])

  console.log(blogData)

if(status=='loading'){
  return(
    <>
    <Breadcrumb 
        title="Latest Blogs" 
        items={[
          { label: 'Home', link: '/' },
          { label: 'Blog', link: '/blog' }
        ]}
      />
    <div className='text-xl h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2'>Loading..</div>
  </>
  )
}
if(blogData.length == 0){
  return(
    <>
    <Breadcrumb 
        title="Latest Blogs" 
        items={[
          { label: 'Home', link: '/' },
          { label: 'Blog', link: '/blog' }
        ]}
      />
    <div className='text-red-600 text-lg h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2'>Blog Data Not Found!</div>
  </>
  )
}
if(error){
  return(
    <>
    <Breadcrumb 
        title="Latest Blogs" 
        items={[
          { label: 'Home', link: '/' },
          { label: 'Blog', link: '/blog' }
        ]}
      />
    <div className='text-red-600 text-lg h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2'>{error}</div>
    </>
  )
}
  const formattedDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
    <Breadcrumb 
  title="Latest Insides" 
  items={[
    { name: "Blogs", path: "/blog" },
  ]}
//   bgImage="/path-to-your-image.jpg"
/>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      {/* Categories */}
      {/* <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="flex flex-wrap gap-3">
          <button className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-medium hover:bg-indigo-200 transition duration-300">
            All
          </button>
          {categories.map(category => (
            <button 
              key={category} 
              className={`text-white px-4 py-2 rounded-full font-medium transition duration-300 ${getCategoryColor(category)}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div> */}
      
      {/* Blog posts */}
      {/* <h2 className="text-3xl font-bold mb-8 text-gray-800">Latest Articles</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(blogData) && blogData.length > 0 ? (
                      blogData.map(post => (
                    <div key={post.id} className="px-3">
                      <div className="bg-white flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
                        {/* Image section */}
                        <div className=" overflow-hidden">
                          <img 
                            src={post.imageUrl} 
                            alt={post.title} 
                            className="w-full h-[15rem] object-cover"
                          />
                        </div>
                        
                        {/* Content section */}
                        <div className="p-4 flex flex-col flex-grow">
                          {/* Date and Category row */}
                          <div className="flex justify-between items-center mb-3 text-xs">
                            <div className="flex items-center text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                            { formattedDate(post.updatedAt)}
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
              new DOMParser().parseFromString(post.description, "text/html").body
                .textContent
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
                  ))):(
                      <p>No blogs available.</p>
                    )}
      </div>
      
      {/* Load more button */}
      {/* <div className="mt-12 text-center">
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg">
          Load More Articles
        </button>
      </div> */}
    </div>
    </>
  );
}