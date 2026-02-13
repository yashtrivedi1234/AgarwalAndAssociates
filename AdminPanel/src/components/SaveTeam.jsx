import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

// Departments to exactly match Dashboard coloring logic
const departments = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Dermatology",
    "Radiology",
];

const TeamForm = ({ member, onClose }) => {
    const api = import.meta.env.VITE_API_URL;

    const [formData, setFormData] = useState({
        name: "",
        department: "",
        dob: "",
        imageUrl: "",
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (member) {
            setFormData({
                name: member.name || "",
                department: member.department || "",
                dob: member.dob ? member.dob.slice(0, 10) : "", 
                imageUrl: member.imageUrl || "",
            });
        }
    }, [member]);

    // 🖼️ Image upload logic
    const uploadImage = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setLoading(true);
        const uploadData = new FormData();
        uploadData.append("file", file);
        uploadData.append("upload_preset", "hope-hospital");
        uploadData.append("folder", "hope-hospital/team");

        try {
            const res = await axios.post(
                `https://api.cloudinary.com/v1_1/diz0v7rws/image/upload`,
                uploadData
            );
            setFormData((prev) => ({ ...prev, imageUrl: res.data.secure_url }));
            Swal.fire("Success", "Image Uploaded!", "success");
        } catch (err) {
            console.error(err);
            Swal.fire("Error", "Image Upload Failed!", "error");
        } finally {
            setLoading(false);
        }
    };

    // Form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !formData.name ||
            !formData.department ||
            !formData.dob ||
            !formData.imageUrl
        ) {
            Swal.fire("Warning", "All fields are required!", "warning");
            return;
        }
        try {
            const response = member
                ? await axios.put(`${api}/team/update/${member._id}`, formData)
                : await axios.post(`${api}/team/save`, formData);

            Swal.fire("Success", response.data.message, "success");
            onClose();
        } catch (err) {
            console.error(err);
            Swal.fire("Error", "Failed to save team member!", "error");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
            <div className="bg-white shadow-2xl rounded-xl p-4 w-full max-w-sm relative border border-gray-100">
                {/* Header */}
                <div className="text-center mb-3">
                    <h2 className="text-xl font-bold text-gray-800 ">
                        {member ? "Update" : "Add New"} Team Member
                    </h2>
                    <div className="w-10 h-1 bg-red-600 mx-auto rounded-full"></div>
                </div>

                <form onSubmit={handleSubmit} className=" space-y-2">
                    {/* Name Input */}
                    <div className=" ">
                        <label className="block text-sm font-semibold text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            value={formData.name}
                            placeholder="Enter doctor's full name"
                            className="w-full   h-10 px-4 border-2 border-gray-200 rounded-md focus:border-red-500 focus:outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400"
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                }))
                            }
                            required
                        />
                    </div>

                    {/* Department Input */}
                    <div className=" ">
                        <label className="block text-sm font-semibold text-gray-700">
                            Department
                        </label>
                        <input
                            type="text"
                            value={formData.department}
                            placeholder="Inter Your Department and Position"
                            className="w-full   h-10 px-4 border-2 border-gray-200 rounded-md focus:border-red-500 focus:outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400"
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    department: e.target.value,
                                }))
                            }
                            required
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className=" ">
                        <label className="block text-sm font-semibold text-gray-700">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            value={formData.dob}
                            className="w-full   h-10 px-4 border-2 border-gray-200 rounded-md focus:border-red-500 focus:outline-none transition-colors duration-200 text-gray-700"
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    dob: e.target.value,
                                }))
                            }
                            required
                        />
                    </div>

                    {/* Image Upload */}
                    <div className=" ">
                        <label htmlFor="image" className="block text-sm font-semibold text-gray-700">
                            Profile Photo
                        </label>
                        <div className="flex items-center space-x-2">
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                className="flex-1   h-10 px-4 border-2 border-gray-200 rounded-md focus:border-red-500 focus:outline-none transition-colors duration-200 text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                                onChange={uploadImage}
                            />
                            {formData.imageUrl && !loading && (
                                <img
                                    src={formData.imageUrl}
                                    alt="Profile preview"
                                    className="w-12   h-10 object-cover rounded-full border-2 border-gray-200"
                                />
                            )}
                        </div>
                        {loading && (
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                                <p className="text-red-600 text-sm font-medium">Uploading image...</p>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-3">
                        <button
                            disabled={loading}
                            type="submit"
                            className="flex-1 cursor-pointer  h-10 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {loading ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>Processing...</span>
                                </div>
                            ) : (
                                <span>{member ? "Update Member" : "Add Member"}</span>
                            )}
                        </button>
                        <button
                            type="button"
                            className="flex-1 cursor-pointer  h-10 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-200"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>

                {/* Close button */}
                <button
                    type="button"
                    className="absolute cursor-pointer right-4 top-4 w-8  h-10 flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-200"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TeamForm;