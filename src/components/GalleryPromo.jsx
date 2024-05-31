// src/components/GalleryPromo.jsx
import React from 'react';

const GalleryPromo = () => {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-gray-100">
      <div className="w-full max-w-4xl">
        <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.2225%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
          <iframe 
            loading="lazy" 
            style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
            src="https://www.canva.com/design/DAGGmNW29k0/rGQ4qDxzDj4nb1XHBjaAhw/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-bold mb-4">Explore Our Diverse Portfolio of Construction Designs.</h3>
        <button 
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg transition duration-300 hover:bg-blue-700"
          onClick={() => window.location.href = '/gallery'}
        >
          View Gallery
        </button>
      </div>
    </div>
  );
}

export default GalleryPromo;
