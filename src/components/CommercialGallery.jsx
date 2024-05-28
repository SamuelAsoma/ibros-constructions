
import { Link } from 'react-router-dom';
import commercial1 from '../assets/images/commercial1.jpg';
import commercial2 from '../assets/images/commercial2.jpg';
import commercial3 from '../assets/images/commercial3.webp'; // Add new images
import commercial4 from '../assets/images/commercial4.webp';
import commercial5 from '../assets/images/commercial5.webp';
import commercial6 from '../assets/images/commercial6.webp';

const commercialProjects = [
  {
    id: '1',
    image: commercial1,
    title: 'Modern Commercial Building',
    description: 'A state-of-the-art commercial building with modern amenities and design.',
    status: 'Pending',
    likes: 3,
  },
  {
    id: '2',
    image: commercial2,
    title: 'Spacious Retail Center',
    description: 'A spacious retail center offering a premium shopping experience.',
    status: 'Finished',
    likes: 4,
  },
  {
    id: '3',
    image: commercial3,
    title: 'Corporate Office Complex',
    description: 'An innovative office complex designed to foster collaboration and productivity.',
    status: 'Ongoing',
    likes: 5,
  },
  {
    id: '4',
    image: commercial4,
    title: 'Industrial Warehouse',
    description: 'A large industrial warehouse equipped with modern storage solutions.',
    status: 'Finished',
    likes: 4,
  },
  {
    id: '5',
    image: commercial5,
    title: 'Technology Park',
    description: 'A technology park designed to host cutting-edge tech companies and startups.',
    status: 'Pending',
    likes: 3,
  },
  {
    id: '6',
    image: commercial6,
    title: 'Retail and Entertainment Complex',
    description: 'A retail and entertainment complex offering a mix of shopping, dining, and leisure activities.',
    status: 'Finished',
    likes: 5,
  },
];

const CommercialGallery = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
      {commercialProjects.map((project) => (
        <div key={project.id} className="relative group">
          <Link to={`/gallery/commercial/${project.id}`}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300" 
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-300 flex flex-col items-center justify-center text-white p-4">
              <p className="text-lg font-bold mb-2">{project.title}</p>
              <p className="text-sm mb-2">{project.description}</p>
              <p className="text-sm mb-2">Status: {project.status}</p>
              <div className="flex items-center">
                <span className="mr-2">{project.likes} likes</span>
                {[...Array(5)].map((star, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${index < project.likes ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.748l-6 5.878 1.423 8.689L12 18.896l-7.423 5.419L6 15.626 0 9.748l8.332-1.593z" />
                  </svg>
                ))}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CommercialGallery;
