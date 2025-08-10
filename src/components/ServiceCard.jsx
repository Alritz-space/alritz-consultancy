import React, { useState } from 'react';

export default function ServiceCard({ icon, title, description, moreInfo }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-80 h-60"
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700`}
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-white rounded-xl shadow-md p-6 text-center flex flex-col items-center justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-blue-500 text-4xl mb-4">{icon}</div>
          <h3 className="text-lg font-bold text-blue-700 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-blue-50 rounded-xl shadow-md p-6 text-center flex flex-col items-center justify-center"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
        >
          <h4 className="text-blue-700 font-bold mb-3">{title} – Details</h4>
          <p className="text-gray-700 text-sm">{moreInfo}</p>
          <span className="mt-4 text-xs text-gray-500">(Click to flip back)</span>
        </div>
      </div>
    </div>
  );
}
