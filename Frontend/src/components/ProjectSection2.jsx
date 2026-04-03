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
    <div className="relative h-screen my-16 overflow-y-scroll bg-white" id="projects">
      {/* Project List */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold lg:mb-12 mb-6 text-center">Featured Projects</h2>
        <div className="space-y-10 max-w-4xl mx-auto">
          {projectData.map((project) => (
            <Link
              to={`/project/${project.slug}`}
              key={project._id}
              className="md:grid grid-cols-12 gap-6 cursor-pointer"
            >
              {/* Project Name Column — col-span-4 (was col-span-3) */}
              <div className="hidden md:col-span-4 col-span-12 lg:flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <img
                    src={project.otherImages[0] || project.mainImageUrl}
                    alt={`${project.title} logo`}
                    className="lg:w-12 border border-black/20 w-96 h-96 lg:h-12 mr-4"
                  />
                  <div className="hover:underline underline-offset-2">
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.location}</p>
                  </div>
                </div>
              </div>

              {/* Image Column — col-span-8 (was col-span-9) */}
              <div className="md:col-span-8 overflow-hidden">
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
    </div>
  );
}