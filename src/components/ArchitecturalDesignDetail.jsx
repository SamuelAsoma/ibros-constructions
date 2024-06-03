import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import architecturalDesigns from "../data/ArchitecturalDesignData";

const ArchitecturalDesignDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = architecturalDesigns.find(project => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hello, I am interested in the architectural design titled "${project.title}".`);
    window.open(`https://wa.me/233547538851?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent(`Inquiry about "${project.title}"`);
    const body = encodeURIComponent(`Hello,\n\nI am interested in the architectural design titled "${project.title}".\n\nPlease provide more details.\n\nThank you.`);
    window.location.href = `mailto:ibroone3030@gmail.com <ibroone3030@gmail.com>;?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6 pt-8 flex-grow">
        <button 
          className="text-orange-600 hover:text-orange-900 flex items-center mb-6"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{project.title}</h2>
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0">
            <div className="aspect-w-4 aspect-h-3 rounded-lg shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md md:w-1/2 lg:w-1/2 flex flex-col justify-between">
            <div>
              <p className="text-lg mb-4 text-gray-700">{project.description}</p>
              <p className="text-md text-gray-600">{project.details}</p>
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
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-orange-600">Contact Us</h3>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <button 
                  className="mt-2 sm:mt-0 bg-green-500 text-white px-6 py-3 rounded-lg flex items-center shadow-lg hover:bg-green-700 transition duration-300"
                  onClick={handleWhatsAppClick}
                >
                  <FaWhatsapp className="mr-2" /> WhatsApp
                </button>
                <button 
                  className="mt-2 sm:mt-0 bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center shadow-lg hover:bg-blue-700 transition duration-300"
                  onClick={handleEmailClick}
                >
                  <FaEnvelope className="mr-2" /> Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchitecturalDesignDetail;
