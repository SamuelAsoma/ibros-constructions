import { useState } from 'react';
import buildingsData from '../data/BuildingsData';
import BuildingCard from '../components/BuildingCard';
import Header from '../components/Header';

const ForSale = () => {
  const [activeTab, setActiveTab] = useState('unfinished'); // Set to 'unfinished' if no completed buildings are available

  const completedBuildings = buildingsData.filter(building => building.status === 'Completed');
  const unfinishedBuildings = buildingsData.filter(building => building.status === 'Under Construction');

  // Check if there are no completed buildings and set the default tab accordingly
  const initialTab = completedBuildings.length > 0 ? 'completed' : 'unfinished';
  if (activeTab === 'completed' && completedBuildings.length === 0) {
    setActiveTab('unfinished');
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Buildings for Sale</h2>
        <div className="tabs flex justify-center space-x-4 mb-8">
          {completedBuildings.length > 0 && (
            <button
              onClick={() => setActiveTab('completed')}
              className={activeTab === 'completed' ? 'text-blue-500 underline' : 'hover:underline'}
            >
              Completed Buildings
            </button>
          )}
          <button
            onClick={() => setActiveTab('unfinished')}
            className={activeTab === 'unfinished' ? 'text-blue-500 underline' : 'hover:underline'}
          >
            Unfinished Buildings
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          {activeTab === 'completed' && completedBuildings.length > 0 ? (
            completedBuildings.map(building => <BuildingCard key={building.id} building={building} />)
          ) : activeTab === 'unfinished' && unfinishedBuildings.length > 0 ? (
            unfinishedBuildings.map(building => <BuildingCard key={building.id} building={building} />)
          ) : (
            <p className="text-center text-gray-600">No buildings available for sale at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForSale;
