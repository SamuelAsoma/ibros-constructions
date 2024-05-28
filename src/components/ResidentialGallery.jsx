
import { Link } from 'react-router-dom';
import residential1 from '../assets/images/residential1.jpg';
import residential2 from '../assets/images/residential2.jpg';
import residential3 from '../assets/images/residential3.webp'; // Add new images
import residential4 from '../assets/images/residential4.webp';
import residential5 from '../assets/images/residential5.webp';
import residential6 from '../assets/images/residential6.webp';

const residentialProjects = [
  {
    id: '1',
    image: residential1,
    title: 'Modern Family Home',
    description: 'A beautiful modern family home with spacious living areas and a large garden.',
    status: 'Finished',
    likes: 4,
  },
  {
    id: '2',
    image: residential2,
    title: 'Luxury Apartment',
    description: 'A luxury apartment offering stunning views and premium amenities.',
    status: 'Ongoing',
    likes: 5,
  },
  {
    id: '3',
    image: residential3,
    title: 'Eco-Friendly House',
    description: 'A sustainable and eco-friendly house designed with the environment in mind.',
    status: 'Finished',
    likes: 4,
  },
  {
    id: '4',
    image: residential4,
    title: 'Beachside Villa',
    description: 'A luxurious beachside villa offering stunning ocean views and modern amenities.',
    status: 'Pending',
    likes: 3,
  },
  {
    id: '5',
    image: residential5,
    title: 'Urban Loft',
    description: 'A chic urban loft designed for modern living in the heart of the city.',
    status: 'Ongoing',
    likes: 5,
  },
  {
    id: '6',
    image: residential6,
    title: 'Countryside Cottage',
    description: 'A charming countryside cottage with traditional design and modern comforts.',
    status: 'Finished',
    likes: 4,
  },
];

const ResidentialGallery = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
      {residentialProjects.map((project) => (
        <div key={project.id} className="relative group">
          <Link to={`/gallery/residential/${project.id}`}>
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

export default ResidentialGallery;
