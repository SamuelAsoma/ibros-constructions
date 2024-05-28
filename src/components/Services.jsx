
import { FaDraftingCompass, FaBuilding, FaHome, FaProjectDiagram, FaHammer } from 'react-icons/fa';

const services = [
  {
    icon: <FaDraftingCompass size={50} className="text-blue-500 mb-4" />,
    title: 'Architectural Design',
    description: 'Custom designs for commercial and residential buildings, tailored to meet your unique needs and preferences.'
  },
  {
    icon: <FaBuilding size={50} className="text-blue-500 mb-4" />,
    title: 'Commercial Construction',
    description: 'Building offices, retail spaces, and industrial facilities with a focus on functionality and aesthetics.'
  },
  {
    icon: <FaHome size={50} className="text-blue-500 mb-4" />,
    title: 'Residential Construction',
    description: 'Constructing homes, apartments, and residential complexes with attention to detail and quality craftsmanship.'
  },
  {
    icon: <FaProjectDiagram size={50} className="text-blue-500 mb-4" />,
    title: 'Project Management',
    description: 'Overseeing construction projects from start to finish, ensuring they are completed on time and within budget.'
  },
  {
    icon: <FaHammer size={50} className="text-blue-500 mb-4" />,
    title: 'Renovations and Remodeling',
    description: 'Upgrading and improving existing structures to meet modern standards and client requirements.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            {service.icon}
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
