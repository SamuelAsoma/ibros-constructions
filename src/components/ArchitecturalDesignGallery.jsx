
import { Link } from 'react-router-dom';
import design1 from '../assets/images/design1.jpg';
import design2 from '../assets/images/design2.jpg';
import design3 from '../assets/images/design3.webp'; // Add new images
import design4 from '../assets/images/design4.webp';
import design5 from '../assets/images/design5.webp';
import design6 from '../assets/images/design6.webp';

const architecturalDesigns = [
  {
    id: '1',
    image: design1,
    title: 'Modern Office Design',
    description: 'A sleek and innovative office design that embraces open spaces and modern aesthetics.',
  },
  {
    id: '2',
    image: design2,
    title: 'Luxury Residential Design',
    description: 'An elegant residential design featuring top-notch amenities and luxurious living spaces.',
  },
  {
    id: '3',
    image: design3,
    title: 'Contemporary Art Gallery',
    description: 'A modern art gallery with minimalist design and extensive use of natural light.',
  },
  {
    id: '4',
    image: design4,
    title: 'Eco-Friendly Home',
    description: 'A sustainable home designed with eco-friendly materials and energy-efficient systems.',
  },
  {
    id: '5',
    image: design5,
    title: 'Urban Skyscraper',
    description: 'A high-rise building with innovative architectural features and stunning city views.',
  },
  {
    id: '6',
    image: design6,
    title: 'Seaside Villa',
    description: 'A luxurious seaside villa offering breathtaking ocean views and modern amenities.',
  },
];

const ArchitecturalDesignGallery = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
      {architecturalDesigns.map((design) => (
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
