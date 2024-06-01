import { useParams, useNavigate } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import buildingsData from '../data/BuildingsData';
import Header from '../components/Header';
import "react-image-gallery/styles/css/image-gallery.css";
import { FaArrowLeft } from 'react-icons/fa';

const BuildingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const building = buildingsData.find(building => building.id === parseInt(id));

  if (!building) {
    return <div>Building not found</div>;
  }

  const images = building.images.map(image => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-blue-500 hover:text-blue-600 mb-4"
            >
              <FaArrowLeft className="mr-2" />
              Back
            </button>
            <h2 className="text-4xl font-bold mb-6 text-center">{building.title}</h2>
            <div className="w-full max-w-4xl mx-auto">
              <ImageGallery items={images} showPlayButton={false} />
            </div>
            <div className="mt-8 text-center">
              <p className="text-xl mb-4">{building.description}</p>
              <p className="text-lg font-semibold mb-4">Status: {building.status}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={`mailto:info@yourcompany.com?subject=Inquiry about ${building.title}`}
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Contact via Email
                </a>
                <a
                  href={`https://wa.me/233547538851?text=I'm interested in ${building.title}.`}
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
                >
                  Contact via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingDetail;
