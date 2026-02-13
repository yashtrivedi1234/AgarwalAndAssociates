import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

function AdminLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      Swal.fire({
        title: 'Missing Information',
        text: 'Please enter both email and password.',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      });
      return;
    }

    const apiKey = `${import.meta.env.VITE_API_URL}/admin/login`;

    try {
      setLoading(true);
      const response = await axios.post(apiKey, formData, {withCredentials: true});
      
      if(response.status === 200 || response.status === 201){
        localStorage.setItem("admin", JSON.stringify(response?.data)); 
      }
     
      const adminData = response.data;
      navigate('/dashboard', { state: { adminData } });

    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
      Swal.fire({
        title: 'Authentication Failed',
        text: errorMessage,
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Try Again',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-red-300 opacity-5 transform rotate-45">
          <div className="grid grid-cols-12 grid-rows-12 gap-4 h-full">
            {Array(144).fill().map((_, i) => (
              <div key={i} className="bg-white rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative circle elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-50 rounded-full opacity-20"></div>
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-red-100 rounded-full opacity-20"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-4xl p-6">
       

        {/* Right side - Login form */}
        <div className="w-full md:w-1/2 max-w-md">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-red-50">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-red-100 rounded-full blur"></div>
                <div className="relative">
                  {/* <h1 className='text-2xl font-medium'>Pora Infratech</h1> */}
                  <img src={logo} alt="Logo" className="h-24 w-24 object-contain rounded-full border-4 border-red-100 p-1" />
                </div>
              </div>
            </div>
            
            {/* <h2 className="text-2xl font-bold text-center text-red-800 mb-8">Administrator Login</h2> */}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block  font-medium text-red-900 " htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="admin@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-3 bg-red-50 border border-red-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-medium text-red-900 mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-3 bg-red-50 border border-red-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                    required
                  />
                </div>
              </div>
              
        
              
              <button
                type="submit"
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors ${loading ? 'opacity-80 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </div>
                ) : (
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                    </svg>
                    Sign In
                  </span>
                )}
              </button>
            </form>
          </div>
          
          <p className="mt-6 text-center text-sm text-red-500">
            Need help accessing your account? 
            <a href="tel:9336969289" className="ml-1 font-medium text-red-800 hover:text-red-900">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;