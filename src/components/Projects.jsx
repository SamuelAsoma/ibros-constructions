import React from 'react';
import { Link } from 'react-router-dom';
import archDesign1 from '../assets/images/arch-design1.jpg';
import archDesign2 from '../assets/images/arch-design2.jpg';
import archDesign3 from '../assets/images/arch-design3.jpg';
import ongoingP1 from '../assets/images/ongoing-p1.jpg';
import ongoingP2 from '../assets/images/ongoing-p2.jpg';
import ongoingP3 from '../assets/images/ongoing-p3.jpg';
import ongoingP4 from '../assets/images/ongoing-p4.jpg';
import ongoingP5 from '../assets/images/ongoing-p5.jpg';

const architecturalDesigns = [
  {
    image: archDesign1,
    title: 'Modern Office Design',
    description: 'Innovative and sleek office design with the latest architectural trends.',
  },
  {
    image: archDesign2,
    title: 'Luxury Residential Design',
    description: 'Elegant residential design with top-notch amenities and comfort.',
  },
  {
    image: archDesign3,
    title: 'Commercial Space Design',
    description: 'Functional and aesthetic commercial space design for various businesses.',
  },
];

const ongoingProjects = [
  {
    image: ongoingP1,
    title: 'High-Rise Commercial Building',
    description: 'Ongoing construction of a state-of-the-art commercial building.',
  },
  {
    image: ongoingP2,
    title: 'Residential Apartment Complex',
    description: 'Development of a luxurious apartment complex with modern amenities.',
  },
  {
    image: ongoingP3,
    title: 'Industrial Facility Construction',
    description: 'Construction of an efficient and durable industrial facility.',
  },
  {
    image: ongoingP4,
    title: 'Retail Space Development',
    description: 'Building a spacious retail space for a high-end shopping experience.',
  },
  {
    image: ongoingP5,
    title: 'Urban Residential Building',
    description: 'Creating a modern residential building in an urban area.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-8 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4 sm:mb-6 md:mb-8 animate-fadeIn border-b-2 border-orange-500 inline-block text-gray-800">Our Projects</h2>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-orange-500">Architectural Designs</h3>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
          {architecturalDesigns.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 animate-slideIn" style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={project.image} alt={project.title} className="mb-4 w-full h-64 object-cover rounded-lg" />
              <h4 className="text-lg font-bold mb-2 text-gray-800 border-t-2 border-b-2 border-gray-300 py-2">{project.title}</h4>
              <p className="text-lg leading-relaxed text-gray-700" style={{ lineHeight: '1.5' }}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-orange-500">Ongoing Construction Projects</h3>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
          {ongoingProjects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 animate-slideIn" style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={project.image} alt={project.title} className="mb-4 w-full h-64 object-cover rounded-lg" />
              <h4 className="text-lg font-bold mb-2 text-gray-800 border-t-2 border-b-2 border-gray-300 py-2">{project.title}</h4>
              <p className="text-lg leading-relaxed text-gray-700" style={{ lineHeight: '1.5' }}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Link to="/gallery/residential" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        Explore Our Gallery
      </Link>
    </section>
  );
}

export default Projects;
