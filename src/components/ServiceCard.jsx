// src/components/ServiceCard.jsx
import React, { useState } from 'react';

export default function ServiceCard({ icon, title, description, moreInfo }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full max-w-xs h-64 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: '1000px' }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${
          flipped ? 'rotate-y-180' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-4 text-center backface-hidden">
          <div className="mb-4">{icon}</div>
          <h3 className="text-lg font-bold text-blue-600 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-blue-50 shadow-md rounded-lg flex flex-col items-center justify-center p-4 text-center rotate-y-180 backface-hidden">
          <h3 className="text-lg font-bold text-blue-800 mb-2">More Info</h3>
          <p className="text-gray-700 text-sm">{moreInfo}</p>
        </div>
      </div>
    </div>
  );
}
