
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import commercial1 from '../assets/images/commercial1.jpg';
import commercial2 from '../assets/images/commercial2.jpg';

const commercialProjects = [
  {
    id: '1',
    image: commercial1,
    title: 'Modern Commercial Building',
    description: 'A state-of-the-art commercial building with modern amenities and design.',
    status: 'Pending',
    likes: 3,
    details: 'This commercial building project features open-plan office spaces, conference rooms, and a rooftop cafeteria. The design emphasizes natural light and energy efficiency, with solar panels and an advanced HVAC system.',
  },
  {
    id: '2',
    image: commercial2,
    title: 'Spacious Retail Center',
    description: 'A spacious retail center offering a premium shopping experience.',
    status: 'Finished',
    likes: 4,
    details: 'The retail center project includes a variety of high-end shops, a food court, and ample parking. The design focuses on customer convenience and accessibility, with wide walkways, elevators, and clear signage.',
  },
];

const CommercialDetail = () => {
  const { id } = useParams();
  const project = commercialProjects.find(project => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 pt-20">
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <img src={project.image} alt={project.title} className="rounded-lg shadow-md mb-4" />
        <p className="text-lg mb-2">{project.description}</p>
        <p>{project.details}</p>
        <p className="mt-4">Status: {project.status}</p>
        <div className="flex items-center mt-2">
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
      <Footer />
    </div>
  );
}

export default CommercialDetail;
