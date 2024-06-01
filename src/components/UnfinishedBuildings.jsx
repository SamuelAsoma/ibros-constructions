import BuildingCard from './BuildingCard';
import buildings from '../data/unfinishedBuildingsData'; // Example data file

const UnfinishedBuildings = () => (
  <div className="flex flex-wrap justify-center">
    {buildings.map((building) => (
      <BuildingCard key={building.id} building={building} />
    ))}
  </div>
);

export default UnfinishedBuildings;
