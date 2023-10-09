
import React, { useState, useEffect } from 'react';
const ProfileView: React.FC = () => {

    const [animationClass, setAnimationClass] = useState('opacity-0');

    useEffect(() => {
        setAnimationClass('opacity-100');
    }, []);
  return (
    
        <div className={`bg-gray-100 min-h-screen container mt-40 p-6 transition-opacity ease-in-out duration-300 ${animationClass}`}>
     <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
        <h2 className="text-2xl mb-2 font-semibold border-b-2 border-gray-300 pb-2">Francisco Escalante</h2>
        
        <p className="text-gray-500 mb-4 mt-4">
          Computer Engineer with more than 5 years of experience in software engineering and application development.
          {/* ... rest of the bio */}
        </p>

        <h3 className="text-xl mb-2 font-semibold">Technical Skills</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-lg mb-2 font-semibold">Backend</h4>
            <ul className="list-disc list-inside">
              <li>Javascript (Nodejs)</li>
              <li>Express.js / NestJS / Salis.js</li>
              <li>Typescript</li>
              <li>Laravel +5 years of experience</li>
              <li>Python (django, fastapi, flask)</li>
              <li>Go Lang</li>
            </ul>
          </div>
          {/* ... other skill categories */}
        </div>

        <h3 className="text-xl mb-2 mt-4 font-semibold">Soft Skills</h3>
        <ul className="list-disc list-inside">
          <li>Organization</li>
          <li>Proactive</li>
          <li>Self-learning abilities</li>
        </ul>

        <h3 className="text-xl mb-2 mt-4 font-semibold">Languages</h3>
        <ul className="list-disc list-inside">
          <li>Spanish (native)</li>
          <li>English (C1)</li>
        </ul>

        <h3 className="text-xl mb-2 mt-4 font-semibold">Education and Training</h3>
        <p>
          I'm a Software Engineer, graduated from La Universidad Nacional Experimental de Guayana. There I worked in many software projects for the internal use of the university and was very involved in the tech update on many platforms.
        </p>

        <ul className="text-sm space-y-2 mt-4">
          <li><strong>Email:</strong> fxveb90@gmail.com</li>
          <li><strong>Phone:</strong> +58 424 9333259</li>
          <li><strong>Address:</strong> Venezuela</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileView;