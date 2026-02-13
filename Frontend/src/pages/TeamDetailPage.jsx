import { useParams } from 'react-router-dom';
import { useState } from 'react';
import bread from '../assets/teamdetail-bread.webp'
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Clock, 
  ChevronDown, 
  ChevronUp,
  Award,
  Building,
  Layers,
  Layout,
  ArrowLeft
} from 'lucide-react';
import teamData from '../Data/TeamData';
import Breadcrumb from '../components/Breadcrumb';

const TeamDetailPage = () => {
  const { slug } = useParams();
  const member = teamData.find(item => item.slug === slug);
  const [activeSection, setActiveSection] = useState(null);

  if (!member) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="text-red-700 text-3xl mb-4">Member Not Found</div>
        <p className="text-gray-600 mb-6">The team member you're looking for doesn't exist.</p>
        <button 
          className="flex items-center px-4 py-2 bg-black text-white rounded hover:bg-red-700 transition-colors"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2" size={18} />
          Back to Team
        </button>
      </div>
    );
  }

  const toggleSection = (index) => {
    if (activeSection === index) {
      setActiveSection(null);
    } else {
      setActiveSection(index);
    }
  };

  return (
    <>
   <Breadcrumb 
           title={member?.name}
           items={[
             { name: "About", path: "/about" },
           ]}
         />
  
    <div className="py-8 bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column - Profile Info */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-black text-white p-4 text-center">
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-4">
                    <img 
                      src={member.image || '/default-profile.jpg'} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold">{member.name}</h2>
                <p className="text-gray-300">{member.position}</p>
              </div>
              
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <GraduationCap className="text-red-700 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-gray-700">Education</h3>
                    <p>{member.education || "Not Available"}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-red-700 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-gray-700">Experience</h3>
                    <p>{member.experience}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Details Accordion */}
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-black text-white p-4">
                <h2 className="text-xl font-bold">Professional Background</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {member.detail && member.detail.map((section, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                      className="w-full flex items-center justify-between p-4 focus:outline-none hover:bg-gray-50 transition-colors"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="flex items-center">
                        {index === 0 && <Award className="text-red-700 mr-3" size={20} />}
                        {index === 1 && <Briefcase className="text-red-700 mr-3" size={20} />}
                        {index === 2 && <Building className="text-red-700 mr-3" size={20} />}
                        {index === 3 && <Layers className="text-red-700 mr-3" size={20} />}
                        {index === 4 && <Layout className="text-red-700 mr-3" size={20} />}
                        {index === 5 && <User className="text-red-700 mr-3" size={20} />}
                        <span className="font-bold text-gray-800">{section.title}</span>
                      </div>
                      {activeSection === index ? (
                        <ChevronUp className="text-red-700" size={20} />
                      ) : (
                        <ChevronDown className="text-red-700" size={20} />
                      )}
                    </button>
                    
                    {activeSection === index && (
                      <div className="p-4 bg-gray-50">
                        <ul className="space-y-2">
                          {section.points && section.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                              <div className="bg-red-700 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default TeamDetailPage;