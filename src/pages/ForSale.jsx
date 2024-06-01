import React, { useState } from 'react';
import buildingsData from '../data/BuildingsData';
import BuildingCard from '../components/BuildingCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ForSale = () => {
  const [activeTab, setActiveTab] = useState('completed');

  const completedBuildings = buildingsData.filter(building => building.status === 'Completed');
  const unfinishedBuildings = buildingsData.filter(building => building.status === 'Under Construction');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">Buildings for Sale</h2>
        <div className="tabs flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('completed')}
            className={activeTab === 'completed' ? 'text-blue-500 underline' : 'hover:underline'}
          >
            Completed Buildings
          </button>
          <button
            onClick={() => setActiveTab('unfinished')}
            className={activeTab === 'unfinished' ? 'text-blue-500 underline' : 'hover:underline'}
          >
            Unfinished Buildings
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          {activeTab === 'completed'
            ? completedBuildings.map(building => <BuildingCard key={building.id} building={building} />)
            : unfinishedBuildings.map(building => <BuildingCard key={building.id} building={building} />)}
        </div>
      </div>
    </div>
  );
};

export default ForSale;
