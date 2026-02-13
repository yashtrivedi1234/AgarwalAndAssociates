import React from 'react';
import { Shield, BookOpen,  Eye, Lock, Scale, FileText, Info, AlertTriangle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

// Section Header component
const SectionHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center mb-4 mt-8">
    <Icon className="mr-2 text-red-600 w-6 h-6" />
    <h2 className="text-xl font-bold text-red-800">{title}</h2>
  </div>
);

// Privacy Policy & Terms Component
const PrivacyPolicyPage = () => {
  const slug = "privacy-policy";
  
  return (
    <>
    <Breadcrumb
        title="Privacy Policy & Terms"
        items={[
          { name: "Legal", path: "/legal" },
          { name: "Privacy Policy & Terms", path: `/legal/${slug}` },
        ]}
      />
      
          <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="md:w-1/4">
            <div className="bg-red-50 p-6 rounded-lg sticky top-8">
              <h3 className="font-bold text-red-800 mb-4 flex items-center">
                <Shield className="mr-2 w-5 h-5" />
                Document Sections
              </h3>
              <nav className="space-y-2">
                <a href="#privacy-policy" className="flex items-center text-red-700 hover:text-red-900 py-2 border-b border-red-100">
                  <Eye className="w-4 h-4 mr-2" />
                  Privacy Policy
                </a>
                <a href="#data-collection" className="flex items-center text-red-700 hover:text-red-900 py-2 border-b border-red-100">
                  <FileText className="w-4 h-4 mr-2" />
                  Data Collection
                </a>
                <a href="#data-use" className="flex items-center text-red-700 hover:text-red-900 py-2 border-b border-red-100">
                  <Info className="w-4 h-4 mr-2" />
                  Use of Information
                </a>
                <a href="#data-security" className="flex items-center text-red-700 hover:text-red-900 py-2 border-b border-red-100">
                  <Lock className="w-4 h-4 mr-2" />
                  Data Security
                </a>
                <a href="#terms" className="flex items-center text-red-700 hover:text-red-900 py-2 border-b border-red-100">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Terms & Conditions
                </a>
                <a href="#disclaimers" className="flex items-center text-red-700 hover:text-red-900 py-2">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Disclaimers
                </a>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:w-3/4">
            <div className="bg-red-50 p-8 rounded-lg mb-8">
              <div className="flex items-center justify-center mb-6">
                <Shield className="text-red-600 w-12 h-12" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-center text-red-800 mb-4">
                Privacy Policy & Terms of Service
              </h1>
              <p className="text-center text-red-700">
                Last Updated: April 20, 2025
              </p>
              <div className="mt-6 text-center">
                <p className="text-red-700">
                  Agarwal and Associates is committed to protecting your privacy and ensuring a secure experience.
                  Please read our privacy policy and terms of service carefully.
                </p>
              </div>
            </div>
            
            {/* Privacy Policy Section */}
            <section id="privacy-policy" className="mb-10">
              <SectionHeader icon={Eye} title="Privacy Policy" />
              <p className="text-gray-700 mb-4">
                At Agarwal and Associates, we respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our website 
                and tell you about your privacy rights and how the law protects you.
              </p>
              <p className="text-gray-700 mb-4">
                This policy applies to information we collect when you use our website, engage with our services, 
                communicate with us, or interact with our advertisements and applications on third-party websites and services.
              </p>
            </section>
            
            {/* Data Collection Section */}
            <section id="data-collection" className="mb-10">
              <SectionHeader icon={FileText} title="Information We Collect" />
              <p className="text-gray-700 mb-4">
                We collect several types of information from and about users of our website, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Personal identifiers, such as name, postal address, email address, and telephone number.</li>
                <li>Information that you provide by filling in forms on our website or during in-person consultations.</li>
                <li>Records and copies of your correspondence with us.</li>
                <li>Details of transactions you carry out through our website and the fulfillment of your orders.</li>
                <li>Your search queries on the website.</li>
                <li>Information about your internet connection, the equipment you use to access our website, and usage details.</li>
              </ul>
            </section>
            
            {/* Use of Information Section */}
            <section id="data-use" className="mb-10">
              <SectionHeader icon={Info} title="How We Use Your Information" />
              <p className="text-gray-700 mb-4">
                We use information that we collect about you or that you provide to us, including any personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>To present our website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
                <li>To notify you about changes to our website or any products or services we offer or provide.</li>
                <li>To improve our website, products or services, marketing, or client relationships.</li>
                <li>In any other way we may describe when you provide the information.</li>
                <li>For any other purpose with your consent.</li>
              </ul>
            </section>
            
            {/* Data Security Section */}
            <section id="data-security" className="mb-10">
              <SectionHeader icon={Lock} title="Data Security" />
              <p className="text-gray-700 mb-4">
                We have implemented measures designed to secure your personal information from accidental loss and from 
                unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers.
              </p>
              <p className="text-gray-700 mb-4">
                Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to 
                protect your personal information, we cannot guarantee the security of your personal information transmitted to our website. 
                Any transmission of personal information is at your own risk.
              </p>
            </section>
            
            {/* Terms & Conditions Section */}
            <section id="terms" className="mb-10">
              <SectionHeader icon={BookOpen} title="Terms & Conditions" />
              <p className="text-gray-700 mb-4">
                By accessing or using the website of Agarwal and Associates, you agree to be bound by these terms and conditions, 
                all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
              
              <h3 className="font-semibold text-red-800 mt-6 mb-2">Use License</h3>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily download one copy of the materials on Agarwal and Associates' website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display;</li>
                <li>Attempt to decompile or reverse engineer any software contained on Agarwal and Associates' website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              
              <h3 className="font-semibold text-red-800 mt-6 mb-2">Intellectual Property</h3>
              <p className="text-gray-700 mb-4">
                All content included on this site, such as text, graphics, logos, button icons, images, digital downloads, data compilations, 
                and software, is the property of Agarwal and Associates or its content suppliers and protected by international copyright laws.
              </p>
            </section>
            
            {/* Disclaimers Section */}
            <section id="disclaimers" className="mb-10">
              <SectionHeader icon={AlertTriangle} title="Disclaimers" />
              <p className="text-gray-700 mb-4">
                The materials on Agarwal and Associates' website are provided on an 'as is' basis. Agarwal and Associates makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or 
                conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-gray-700 mb-4">
                Further, Agarwal and Associates does not warrant or make any representations concerning the accuracy, likely results, or reliability of 
                the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>
            
            {/* Contact Section */}
            <section className="mb-10">
              <div className="bg-red-100 p-6 rounded-lg border border-red-200">
                <SectionHeader icon={Scale} title="Contact Us" />
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or Terms and Conditions, please contact us at:
                </p>
                <div className="font-medium text-red-800">
                  <p>Agarwal and Associates</p>
                  <p>Email: privacy@agarwalassociates.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Architecture Avenue, Design District, City, State, ZIP</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
    
    </div>
    </>
  );
};

export default PrivacyPolicyPage;