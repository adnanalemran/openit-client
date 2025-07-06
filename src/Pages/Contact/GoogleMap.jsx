import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const GoogleMap = () => {
  return (
    <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
      {/* Map Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaMapMarkerAlt className="text-white text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">ওপেন আইটি ইনস্টিটিউট</h3>
          <p className="text-gray-600 mb-4">ঢাকা, বাংলাদেশ</p>
          
          {/* Contact Info Overlay */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-sm mx-auto">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaPhone className="text-orange-500" />
                <span className="text-gray-700">+৮৮০ ১৭১২-৩৪৫৬৭৮</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" />
                <span className="text-gray-700">info@openit.edu.bd</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-500" />
                <span className="text-gray-700">মূল কার্যালয়, ঢাকা</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 w-16 h-16 bg-orange-200 rounded-full opacity-50"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-200 rounded-full opacity-50"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-200 rounded-full opacity-30"></div>
    </div>
  );
};

export default GoogleMap;