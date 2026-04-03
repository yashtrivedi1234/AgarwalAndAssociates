import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';


import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGalleryData } from '../redux/dataSlice';


export default function Gallery() {
    const [searchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [type, setType] = useState('photo')

const dispatch = useDispatch()
const {galleryData} = useSelector((state)=>state.data)

useEffect(()=>{
dispatch(fetchGalleryData())
},[dispatch])

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryData.length - 1 ? 0 : prevIndex + 1
    );
  };


    useEffect(()=>{
  const type = searchParams.get("type");
if(type){
  setType(type)
}
    },[searchParams])

  return (
    <>
     <Breadcrumb
            title="Gallery"
            items={[
                { name: "Gallery", path: "/gallery" },
              ]}
            // bgImage="/api/placeholder/1920/600"
          />
    <div className="min-h-screen bg-gray-100 lg:p-8 lg:py-12 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryData.filter(img=>img.type == type).map((image, index) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden  shadow-lg bg-white group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.imageUrl} 
                alt={image.alt} 
                className="w-full h-44 sm:h-52 md:h-60 lg:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30  flex items-center justify-center transition-all duration-300">
                <div className="text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 text-center">
                  <span className="text-xl font-bold"><ZoomIn size={50} /></span>
                </div>
              </div>
            </div>
          ))}
          {/* <video controls className='h-64 aspect-video' src='https://res.cloudinary.com/diz0v7rws/video/upload/v1756900990/bky4belmi7xaje6qgjdb.mp4'></video> */}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0  bg-black/80 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative w-full max-w-3xl px-3 py-4 md:px-6" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={closeModal}
                className="absolute top-2 right-2 md:top-3 md:right-3 text-white p-2 rounded-full bg-black bg-opacity-55 hover:bg-opacity-75 transition-all z-10"
              >
                <X size={20} />
              </button>

              {/* Previous Button */}
              <button 
                onClick={goToPrevious}
                className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-55 hover:bg-opacity-75 transition-all z-10"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button 
                onClick={goToNext}
                className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-55 hover:bg-opacity-75 transition-all z-10"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image */}
              <div className="w-full flex items-center justify-center rounded-lg overflow-hidden bg-black/30 p-2 md:p-3">
                <img 
                  src={galleryData[currentImageIndex].imageUrl} 
                  alt={galleryData[currentImageIndex].alt} 
                  className="max-h-[68vh] md:max-h-[72vh] w-auto max-w-full object-contain rounded-md shadow-2xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}