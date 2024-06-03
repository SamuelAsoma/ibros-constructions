import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(project => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6 pt-24 flex-grow">
        <button 
          className="text-gray-600 hover:text-gray-900 flex items-center mb-6"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800">{project.title}</h2>
        <div className="flex flex-col md:flex-row md:space-x-6">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full md:w-1/2 lg:w-96 lg:h-64 object-cover rounded-lg shadow-lg mb-6 md:mb-0" 
          />
          <div className="bg-white p-6 rounded-lg shadow-md md:w-1/2 lg:w-auto">
            <p className="text-xl mb-4 text-gray-700">{project.description}</p>
            <p className="text-lg text-gray-600">{project.details}</p>
            <p className="text-lg font-semibold text-gray-800 mt-6">Status: <span className="font-normal">{project.status}</span></p>
            <div className="flex items-center mt-4">
              <span className="text-lg font-semibold text-gray-800 mr-2">{project.likes} likes</span>
              <div className="flex">
                {[...Array(5)].map((star, index) => (
                  <svg
                    key={index}
                    className={`w-6 h-6 ${index < project.likes ? 'text-yellow-500' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.748l-6 5.878 1.423 8.689L12 18.896l-7.423 5.419L6 15.626 0 9.748l8.332-1.593z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
