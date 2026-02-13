import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Trash2, Edit2, User, Calendar } from "lucide-react";
import TeamForm from "./SaveTeam";

const TeamDashboard = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [loadCount, setLoadCount] = useState(10);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const response = await axios.get(`${api}/team/getall`);
      setTeam(response.data.payload);
    } catch (error) {
      setError("Error fetching team data");
      console.error("Error fetching team data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${api}/team/delete/${id}`);
      setTeam((prev) => prev.filter((member) => member._id !== id));
      Swal.fire("Deleted!", "The team member has been deleted.", "success");
    } catch (error) {
      console.error("Error deleting member:", error);
      Swal.fire("Error!", "Failed to delete team member.", "error");
    }
  };

  const handleEdit = (member) => {
    setSelectedMember(member);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedMember(null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    fetchTeam();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getDepartmentColor = (department) => {
    switch(department?.toLowerCase()) {
      case 'cardiology': return 'bg-red-100 text-red-800';
      case 'neurology': return 'bg-blue-100 text-blue-800';
      case 'orthopedics': return 'bg-green-100 text-green-800';
      case 'pediatrics': return 'bg-pink-100 text-pink-800';
      case 'dermatology': return 'bg-purple-100 text-purple-800';
      case 'radiology': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading team data...</p>
        </div>
      </div>
    );
  }




  return (
    <div className="p-6">

       <div className="mb-6 bg-white p-2">
        <div className=" flex justify-between border border-gray-200 bg-gray-50 px-4 py-1">
          <h1 className="text-2xl  font-semibold">
            Team Management
          </h1>
         <button
          onClick={handleAdd}
          className="bg-red-600 hover:bg-red-500 text-white px-3 py-1.5 rounded-lg shadow-md font-semibold transition-all"
        >
          + Add Team Member
        </button>
        </div>
      </div>
 {isFormOpen && (
        <div className="h-full w-full">
        <TeamForm member={selectedMember} onClose={handleCloseForm} />
        </div>
      ) }
      {team.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No team members found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[75rem] border-collapse border border-gray-300">
            <thead>
              <tr className="bg-red-500 text-white">
                <th className="border border-gray-300 px-2 py-1.5 text-center">S.No</th>
                <th className="border border-gray-300 px-2 py-1.5 text-center">Photo</th>
                <th className="border border-gray-300 px-2 py-1.5 text-center">Name</th>
                <th className="border border-gray-300 px-2 py-1.5 text-center">Department</th>
                <th className="border border-gray-300 px-2 py-1.5 text-center">Date of Birth</th>
                <th className="border border-gray-300 px-2 py-1.5 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {team.slice(0, loadCount).reverse().map((member, index) => (
                <tr key={member._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-3 py-1.5 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-3 py-1.5 text-center">
                    <div className="flex justify-center">
                      {member.imageUrl ? (
                        <img 
                          src={member.imageUrl} 
                          alt={member.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div 
                        className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center"
                        style={{ display: member.imageUrl ? 'none' : 'flex' }}
                      >
                        <User size={20} className="text-gray-500" />
                      </div>
                    </div>
                  </td>
                  <td className="border w-64 border-gray-300 px-3 py-1.5 font-medium">
                    {member.name}
                  </td>
                  <td className="border w-44 border-gray-300 px-3 py-1.5 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDepartmentColor(member.department)}`}>
                      {member.department}
                    </span>
                  </td>
                  <td className="border w-44 border-gray-300 px-3 py-1.5 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Calendar size={14} className="text-gray-500" />
                      {formatDate(member.dob)}
                    </div>
                  </td>
                  <td className="border border-gray-300 px-3 py-1.5 text-center">
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => handleEdit(member)}
                        className="text-yellow-600 hover:text-yellow-800 p-1 rounded hover:bg-yellow-50"
                        title="Edit member"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(member._id)}
                        className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50"
                        title="Delete member"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {loadCount < team.length && (
            <div className="mt-4 text-center">
              <button
                className="bg-red-500 text-white px-3 py-1.5 rounded hover:bg-red-600"
                onClick={() => setLoadCount((prev) => Math.min(prev + 10, team.length))}
              >
                Load More ({team.length - loadCount} remaining)
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TeamDashboard;