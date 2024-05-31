
import { Link } from 'react-router-dom';
import architecturalDesigns  from '../data/ArchitecturalDesignData';



const ArchitecturalDesignGallery = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
      {architecturalDesigns .map((design) => (
        <div key={design.id} className="relative group">
          <Link to={`/gallery/architectural-design/${design.id}`}>
            <img 
              src={design.image} 
              alt={design.title} 
              className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300" 
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-300 flex flex-col items-center justify-center text-white p-4">
              <p className="text-lg font-bold mb-2">{design.title}</p>
              <p className="text-sm">{design.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ArchitecturalDesignGallery;
