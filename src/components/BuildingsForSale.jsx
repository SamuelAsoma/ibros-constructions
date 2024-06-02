import React from 'react';
import { Link } from 'react-router-dom';
import buildingsData from '../data/BuildingsData';

const BuildingsForSale = () => {
  // Limiting to display only 2 buildings for sale on the home page
  const buildingsForSale = buildingsData.slice(0, 2);

  return (
    <section id="for-sale" className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8 animate-fadeIn border-b-2 border-orange-500 inline-block text-gray-800">Buildings for Sale</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 px-4 sm:px-6 lg:px-8">
        {buildingsForSale.map((building) => (
          <div key={building.id} className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <img src={building.image} alt={building.title} className="mb-4 w-full h-64 object-cover rounded-lg" />
            <h4 className="text-xl font-bold mb-2 text-gray-800">{building.title}</h4>
            <p className="text-lg leading-relaxed text-gray-700" style={{ lineHeight: '1.5' }}>{building.description}</p>
          </div>
        ))}
      </div>
      <Link to="/for-sale" className="mt-8 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        Explore Buildings for Sale
      </Link>
    </section>
  );
}

export default BuildingsForSale;
