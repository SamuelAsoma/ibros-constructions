
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import residential1 from '../assets/images/residential1.jpg';
import residential2 from '../assets/images/residential2.jpg';

const residentialProjects = [
  {
    id: '1',
    image: residential1,
    title: 'Modern Family Home',
    description: 'A beautiful modern family home with spacious living areas and a large garden.',
    status: 'Finished',
    likes: 4,
    details: 'This project involved creating a contemporary family home with open-plan living areas, large windows for natural light, and a landscaped garden. The design focuses on sustainability and energy efficiency, incorporating solar panels and a rainwater harvesting system.',
  },
  {
    id: '2',
    image: residential2,
    title: 'Luxury Apartment',
    description: 'A luxury apartment offering stunning views and premium amenities.',
    status: 'Ongoing',
    likes: 5,
    details: 'The luxury apartment project features high-end finishes, state-of-the-art appliances, and breathtaking views of the city skyline. The design includes a rooftop garden, a fitness center, and a swimming pool, providing residents with an all-inclusive living experience.',
  },
];

const ResidentialDetail = () => {
  const { id } = useParams();
  const project = residentialProjects.find(project => project.id === id);

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

export default ResidentialDetail;
