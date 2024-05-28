
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import design1 from '../assets/images/design1.jpg';
import design2 from '../assets/images/design2.jpg';

const architecturalDesigns = [
  {
    id: '1',
    image: design1,
    title: 'Modern Office Design',
    description: 'A sleek and innovative office design that embraces open spaces and modern aesthetics.',
    details: 'This office design project includes collaborative workspaces, private offices, and a rooftop garden. The design prioritizes employee well-being with natural light, ergonomic furniture, and green spaces.',
  },
  {
    id: '2',
    image: design2,
    title: 'Luxury Residential Design',
    description: 'An elegant residential design featuring top-notch amenities and luxurious living spaces.',
    details: 'The residential design project features high-end finishes, spacious rooms, and a private garden. The design focuses on comfort and luxury, with smart home technology and sustainable materials.',
  },
];

const ArchitecturalDesignDetail = () => {
  const { id } = useParams();
  const project = architecturalDesigns.find(project => project.id === id);

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
        <div className="flex items-center mt-2">
          <span className="mr-2">Status: {project.status}</span>
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

export default ArchitecturalDesignDetail;
