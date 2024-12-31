"use client"

import React from 'react';

const Partners = () => {
  const partners = [
    { name: "Plesk", logo: "/partners/plesk.png" },
    { name: "SmarterMail", logo: "/partners/smartermail.png" },
    { name: "CloudLinux", logo: "/partners/cloudlinux.png" },
    { name: "Facebook", logo: "/partners/facebook.png" },
    { name: "AWS", logo: "/partners/aws.png" },
    { name: "Virtualizor", logo: "/partners/virtualizor.png" },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <h3 className="text-lg font-medium text-gray-600 mb-4 md:mb-0 md:mr-8">Trusted By:</h3>
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full overflow-hidden">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/6 px-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 w-full object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

