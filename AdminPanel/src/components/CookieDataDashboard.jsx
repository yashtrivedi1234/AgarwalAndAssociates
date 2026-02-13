import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapPin, Trash2 } from "lucide-react";
import { toast } from "react-toastify";


  const api = import.meta.env.VITE_API_URL;
const mapApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default function VisitorDashboard() {
  const [visitorData, setVisitorData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${api}/visitor/get/all`);
      setVisitorData(res.data.data || []);
    } catch (error) {
      toast.error("Failed to fetch visitors");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${api}/visitor/delete/${id}`);
      setVisitorData((prev) => prev.filter((item) => item._id !== id));
      toast.success("Deleted successfully");
    } catch (error) {
      toast.error("Failed to delete");
    }
  };

  const openMap = (lat, long, locationString) => {
    if (!lat || !long) return toast.error("Location data not available");
    setSelectedLocation({ lat, long, locationString });
    setShowMap(true);
  };

  const closeMap = () => {
    setSelectedLocation(null);
    setShowMap(false);
  };

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleString("en-IN");
  };

  if (loading) return <p className="p-4 text-center">Loading visitor data...</p>;
  if (!visitorData.length) return <p className="p-4 text-center">No visitor data found.</p>;

  return (
    <div className="p-6">
       <div className="mb-6 bg-white p-2">
        <div className=" flex justify-between border border-gray-200 bg-gray-50 px-4 py-1">
          <h1 className="text-2xl  font-semibold">
           Visitor Data
          </h1>
          
        </div>
      </div>

      <div className="overflow-x-auto rounded shadow">
        <table className="w-[200vh] text-left border border-gray-200">
          <thead className="bg-red-500 text-gray-100 text-sm">
            <tr>
              <th className="px-4 py-2">Visitor ID</th>
              <th className="px-4 py-2">IP</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Region</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Postal</th>
              <th className="px-4 py-2">Location Lat</th>
              <th className="px-4 py-2">Location Long</th>
              <th className="px-4 py-2">UTM Source</th>
              <th className="px-4 py-2">Visited At</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visitorData.map((data) => (
              <tr key={data._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-4 py-2">{data.visitorId.slice(0,6)}</td>
                <td className="px-4 py-2">{data.ip}</td>
                <td className="px-4 py-2">{data.city}</td>
                <td className="px-4 py-2">{data.region}</td>
                <td className="px-4 py-2">{data.country}</td>
                <td className="px-4 py-2">{data.postal}</td>
                <td className="px-4 py-2">{data.location?.lat}</td>
                <td className="px-4 py-2">{data.location?.long}</td>
                <td className="px-4 py-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {data.utmSource}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {data.createdAt ? formatDate(data.createdAt) : "N/A"}
                </td>
                <td className="px-4 py-2 flex items-center gap-2">
                  {/* <button
                    className="p-1 bg-green-100 text-green-700 rounded hover:bg-green-200"
                    onClick={() =>
                      openMap(
                        data.location?.lat,
                        data.location?.long,
                        `${data.city}, ${data.region}, ${data.country}`
                      )
                    }
                  >
                    <MapPin size={16} />
                  </button> */}
                  <button
                    className="p-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
                    onClick={() => handleDelete(data._id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MAP MODAL */}
      {showMap && selectedLocation && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Visitor Location</h3>
              <button onClick={closeMap} className="text-gray-500 hover:text-red-500">
                X
              </button>
            </div>
            <div className="h-[400px] w-full">
              <iframe
                title="Visitor Map"
                width="100%"
                height="100%"
                frameBorder="0"
                src={`https://www.google.com/maps/embed/v1/place?key=${mapApiKey}&q=${selectedLocation.lat},${selectedLocation.long}&zoom=14`}
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 text-sm text-gray-600">
              {selectedLocation.locationString}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
