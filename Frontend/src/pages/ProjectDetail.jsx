import { useState, useEffect } from 'react';
import { MapPin, Calendar, ChevronLeft, ArrowRight, Eye, Award, Users, Target, Lightbulb, TrendingUp, Download, Share2, ExternalLink, Clock, Ruler } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import projectData from '../Data/ProjectData';
import Breadcrumb from '../components/Breadcrumb';
import InquiryModal from '../components/InquiryModal';
import { fetchProjectData } from '../redux/dataSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { projectData, error, status } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchProjectData());
  }, [dispatch]);

  useEffect(() => {
    const currentProject = projectData.find(project => project.slug === slug);
    setProject(currentProject);
    setActiveImageIndex(0);
    
    if (currentProject) {
      const otherProjects = projectData
        .filter(item => item.id !== currentProject.id && item.category === currentProject.category)
        .slice(0, 3);
        
      if (otherProjects.length < 3) {
        const moreProjects = projectData
          .filter(item => item.id !== currentProject.id && item.category !== currentProject.category)
          .slice(0, 3 - otherProjects.length);
          
        setRelatedProjects([...otherProjects, ...moreProjects]);
      } else {
        setRelatedProjects(otherProjects);
      }
    }
  }, [slug, projectData]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin"></div>
        </div>
        <p className="mt-6 text-xl font-semibold text-gray-700">Loading Project...</p>
      </div>
    );
  }

  const projectDetails = project.details || {
    client: 'Confidential Client',
    size: '25,000 sq ft',
    duration: '18 months',
    services: ['Architecture', 'Interior Design', 'Project Management', 'Sustainability Consulting'],
    challenge: 'Creating a modern space that harmonizes with the environment while meeting stringent sustainability standards and client requirements for flexibility and innovation.',
    solution: 'Our team developed an integrated approach combining biophilic design principles, cutting-edge sustainable technologies, and modular spatial planning to create a dynamic, adaptable environment.',
    result: 'Achieved LEED Platinum certification, 40% energy reduction, and exceeded client expectations for both functionality and aesthetic appeal. The project has become a benchmark in sustainable architecture.',
    team: '15 Professionals',
    awards: ['Best Sustainable Design 2024', 'Architecture Excellence Award'],
    mainImageUrl: project.mainImageUrl || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
    otherImages: project.otherImages && project.otherImages.length > 0 ? project.otherImages : [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop'
    ]
  };

  const formattedDate = (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const nextImage = () => {
    setActiveImageIndex((prev) => 
      prev === projectDetails.otherImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? projectDetails.otherImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <InquiryModal isOpen={modalOpen} closeModal={() => setModalOpen(false)} />
      
      <Breadcrumb 
        title="Project Detail" 
        items={[
          { name: "Projects", path: "/Projects" },
          { name: "Project Detail", path: `/project/${slug}` },
        ]}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20 hover:border-red-500 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white/5 mb-12 group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-2 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded">
                  {project.category}
                </span>
                <span className="text-6xl font-bold text-white/10">
                  #{typeof project.id === 'number' ? project.id.toString().padStart(2, '0') : '00'}
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-medium">{project.location}</span>
                </div>
                <div className="w-px h-5 bg-gray-600"></div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-medium">{formattedDate(project.updatedAt)}</span>
                </div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setModalOpen(true)}
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wide rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 flex items-center gap-3"
                >
                  Request Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border-2 border-white/20 hover:border-white hover:bg-white/10 text-white font-bold uppercase tracking-wide rounded-lg transition-all duration-300 flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  Download
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={projectDetails.mainImageUrl} 
                  alt={project.title}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-6 left-6 px-6 py-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl">
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">Client</p>
                  <p className="text-lg font-bold text-gray-900">{projectDetails.client}</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-red-600/10 rounded-2xl -z-10 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-red-600/10 rounded-2xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gray-900 border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center bg-red-600/20 border-2 border-red-600 rounded-lg">
                <Ruler className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Size</p>
                <p className="text-xl font-bold text-white">{projectDetails.size}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center bg-red-600/20 border-2 border-red-600 rounded-lg">
                <Clock className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Duration</p>
                <p className="text-xl font-bold text-white">{projectDetails.duration}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center bg-red-600/20 border-2 border-red-600 rounded-lg">
                <Users className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Team</p>
                <p className="text-xl font-bold text-white">{projectDetails.team}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center bg-red-600/20 border-2 border-red-600 rounded-lg">
                <Award className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Awards</p>
                <p className="text-xl font-bold text-white">{projectDetails.awards?.length || 0}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 animate-fade-in">Visual Journey</h2>
          <div className="flex items-center gap-4 animate-slide-in-right">
            <button 
              onClick={prevImage}
              className="w-12 h-12 flex items-center justify-center bg-gray-900 hover:bg-red-600 text-white rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-lg font-bold text-gray-900 min-w-[80px] text-center">
              {activeImageIndex + 1}/{projectDetails.otherImages.length}
            </span>
            <button 
              onClick={nextImage}
              className="w-12 h-12 flex items-center justify-center bg-gray-900 hover:bg-red-600 text-white rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 group">
          <div className="relative w-full h-[600px]">
            {projectDetails.otherImages.map((image, index) => (
              <img 
                key={index}
                src={image || projectDetails.mainImageUrl}
                alt={`Project view ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  index === activeImageIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              />
            ))}
          </div>
          
          {/* Hover Overlay with Info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider mb-2 opacity-80">Image {activeImageIndex + 1} of {projectDetails.otherImages.length}</p>
              <p className="text-2xl font-bold">{project.title}</p>
            </div>
          </div>

          {/* Navigation Arrows on Image */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/90 hover:bg-red-600 text-gray-900 hover:text-white rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/90 hover:bg-red-600 text-gray-900 hover:text-white rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-xl"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Progress Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {projectDetails.otherImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeImageIndex 
                    ? 'w-8 h-2 bg-red-600' 
                    : 'w-2 h-2 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>

        {projectDetails.otherImages.length > 1 && (
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {projectDetails.otherImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-500 group/thumb ${
                  activeImageIndex === index 
                    ? 'ring-4 ring-red-600 shadow-2xl scale-105' 
                    : 'ring-2 ring-gray-200 hover:ring-red-400 hover:scale-105'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'slideUp 0.6s ease-out both'
                }}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`} 
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    activeImageIndex === index ? 'scale-100' : 'scale-100 group-hover/thumb:scale-110'
                  }`}
                />
                {activeImageIndex === index && (
                  <div className="absolute inset-0 bg-red-600/90 flex flex-col items-center justify-center animate-fade-in">
                    <Eye className="w-6 h-6 text-white mb-2 animate-bounce" />
                    <span className="text-white text-xs font-bold uppercase tracking-wider">Viewing</span>
                  </div>
                )}
                {activeImageIndex !== index && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center mb-2 mx-auto">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider">View</p>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out;
        }
      `}</style>

      {/* Project Phases */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">Project Development</h2>
            <p className="text-lg text-gray-600">From concept to completion</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-orange-500 transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-0"></div>
              <div className="p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-red-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 group-hover:bg-red-600 rounded-xl mb-6 transition-colors duration-300">
                  <Target className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h3>
                <p className="text-gray-600 leading-relaxed">{projectDetails.challenge}</p>
                <div className="absolute bottom-6 right-6 text-8xl font-black text-gray-100 group-hover:text-red-50 transition-colors duration-300">01</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-orange-500 transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-0"></div>
              <div className="p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-red-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 group-hover:bg-red-600 rounded-xl mb-6 transition-colors duration-300">
                  <Lightbulb className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Solution</h3>
                <p className="text-gray-600 leading-relaxed">{projectDetails.solution}</p>
                <div className="absolute bottom-6 right-6 text-8xl font-black text-gray-100 group-hover:text-red-50 transition-colors duration-300">02</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-orange-500 transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-0"></div>
              <div className="p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-red-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 group-hover:bg-red-600 rounded-xl mb-6 transition-colors duration-300">
                  <TrendingUp className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Results</h3>
                <p className="text-gray-600 leading-relaxed">{projectDetails.result}</p>
                <div className="absolute bottom-6 right-6 text-8xl font-black text-gray-100 group-hover:text-red-50 transition-colors duration-300">03</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <span className="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold uppercase tracking-widest rounded mb-6">
                Expertise
              </span>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">Services Delivered</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our multidisciplinary team brought together diverse expertise to deliver a comprehensive solution that exceeded expectations.
              </p>
              
              {projectDetails.awards && projectDetails.awards.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-red-500 mb-4">Recognition</h4>
                  <div className="space-y-3">
                    {projectDetails.awards.map((award, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <Award className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span>{award}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 gap-5">
                {projectDetails.services.map((service, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-white/5 hover:bg-red-600 border-2 border-white/10 hover:border-red-600 rounded-xl transition-all duration-300 hover:-translate-y-2 text-center group"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <div className="w-full h-full bg-red-600/20 group-hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                        <div className="w-6 h-6 border-2 border-red-500 group-hover:border-white rounded transition-colors duration-300"></div>
                      </div>
                    </div>
                    <p className="font-semibold text-sm uppercase tracking-wide">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Interested in a Similar Project?
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Let's discuss how we can bring your vision to life with the same level of excellence and attention to detail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setModalOpen(true)}
              className="px-10 py-5 bg-gray-900 hover:bg-red-600 text-white font-bold uppercase tracking-wide rounded-lg transition-all duration-300 shadow-2xl hover:shadow-red-500/50 flex items-center gap-3"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-5 border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-bold uppercase tracking-wide rounded-lg transition-all duration-300 flex items-center gap-3">
              <Share2 className="w-5 h-5" />
              Share Project
            </button>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      
    </>
  );
}