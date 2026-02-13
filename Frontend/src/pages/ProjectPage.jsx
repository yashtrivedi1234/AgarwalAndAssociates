import { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink, Camera, Tag, Calendar } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { Link, useSearchParams } from 'react-router-dom';
import { FaLocationPin } from 'react-icons/fa6';
import projects from '../Data/ProjectData'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectData } from '../redux/dataSlice';
export default function ProjectPage() {
const dispatch = useDispatch()
   const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

const {projectData , error , state} = useSelector((state)=>state.data)

useEffect(()=>{
  dispatch(fetchProjectData())
},[dispatch])
const formattedDate = (date) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'Residential', name: 'Residential' },
    { id: 'Commercial', name: 'Commercial' },
    { id: 'Institutional', name: 'Institutional' },
    { id: 'Urban-Planning', name: 'Urban Planning' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectData 
    : projectData.filter(project => project.category === activeFilter);

console.log(filteredProjects)
    useEffect(()=>{
  const type = searchParams.get("type");
if(type){
  setActiveFilter(type)
}
else{
  setActiveFilter('all')
}
    },[searchParams])
    

  return (
    <>
      <Breadcrumb 
  title="Latest Projects" 
  items={[
    { name: "Project", path: "/projects" },
  ]}
  />
   
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 border border-gray-100 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-red-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {filteredProjects?.length > 0 ? filteredProjects
         .filter(project =>
    activeFilter === 'all' ? true : project.category === activeFilter
  )
         .map(project => (
          <Link
          to={`/project/${project.slug}`}  
             key={project._id}
             className="group relative bg-white border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
             onMouseEnter={() => setHoveredProject(project._id)}
             onMouseLeave={() => setHoveredProject(null)}
           >
             {/* Card content wrapper */}
             <div className="relative h-96">
               {/* Image */}
               <img 
                 src={project.mainImageUrl} 
                 alt={project.title} 
                 className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110" 
               />
               
               {/* Gradient overlay that darkens on hover */}
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-30 group-hover:opacity-80 transition-all duration-500"></div>
               
               {/* Top accent bar */}
               <div className="absolute top-0 left-0 w-full h-1 bg-red-500 transform origin-left transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100"></div>
               
               {/* Category Badge - Always visible */}
               <div className="absolute top-4 left-4 z-20">
                 <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs font-medium flex items-center">
                   <Tag size={12} className="mr-1.5" /> {project.category}
                 </span>
               </div>
               
               {/* Content that slides up on hover */}
               <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-36 group-hover:translate-y-0 transition-all duration-500 ease-out z-20">
                 {/* Project Title */}
                 <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                 
                 {/* Project Description - Appears on hover */}
                 <p className="text-white/90 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                   {project.description || "Modern architectural design embracing functionality and aesthetics for an enhanced living experience."}
                 </p>
                 
                 {/* Project Details */}
                 <div className="flex flex-wrap gap-2 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                   <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs flex items-center">
                     <Calendar size={12} className="mr-1.5" /> {formattedDate(project.updatedAt)}
                   </span>
                   <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs flex items-center">
                     <FaLocationPin size={12} className="mr-1.5"/> {project.location}
                   </span>
                 </div>
                 
                 {/* Action buttons */}
                 <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                   <Link 
                     to={`/project/${project.slug}`} 
                     className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-300 hover:pl-5"
                   >
                     View Details
                     <ArrowRight size={16} className="ml-2 transition-all duration-300" />
                   </Link>
                   
                   <Link 
                     to={`/project/${project.slug}`} 
                     className="bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white p-2 rounded-full transition-all duration-300"
                   >
                     <ExternalLink size={18} />
                   </Link>
                 </div>
               </div>
             </div>
           </Link>
         )):(<div className='text-red-500 text-center w-full'>Project Not Found</div>)}
     </div>
     

     
      </div>
    </section>
    </>
  );
}