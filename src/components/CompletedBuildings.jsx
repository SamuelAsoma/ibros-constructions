import BuildingCard from './BuildingCard';
import buildings from '../data/BuildingsData'; // Example data file

const CompletedBuildings = () => (
  <div className="flex flex-wrap justify-center">
    {buildings.map((building) => (
      <BuildingCard key={building.id} building={building} />
    ))}
  </div>
);

export default CompletedBuildings;
