import { Link } from 'react-router-dom';

const BuildingCard = ({ building }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <img className="w-full h-48 object-cover" src={building.image} alt={building.title} />
    <div className="px-6 py-4">
      <h3 className="font-bold text-xl mb-2">{building.title}</h3>
      <p className="text-gray-700 text-base mb-4">{building.description}</p>
      <p className="text-green-500 font-semibold">Status: {building.status}</p>
      <Link to={`/building/${building.id}`} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded inline-block">View Details</Link>
    </div>
  </div>
);

export default BuildingCard;
