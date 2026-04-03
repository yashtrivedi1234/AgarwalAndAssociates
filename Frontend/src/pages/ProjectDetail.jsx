import { useState, useEffect } from 'react';
import { MapPin, Calendar, ChevronLeft, ArrowRight, Eye, Download, Share2, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import InquiryModal from '../components/InquiryModal';
import { fetchProjectData } from '../redux/dataSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [prevProject, setPrevProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);
  const dispatch = useDispatch();
  const { projectData, error, status } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchProjectData());
  }, [dispatch]);

  useEffect(() => {
    if (!projectData.length) {
      setProject(null);
      setPrevProject(null);
      setNextProject(null);
      return;
    }

    const currentIndex = projectData.findIndex((p) => p.slug === slug);
    const currentProject = projectData[currentIndex];
    setProject(currentProject);
    setActiveImageIndex(0);

    if (currentProject) {
      setPrevProject(currentIndex > 0 ? projectData[currentIndex - 1] : null);
      setNextProject(currentIndex < projectData.length - 1 ? projectData[currentIndex + 1] : null);
    } else {
      setPrevProject(null);
      setNextProject(null);
    }
  }, [slug, projectData]);

  if (status === 'loading' && !project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="relative">
          <div className="h-20 w-20 animate-spin rounded-full border-4 border-gray-200 border-t-red-600"></div>
        </div>
        <p className="mt-6 text-xl font-semibold text-gray-700">Loading Project...</p>
      </div>
    );
  }

  if (status === 'failed' || error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6 text-center">
        <h1 className="text-3xl font-black text-gray-900">Unable to load this project</h1>
        <p className="mt-4 max-w-xl text-gray-600">
          There was a problem fetching project details. Please try again in a moment.
        </p>
        <Link
          to="/projects"
          className="mt-8 inline-flex items-center gap-3 rounded-lg bg-gray-900 px-6 py-3 font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-red-600"
        >
          <ChevronLeft className="h-5 w-5" />
          Back to Projects
        </Link>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6">
        <div className="max-w-2xl rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-red-600">Project Not Found</p>
          <h1 className="text-3xl font-black text-gray-900">This project page does not exist.</h1>
          <p className="mt-4 text-gray-600">
            The project may have been removed or the link may be incorrect. You can head back to the main projects page.
          </p>
          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-gray-900 px-6 py-3 font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-red-600"
          >
            <ChevronLeft className="h-5 w-5" />
            Browse Projects
          </Link>
        </div>
      </div>
    );
  }

  const projectDetails = project.details || {
    client: 'Confidential Client',
    mainImageUrl: project.mainImageUrl || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
    otherImages: project.otherImages && project.otherImages.length > 0
      ? project.otherImages
      : [
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
          'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop',
          'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop',
          'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop',
          'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop',
        ],
  };

  const formattedDate = (date) =>
    new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev === projectDetails.otherImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? projectDetails.otherImages.length - 1 : prev - 1));
  };

  return (
    <>
      <InquiryModal isOpen={modalOpen} closeModal={() => setModalOpen(false)} />

      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-3xl font-black leading-tight lg:text-4xl">{project.title}</h1>

              <div className="mb-8 flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-500" />
                  <span className="text-sm font-medium">{project.location}</span>
                </div>
                <div className="h-5 w-px bg-gray-600"></div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-red-500" />
                  <span className="text-sm font-medium">{formattedDate(project.updatedAt)}</span>
                </div>
              </div>

              <p className="mb-10 text-lg leading-relaxed text-gray-300">{project.description}</p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-3 rounded-lg bg-red-600 px-8 py-4 font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-500/50"
                >
                  Request Quote
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="flex items-center gap-3 rounded-lg border-2 border-white/20 px-8 py-4 font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-white hover:bg-white/10">
                  <Download className="h-5 w-5" />
                  Download
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={projectDetails.mainImageUrl}
                  alt={project.title}
                  className="h-[500px] w-full object-cover"
                />
                <div className="absolute bottom-6 left-6 rounded-lg bg-white/95 px-6 py-4 shadow-xl backdrop-blur-sm">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-red-600">Client</p>
                  <p className="text-lg font-bold text-gray-900">{projectDetails.client}</p>
                </div>
              </div>
              <div className="absolute -right-4 -top-4 -z-10 h-32 w-32 animate-pulse rounded-2xl bg-red-600/10"></div>
              <div
                className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 animate-pulse rounded-2xl bg-red-600/10"
                style={{ animationDelay: '1s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="animate-fade-in text-4xl font-black text-gray-900 lg:text-5xl">Visual Journey</h2>
          <div className="animate-slide-in-right flex items-center gap-4">
            <button
              onClick={prevImage}
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white transition-all duration-300 hover:scale-110 hover:bg-red-600 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="min-w-[80px] text-center text-lg font-bold text-gray-900">
              {activeImageIndex + 1}/{projectDetails.otherImages.length}
            </span>
            <button
              onClick={nextImage}
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white transition-all duration-300 hover:scale-110 hover:bg-red-600 active:scale-95"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="group relative mb-6 overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative h-[600px] w-full">
            {projectDetails.otherImages.map((image, index) => (
              <img
                key={index}
                src={image || projectDetails.mainImageUrl}
                alt={`Project view ${index + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                  index === activeImageIndex ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                }`}
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute bottom-8 left-8 text-white">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider opacity-80">
                Image {activeImageIndex + 1} of {projectDetails.otherImages.length}
              </p>
              <p className="text-2xl font-bold">{project.title}</p>
            </div>
          </div>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 opacity-0 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-red-600 hover:text-white group-hover:opacity-100"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 opacity-0 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-red-600 hover:text-white group-hover:opacity-100"
          >
            <ArrowRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            {projectDetails.otherImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === activeImageIndex ? 'h-2 w-8 bg-red-600' : 'h-2 w-2 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>

        {projectDetails.otherImages.length > 1 && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {projectDetails.otherImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`group/thumb relative overflow-hidden rounded-lg transition-all duration-500 ${
                  activeImageIndex === index
                    ? 'scale-105 ring-4 ring-red-600 shadow-2xl'
                    : 'ring-2 ring-gray-200 hover:scale-105 hover:ring-red-400'
                }`}
                style={{
                  height: '280px',
                  animationDelay: `${index * 0.1}s`,
                  animation: 'slideUp 0.6s ease-out both',
                }}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`h-full w-full object-cover transition-all duration-500 ${
                    activeImageIndex === index ? 'scale-100' : 'scale-100 group-hover/thumb:scale-110'
                  }`}
                />
                {activeImageIndex === index && (
                  <div className="animate-fade-in absolute inset-0 flex flex-col items-center justify-center bg-red-600/90">
                    <Eye className="mb-2 h-6 w-6 animate-bounce text-white" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">Viewing</span>
                  </div>
                )}
                {activeImageIndex !== index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100">
                    <div className="text-center text-white">
                      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white">
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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.6s ease-out; }
      `}</style>

      <div className="relative overflow-hidden bg-[linear-gradient(135deg,_#0f172a_0%,_#111827_45%,_#7f1d1d_100%)] py-16 lg:py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-red-500 blur-3xl"></div>
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-red-700/30 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <div className="grid gap-8 px-6 py-8 lg:grid-cols-[1.4fr_0.8fr] lg:px-10 lg:py-10">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-400">Ready To Build</p>
                <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-white lg:text-6xl">
                  Interested in a Similar Project?
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
                  Let&apos;s shape a space that reflects your goals, site conditions, and design aspirations with the same attention to detail seen in this project.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center gap-3 rounded-xl bg-red-600 px-8 py-4 font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-500/40"
                  >
                    Start Your Project
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <button className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10">
                    <Share2 className="h-5 w-5" />
                    Share Project
                  </button>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">Consultation</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    Discuss your vision, budget, and site requirements with our team.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">Planning</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    Get a thoughtful direction for design, execution, and timelines.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">Execution</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    Move forward with a team focused on quality, detail, and delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">Explore More</p>
              <h2 className="mt-3 text-3xl font-black text-white">Continue Through Our Project Portfolio</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-gray-300 transition-colors duration-300 hover:text-white"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {prevProject ? (
              <Link
                to={`/project/${prevProject.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/70 hover:bg-white/[0.06]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative flex h-full items-start gap-5">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white transition-colors duration-300 group-hover:bg-red-600">
                    <ChevronLeft className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Previous Project</p>
                    <p className="mt-4 text-2xl font-black leading-tight text-white transition-colors duration-300 group-hover:text-red-400">
                      {prevProject.title}
                    </p>
                    {prevProject.location && (
                      <p className="mt-3 flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="h-4 w-4 text-red-500" />
                        <span className="truncate">{prevProject.location}</span>
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 opacity-60">
                <div className="flex h-full items-start gap-5">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-gray-500">
                    <ChevronLeft className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Previous Project</p>
                    <p className="mt-4 text-2xl font-black leading-tight text-white">You are viewing the first project.</p>
                    <p className="mt-3 text-sm text-gray-400">There is no previous project available in the current sequence.</p>
                  </div>
                </div>
              </div>
            )}

            {nextProject ? (
              <Link
                to={`/project/${nextProject.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/70 hover:bg-white/[0.06]"
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-red-600/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative flex h-full items-start justify-between gap-5 text-right">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Next Project</p>
                    <p className="mt-4 text-2xl font-black leading-tight text-white transition-colors duration-300 group-hover:text-red-400">
                      {nextProject.title}
                    </p>
                    {nextProject.location && (
                      <p className="mt-3 flex items-center justify-end gap-2 text-sm text-gray-400">
                        <span className="truncate">{nextProject.location}</span>
                        <MapPin className="h-4 w-4 flex-shrink-0 text-red-500" />
                      </p>
                    )}
                  </div>
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white transition-colors duration-300 group-hover:bg-red-600">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                </div>
              </Link>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 opacity-60">
                <div className="flex h-full items-start justify-between gap-5 text-right">
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Next Project</p>
                    <p className="mt-4 text-2xl font-black leading-tight text-white">You are viewing the latest project.</p>
                    <p className="mt-3 text-sm text-gray-400">There is no next project available in the current sequence.</p>
                  </div>
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-gray-500">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
