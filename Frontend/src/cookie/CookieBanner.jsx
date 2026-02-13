import React, { useState, useEffect } from "react";
import { getUserMeta } from "./getUserMeta"; // This should return actual user object
import axios from 'axios'
const CookieBanner = () => {
  const [consentGiven, setConsentGiven] = useState(false);
const backendUrl = import.meta.env.VITE_BACKEND_URL
  useEffect(() => {
    const storedConsent = localStorage.getItem("cookieConsent");
    if (storedConsent === "true") {
      setConsentGiven(true);
    }
  }, []);

  const giveConsent = async () => {
    setConsentGiven(true);
    localStorage.setItem("cookieConsent", "true");

  try {
  const userData = await getUserMeta();
  console.log("Raw User Data:", userData);

  const formattedData = {
    visitorId: userData.visitorId || "",
    city: userData.city || "",
    ip: userData.ip || "",
    region: userData.region || "",
    country: userData.country || "",
    postal: userData.postal || "",
    utmSource: userData.utmSource || "Direct",
    location: {
      lat: userData.latitude?.toString() || "",
      long: userData.longitude?.toString() || ""
    }
  };

  const res = await axios.post(`${backendUrl}/visitor/add`, formattedData);
  console.log("Visitor saved:", res.data);
} catch (error) {
  console.error("Failed to send visitor data:", error);
}

  };

  const declineConsent = () => {
    console.log("Cookie consent declined");
    window.history.back(); 
  };

  if (consentGiven) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <div className="bg-white/90 backdrop-blur-md shadow-xl border-t border-gray-200 px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Message */}
        <div className="text-gray-800 text-sm sm:text-base max-w-3xl mb-2 sm:mb-0">
          <p>
            We use cookies to enhance your experience, analyze site traffic, and serve personalized content.{" "}
            <span className="underline cursor-pointer hover:text-blue-600">Learn more</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 shrink-0">
          <button
            onClick={declineConsent}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 text-sm px-4 py-1.5 rounded-md transition-colors"
          >
            Decline
          </button>
          <button
            onClick={giveConsent}
            className="bg-blue-600 text-white hover:bg-blue-700 text-sm px-4 py-1.5 rounded-md transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
