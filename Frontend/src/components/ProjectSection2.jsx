import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProjectData } from "../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ProjectSection2() {
  const [selectedProject, setSelectedProject] = useState(null);
  const dispatch = useDispatch()
const { projectData, error, status } = useSelector((state) => state.data);

console.log(projectData)
useEffect(()=>{
  dispatch(fetchProjectData())
},[dispatch])

  if (!projectData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-medium">Loading...</p>
      </div>
    );
  }

  if(error){
    return(
     <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-medium">Project Not Found</p>
      </div>
  )}

  if(status == "loading"){
    return(
     <div className="h-[20rem] py-10">
      <h2 className="text-3xl md:text-4xl font-bold  text-center">Featured Projects</h2>
        <p className="text-xl font-medium text-center mt-2">Loading..</p>
      </div>
  )}



  return (
    <div className="relative h-screen my-16 overflow-y-scroll bg-white">
      {/* Project List */}
      <div className="container mx-auto  px-4">
        <h2 className="text-3xl md:text-4xl font-bold lg:mb-12 mb-6 text-center">Featured Projects</h2>
        <div className="space-y-10 max-w-4xl mx-auto">
          {projectData.map((project) => (
            <Link
            to={`/project/${project.slug}`}
              key={project._id}
              className="md:grid grid-cols-12 gap-6 cursor-pointer "
              >
              <div className="hidden  md:col-span-3 col-span-12 lg:flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <img src={project.otherImages[0] || project.mainImageUrl} alt={`${project.title} logo`} className="lg:w-12 border border-black/20 w-96 h-96 lg:h-12 mr-4" />
                  <div className="hover:underline underline-offset-2">
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.location}</p>
                  </div>
                </div>
              </div>
              <div className=" md:col-span-9 overflow-hidden">
                <div className="lg:hidden block my-4">
                  <h3 className="font-bold text-xl">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.location}</p>
                </div>
                <img
                  src={project.mainImageUrl}
                  alt={project.title}
                  className="w-full mb-4 lg:mb-0 border border-black/20 h-80 object-cover transition-transform duration-700 hover:scale-90"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Modal */}
      {/* {selectedProject && (
        <div className="fixed inset-0 bg-white z-50 overflow-hidden">
          <div className="flex w-full h-full">
           
            <div className="min-w-80 w-80 p-8 border-r overflow-y-auto">
              <button
                onClick={closeProject}
                className="absolute top-6 right-6 bg-black text-white p-2 rounded-full z-50"
                aria-label="Close project details"
              >
                <X size={24} />
              </button>
              <img
                src={selectedProject.logo}
                alt={`${selectedProject.name} logo`}
                className="w-16 h-16 mb-4"
              />
              <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
              <p className="text-sm text-gray-600 mb-1">{selectedProject.location}</p>
              <p className="text-sm text-gray-600 mb-4">{selectedProject.year}</p>
              <div className="text-sm space-y-2">
                <div>
                  <p className="text-gray-500">CLIENT</p>
                  <p>{selectedProject.client}</p>
                </div>
                <div>
                  <p className="text-gray-500">TYPOLOGY</p>
                  <p>{selectedProject.typology}</p>
                </div>
                <div>
                  <p className="text-gray-500">SIZE</p>
                  <p>{selectedProject.size}</p>
                </div>
                <div>
                  <p className="text-gray-500">STATUS</p>
                  <p>{selectedProject.status}</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">SHARE</p>
                <div className="flex gap-2">
                  <Instagram size={16} />
                  <Facebook size={16} />
                  <Linkedin size={16} />
                  <Twitter size={16} />
                </div>
              </div>
            </div>

          
            <div className="relative flex-1 overflow-hidden">
              <div className="w-full h-full">
                <img
                  src={slides[currentImageIndex]}
                  alt={`Slide ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

             
              {currentImageIndex === 1 && (
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/80">
                  <p className="text-lg mb-2">{selectedProject.description}</p>
                  <p className="text-lg">{selectedProject.additionalInfo}</p>
                </div>
              )}

              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
