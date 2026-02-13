import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { validateImage } from "./imagevalidation";

const ProjectModal = ({ projectData, onClose }) => {
  const api = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    title: "",
    mainImageUrl: "",
    description: "",
    category: "",
    location: "",
    otherImages: [],
  });
  const [loading, setLoading] = useState(false);
  const [uploadingMain, setUploadingMain] = useState(false);
  const [uploadingOther, setUploadingOther] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (projectData) {
      setFormData({
        title: projectData.title || "",
        mainImageUrl: projectData.mainImageUrl || "",
        description: projectData.description || "",
        category: projectData.category || "",
        location: projectData.location || "",
        otherImages: projectData.otherImages || [],
      });
    }
  }, [projectData]);

  const uploadImage = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;
    
    if (field === "mainImageUrl") {
      setUploadingMain(true);
    } else {
      setUploadingOther(true);
    }

    const validation = validateImage(file);
    if (!validation.valid) {
      Swal.fire("Error", validation.message, "error");
      setUploadingMain(false);
      setUploadingOther(false);
      return;
    }

    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "ssks-architect");
    uploadData.append("folder", "ssks-architect/project");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/diz0v7rws/image/upload`,
        uploadData
      );
      const imageUrl = response.data.secure_url;

      if (field === "mainImageUrl") {
        setFormData((prev) => ({ ...prev, mainImageUrl: imageUrl }));
      } else {
        setFormData((prev) => ({
          ...prev,
          otherImages: [...prev.otherImages, imageUrl],
        }));
      }
      Swal.fire("Success", "Image Uploaded Successfully!", "success");
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire("Error", "Image Upload Failed!", "error");
    } finally {
      setUploadingMain(false);
      setUploadingOther(false);
    }
  };

  const removeOtherImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      otherImages: prev.otherImages.filter((_, idx) => idx !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.mainImageUrl || !formData.description || !formData.category) {
      Swal.fire("Warning", "All fields are required!", "warning");
      return;
    }

    setSubmitting(true);
    try {
      const response = projectData
        ? await axios.put(`${api}/project/update/${projectData._id}`, formData,{withCredentials:true})
        : await axios.post(`${api}/project/save`, formData,{withCredentials:true});

      Swal.fire("Success", response.data.message, "success");
      onClose();
    } catch (error) {
      console.error("Error saving project:", error);
      Swal.fire("Error", "Failed to save project!", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xs z-50 p-3">
      <div className="bg-white shadow-2xl rounded-md p-5 w-full max-w-2xl max-h-[95vh] overflow-y-auto border border-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {projectData ? "Update" : "Add New"} Project
            </h2>
            <div className="w-12 h-1 bg-red-600 rounded-full mt-1"></div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-1">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  placeholder="Enter project title"
                  className="w-full h-11 px-3 border-2 border-gray-200 rounded-md focus:border-red-500 focus:outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400"
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  required
                />
              </div>
              
              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  placeholder="Enter project location"
                  className="w-full h-11 px-3 border-2 border-gray-200 rounded-md focus:border-red-500 focus:outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400"
                  onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                  required
                />
              </div>
              
              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Category
                </label>
                <select
                  name="category"
                  className="w-full h-11 px-3 border-2 border-gray-200 rounded-md focus:border-red-500 focus:outline-none bg-white transition-colors duration-200 text-gray-700"
                  value={formData.category}
                  onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                  required
                >
                  <option value="" disabled className="text-gray-400">Select Category</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Institutional">Institutional</option>
                  <option value="Urban-Planning">Urban Planning</option>
                </select>
              </div>
              
              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  placeholder="Enter detailed project description..."
                  rows="4"
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:border-red-500 focus:outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400 resize-none"
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  required
                />
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-2">
              {/* Main Image */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Main Image
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md overflow-hidden">
                  <label className="flex flex-col items-center justify-center h-32 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    {uploadingMain ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-red-600 font-medium">Uploading...</span>
                      </div>
                    ) : formData.mainImageUrl ? (
                      <img src={formData.mainImageUrl} alt="Main" className="h-28 w-full object-contain" />
                    ) : (
                      <div className="text-center">
                        <svg className="w-8 h-8 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        <p className="text-sm text-gray-500 font-medium">Click to upload main image</p>
                        <p className="text-xs text-gray-400">PNG, JPG up to 10MB</p>
                      </div>
                    )}
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => uploadImage(e, "mainImageUrl")} 
                      disabled={uploadingMain}
                    />
                  </label>
                </div>
                {formData.mainImageUrl && (
                  <button
                    type="button"
                    className="mt-2 text-sm text-red-600 hover:text-red-800 font-medium"
                    onClick={() => setFormData((prev) => ({ ...prev, mainImageUrl: "" }))}
                  >
                    Remove Image
                  </button>
                )}
              </div>
              
              {/* Other Images */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Gallery Images ({formData.otherImages.length})
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md overflow-hidden">
                  <label className="flex flex-col items-center justify-center h-24 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    {uploadingOther ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-red-600 text-sm font-medium">Uploading...</span>
                      </div>
                    ) : (
                      <div className="text-center">
                        <svg className="w-6 h-6 mx-auto mb-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        <p className="text-sm text-gray-500 font-medium">Add gallery images</p>
                      </div>
                    )}
                    <input 
                      type="file" 
                      className="hidden"
                      accept="image/*" 
                      onChange={(e) => uploadImage(e, "otherImages")} 
                      disabled={uploadingOther}
                    />
                  </label>
                </div>
                
                {formData.otherImages.length > 0 && (
                  <div className="mt-2">
                    <div className="grid grid-cols-4 gap-2">
                      {formData.otherImages.map((img, idx) => (
                        <div key={idx} className="relative group">
                          <img 
                            src={img} 
                            alt={`Gallery ${idx + 1}`} 
                            className="w-full h-16 object-cover rounded-lg border-2 border-gray-200" 
                          />
                          <button
                            type="button"
                            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                            onClick={() => removeOtherImage(idx)}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4 border-t border-gray-100">
            <button 
              type="button" 
              className="flex-1 h-11 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-md transition-all duration-200 transform  focus:outline-none focus:ring-4 focus:ring-gray-200"
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={uploadingMain || uploadingOther || submitting}
              className="flex-1 cursor-pointer h-11 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-md transition-all duration-200 transform focus:outline-none focus:ring-4 focus:ring-red-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {submitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                <span>{projectData ? "Update Project" : "Save Project"}</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;